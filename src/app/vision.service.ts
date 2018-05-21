import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Observer} from 'rxjs/Observer';
import {environment} from '../environments/environment';

@Injectable()
export class VisionService {

  private static webSocketKey = 'ssl-status-board-vision-websocket-address';

  private subject: Subject<any>;

  constructor() {
  }

  public static getWebSocketAddress() {
    let webSocketAddress = localStorage.getItem(VisionService.webSocketKey);
    if (webSocketAddress == null) {
      webSocketAddress = environment.availableVisionWebSockets.values().next().value;
    }
    return webSocketAddress;
  }

  public static updateWebSocketAddress(webSocketAddress) {
    localStorage.setItem(VisionService.webSocketKey, webSocketAddress);
    window.location.reload();
  }

  private createSubject(url: string): Subject<MessageEvent> {
    const socket = new WebSocket(url);
    socket.binaryType = 'blob';
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
      this.subject = this.createSubject(VisionService.getWebSocketAddress());
    }
    return this.subject;
  }
}
