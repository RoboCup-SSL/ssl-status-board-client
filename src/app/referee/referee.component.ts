import {Component, OnInit} from '@angular/core';
import {RefereeService} from '../referee.service';
import {GameEventType, IGameEvent, IReferee, Referee, Team} from '../sslProto';

@Component({
  selector: 'app-referee',
  templateUrl: './referee.component.html',
  styleUrls: ['./referee.component.css']
})
export class RefereeComponent implements OnInit {

  GameEventType = GameEventType;
  Stage = Referee.Stage;
  Command = Referee.Command;

  refereeMessage: IReferee;
  teamLogoYellow: string;
  teamLogoBlue: string;
  private refereeService: RefereeService;
  knownLogos: string[] = [
    'ais',
    'cmμs',
    'er-force',
    'immortals',
    'kiks',
    'neuislanders',
    'robodragons',
    'robofei',
    'roboime',
    'robojackets',
    'roboteam-twente',
    'tigers-mannheim',
    'ubc-thunderbots',
    'umass-minutebots',
    'zjunlict'
  ];

  constructor(refereeService: RefereeService) {
    this.refereeService = refereeService;
    this.refereeMessage = RefereeService.defaultReferee();
    this.updateRefereeMessage(this.refereeMessage);
  }

  private static formatTeam(team: Team): string {
    if (team === Team.BLUE) {
      return 'Blue';
    } else if (team === Team.YELLOW) {
      return 'Yellow';
    }
    return 'Unknown;';
  }


  getLogoUrl(team: Referee.ITeamInfo): string {
    const logoBaseName = team.name.toLowerCase().replace(' ', '-');
    if (this.knownLogos.includes(logoBaseName)) {
      return 'assets/logos/' + logoBaseName + '.png';
    }
    return 'assets/logos/no-logo.png';
  }

  ngOnInit() {
    this.refereeService.getSubject().subscribe(
      (refereeMsg: MessageEvent) => this.onNewRefereeMessage(refereeMsg.data)
    );
  }

  onNewRefereeMessage(data: Blob) {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (result instanceof ArrayBuffer) {
        this.readRefereeMessage(new Uint8Array(result));
      }
    };
    reader.readAsArrayBuffer(data);
  }

  readRefereeMessage(arr: Uint8Array) {
    this.updateRefereeMessage(Referee.decode(arr));
  }

  updateRefereeMessage(refereeMessage: IReferee) {
    Object.assign(this.refereeMessage, refereeMessage);
    this.teamLogoYellow = this.getLogoUrl(this.refereeMessage.yellow);
    this.teamLogoBlue = this.getLogoUrl(this.refereeMessage.blue);
  }

  formatGameEvent(event: IGameEvent): string {
    if (event.aimlessKick != null) {
      if (event.aimlessKick.byBot == null) {
        return RefereeComponent.formatTeam(event.aimlessKick.byTeam) + ' kicked aimlessly';
      }
      return 'Bot ' + event.aimlessKick.byBot + ' of ' + RefereeComponent.formatTeam(event.aimlessKick.byTeam) + ' kicked aimlessly';
    }
    if (event.ballLeftFieldGoalLine != null) {
      if (event.ballLeftFieldGoalLine.byBot == null) {
        return RefereeComponent.formatTeam(event.ballLeftFieldGoalLine.byTeam) + ' kicked ball out via goal line';
      }
      return RefereeComponent.formatTeam(event.ballLeftFieldGoalLine.byTeam)
        + ' ' + event.ballLeftFieldGoalLine.byBot + ' kicked ball out via goal line';
    }
    return 'unknown game event';
  }
}
