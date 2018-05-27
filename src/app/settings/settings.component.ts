import {Component} from '@angular/core';
import {RefereeService} from '../referee.service';
import {environment} from '../../environments/environment';
import {VisionService} from '../vision.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  private statusWebSocket: string;
  private visionWebSocket: string;

  constructor() {
    this.statusWebSocket = RefereeService.getWebSocketAddress();
    this.visionWebSocket = VisionService.getWebSocketAddress();
  }

  getAvailableLabels() {
    return Array.from(environment.availableStatusWebSockets.keys());
  }

  updateStatusWebSocket(socketAddress: string) {
    RefereeService.updateWebSocketAddress(socketAddress);
    this.statusWebSocket = RefereeService.getWebSocketAddress();
  }

  updateVisionWebSocket(socketAddress: string) {
    VisionService.updateWebSocketAddress(socketAddress);
    this.visionWebSocket = VisionService.getWebSocketAddress();
  }

  onAddressSelected(label: string) {
    const statusAddress = environment.availableStatusWebSockets.get(label);
    this.updateStatusWebSocket(statusAddress);
    const visionAddress = environment.availableVisionWebSockets.get(label);
    this.updateVisionWebSocket(visionAddress);
  }

  getLegalNoticeUrl() {
    return environment.legalNoticeUrl;
  }

  getDataProtectionUrl() {
    return environment.dataProtectionUrl;
  }
}
