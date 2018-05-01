import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Observer} from 'rxjs/Observer';
import {environment} from '../environments/environment';

@Injectable()
export class RefereeService {

  private static webSocketKey = 'ssl-status-board-websocket-address';

  subject: Subject<any>;

  constructor() {
    this.subject = this.createSubject(RefereeService.getStatusWebSocketAddress());
  }

  public static getStatusWebSocketAddress() {
    let statusWebSocket = localStorage.getItem(RefereeService.webSocketKey);
    if (statusWebSocket == null) {
      statusWebSocket = environment.availableStatusWebSockets.values().next().value;
    }
    return statusWebSocket;
  }

  public updateWebSocketAddress(statusWebSocketAddress) {
    localStorage.setItem(RefereeService.webSocketKey, statusWebSocketAddress);
    window.location.reload();
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
}
