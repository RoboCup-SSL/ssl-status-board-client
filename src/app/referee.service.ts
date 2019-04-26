import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Observer} from 'rxjs/Observer';
import {environment} from '../environments/environment';
import {GameEvent, GameEventType, IGameEvent, IReferee, Referee, Team} from './sslProto';
import ITeamInfo = Referee.ITeamInfo;
import TeamInfo = Referee.TeamInfo;
import BallLeftField = GameEvent.BallLeftField;
import MultipleCards = GameEvent.MultipleCards;
import BotSubstitution = GameEvent.BotSubstitution;
import NoProgressInGame = GameEvent.NoProgressInGame;
import BotCrashUnique = GameEvent.BotCrashUnique;

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

  public static defaultReferee(): IReferee {
    const ref = new Referee();
    ref.command = Referee.Command.HALT;
    ref.gameEvents = [
      RefereeService.dummyBallLeftField(),
      RefereeService.dummyMultipleCards(),
      RefereeService.dummyNoProgress(),
      RefereeService.dummyCrashUniqueSkipped(),
      RefereeService.dummyBotSubstitution()];
    ref.stage = Referee.Stage.EXTRA_FIRST_HALF_PRE;
    ref.stageTimeLeft = 200000000;
    ref.proposedGameEvents = [];
    ref.blueTeamOnPositiveHalf = true;
    ref.blue = RefereeService.defaultTeam('blue team');
    ref.yellow = RefereeService.defaultTeam('yellow team');
    return ref;
  }

  private static defaultTeam(name: string): ITeamInfo {
    const team = new TeamInfo();
    team.name = name;
    team.redCards = 1;
    team.yellowCards = 2;
    team.yellowCardTimes = [120000000];
    team.timeouts = 2;
    team.timeoutTime = 80000000;
    return team;
  }

  private static dummyBotSubstitution(): IGameEvent {
    const event = new GameEvent();
    event.type = GameEventType.BOT_SUBSTITUTION;
    event.botSubstitution = new BotSubstitution();
    event.botSubstitution.byTeam = Team.BLUE;
    return event;
  }

  private static dummyBallLeftField(): IGameEvent {
    const event = new GameEvent();
    event.type = GameEventType.BALL_LEFT_FIELD_GOAL_LINE;
    event.ballLeftFieldGoalLine = new BallLeftField();
    event.ballLeftFieldGoalLine.byBot = 2;
    event.ballLeftFieldGoalLine.byTeam = Team.YELLOW;
    return event;
  }

  private static dummyMultipleCards(): IGameEvent {
    const event = new GameEvent();
    event.type = GameEventType.MULTIPLE_CARDS;
    event.multipleCards = new MultipleCards();
    event.multipleCards.byTeam = Team.YELLOW;
    return event;
  }

  private static dummyNoProgress(): IGameEvent {
    const event = new GameEvent();
    event.type = GameEventType.NO_PROGRESS_IN_GAME;
    event.noProgressInGame = new NoProgressInGame();
    event.noProgressInGame.time = 7.555;
    return event;
  }

  private static dummyCrashUniqueSkipped(): IGameEvent {
    const event = new GameEvent();
    event.type = GameEventType.BOT_CRASH_UNIQUE_SKIPPED;
    event.botCrashUniqueSkipped = new BotCrashUnique();
    event.botCrashUniqueSkipped.byTeam = Team.BLUE;
    event.botCrashUniqueSkipped.victim = 1;
    event.botCrashUniqueSkipped.violator = 3;
    event.botCrashUniqueSkipped.crashAngle = 0.34;
    event.botCrashUniqueSkipped.crashSpeed = 0.6;
    event.botCrashUniqueSkipped.speedDiff = 0.2;
    return event;
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
}
