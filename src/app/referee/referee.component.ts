import {Component, OnInit} from '@angular/core';
import {RefereeService} from '../referee.service';
import {RefereeMessage} from '../RefereeMessage';
import {Team} from '../Team';

@Component({
  selector: 'app-referee',
  templateUrl: './referee.component.html',
  styleUrls: ['./referee.component.css']
})
export class RefereeComponent implements OnInit {

  refereeMessage: RefereeMessage;
  private refereeService: RefereeService;
  knownLogos: string[] = [
    'ais',
    'er-force',
    'kiks',
    'robodragons',
    'robofei',
    'roboime',
    'robojackets',
    'roboteam-twente',
    'tigers-mannheim',
    'ubc-thunderbots',
    'zjunlict'
  ];

  constructor(refereeService: RefereeService) {
    this.refereeService = refereeService;
    this.updateRefereeMessage(new RefereeMessage());
  }


  updateLogoUrl(team: Team) {

    const logoBaseName = team.Name.toLowerCase().replace(' ', '-');
    if (this.knownLogos.includes(logoBaseName)) {
      team.logoUrl = 'assets/logos/' + logoBaseName + '.png';
    } else {
      team.logoUrl = 'assets/logos/no-logo.png';
    }
  }

  ngOnInit() {
    this.refereeService.getSubject().subscribe(
      (refereeMsg: MessageEvent) => this.updateRefereeMessage(JSON.parse(refereeMsg.data))
    );
  }

  updateRefereeMessage(refereeMessage: RefereeMessage) {
    this.refereeMessage = refereeMessage;
    this.updateLogoUrl(this.refereeMessage.TeamYellow);
    this.updateLogoUrl(this.refereeMessage.TeamBlue);
  }
}
