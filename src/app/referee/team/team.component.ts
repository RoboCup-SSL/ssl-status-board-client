import {Component, Input} from '@angular/core';
import {Referee} from '../../sslProto';
import ITeamInfo = Referee.ITeamInfo;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  @Input() team: ITeamInfo;
  @Input() logoUrl: string;
  @Input() color: string;


  numberReturn(length) {
    return new Array(length);
  }
}
