import {Team} from './Team';
import {Command} from './Command';
import {Stage} from './Stage';
import {GameEvent} from './GameEvent';

export class RefereeMessage {
  Stage: Stage;
  Command: Command;
  TeamYellow: Team;
  TeamBlue: Team;
  GameEvent: GameEvent;


  constructor() {
    this.Stage = new Stage();
    this.Command = new Command();
    this.TeamYellow = new Team('yellow team', 1, 0, 2, [100000000, 40000000], 1, 200000000);
    this.TeamBlue = new Team('Tigers Mannheim', 2, 1, 0, [], 0, 0);
    this.GameEvent = new GameEvent();
  }
}
