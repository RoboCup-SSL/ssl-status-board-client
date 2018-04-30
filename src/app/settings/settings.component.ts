import {Component} from '@angular/core';
import {RefereeService} from '../referee.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  private refereeService: RefereeService;
  private statusWebSocket: string;
  private webSockets = environment.availableStatusWebSockets;

  constructor(refereeService: RefereeService) {
    this.refereeService = refereeService;
    this.statusWebSocket = RefereeService.getStatusWebSocketAddress();
  }

  getWebSocketLabels() {
    return Array.from(this.webSockets.keys());
  }

  updateWebSocket(socketAddress: string) {
    this.refereeService.updateWebSocketAddress(socketAddress);
    this.statusWebSocket = RefereeService.getStatusWebSocketAddress();
  }

  onAddressSelected(label: string) {
    const address = this.webSockets.get(label);
    this.updateWebSocket(address);
  }
}
