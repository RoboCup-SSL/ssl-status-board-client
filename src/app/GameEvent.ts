import {Originator} from './Originator';

export class GameEvent {
  Type: string;
  Originator: Originator;
  Message: string;

  constructor() {
    this.Type = 'NOTHING';
    this.Originator = new Originator();
    this.Message = 'Nothing happened :) Just testing custom message.';
  }
}
