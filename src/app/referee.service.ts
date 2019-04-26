import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Observer} from 'rxjs/Observer';
import {environment} from '../environments/environment';
import {IReferee, Referee} from './sslProto';
import ITeamInfo = Referee.ITeamInfo;
import TeamInfo = Referee.TeamInfo;

@Injectable()
export class RefereeService {

  private static webSocketKey = 'ssl-status-board-websocket-address';

  subject: Subject<any>;

  constructor() {
  }

  public static getWebSocketAddress() {
    let statusWebSocket = localStorage.getItem(RefereeService.webSocketKey);
    if (statusWebSocket == null) {
      statusWebSocket = environment.availableStatusWebSockets.values().next().value;
    }
    return statusWebSocket;
  }

  public static updateWebSocketAddress(statusWebSocketAddress) {
    localStorage.setItem(RefereeService.webSocketKey, statusWebSocketAddress);
    window.location.reload();
  }

  private static defaultTeam(name: string): ITeamInfo {
    const team = new TeamInfo();
    team.name = name;
    return team;
  }

  private createSubject(url: string): Subject<MessageEvent> {
    const socket = new WebSocket(url);
    const observable = Observable.create(
      (o: Observer<MessageEvent>) => {
        socket.onmessage = o.next.bind(o);
        socket.onerror = o.error.bind(o);
        socket.onclose = o.complete.bind(o);
        return socket.close.bind(socket);
      }
    );
    return Subject.create(null, observable);
  }

  public getSubject() {
    if (this.subject == null) {
      this.subject = this.createSubject(RefereeService.getWebSocketAddress());
    }
    return this.subject;
  }

  public defaultReferee(): IReferee {
    const ref = new Referee();
    ref.command = Referee.Command.HALT;
    ref.gameEvents = [];
    ref.stage = Referee.Stage.EXTRA_FIRST_HALF_PRE;
    ref.stageTimeLeft = 0;
    ref.proposedGameEvents = [];
    ref.blueTeamOnPositiveHalf = true;
    ref.commandCounter = 0;
    ref.blue = RefereeService.defaultTeam('blue team');
    ref.yellow = RefereeService.defaultTeam('yellow team');
    return ref;
  }
}
