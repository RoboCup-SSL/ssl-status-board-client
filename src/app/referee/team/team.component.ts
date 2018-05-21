import {Component, Input} from '@angular/core';
import {Team} from '../../Team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  @Input() team: Team;
  @Input() color: string;


  numberReturn(length) {
    return new Array(length);
  }
}
