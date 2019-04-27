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
      return '<span style="color: #779fff">Blue</span>';
    } else if (team === Team.YELLOW) {
      return '<span style="color: #fff145">Yellow</span>';
    }
    return 'Unknown;';
  }

  private static teamAndBot(event: any) {
    if (event.byTeam === undefined) {
      return '';
    }
    if (event.byBot === undefined || !event.hasOwnProperty('byBot')) {
      return RefereeComponent.formatTeam(event.byTeam);
    }
    return RefereeComponent.formatTeam(event.byTeam) + ' ' + event.byBot;
  }

  private static radToDeg(rad: number): string {
    return Number(rad * 180 / Math.PI).toFixed(0) + '°';
  }

  private static velocity(v: number): string {
    return Number(v).toFixed(1) + 'm/s';
  }

  private static distance(v: number): string {
    return Number(v).toFixed(2) + 'm';
  }

  private static seconds(v: number): string {
    return Number(v).toFixed(1) + 's';
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
    if (event.prepared != null) {
      return `Prepared after ${RefereeComponent.seconds(event.prepared.timeTaken)}`;
    }
    if (event.noProgressInGame != null) {
      return `No progress for ${RefereeComponent.seconds(event.noProgressInGame.time)}`;
    }
    if (event.placementFailed != null) {
      return `${RefereeComponent.teamAndBot(event.placementFailed)} failed placing ball `
        + ` (${RefereeComponent.distance(event.placementFailed.remainingDistance)} remaining)`;
    }
    if (event.placementSucceeded != null) {
      return `${RefereeComponent.teamAndBot(event.placementSucceeded)} placed ball successfully `
        + `over ${RefereeComponent.distance(event.placementSucceeded.distance)} `
        + `within ${RefereeComponent.seconds(event.placementSucceeded.timeTaken)} `
        + `and ${RefereeComponent.distance(event.placementSucceeded.precision)}`;
    }
    if (event.botSubstitution != null) {
      return `${RefereeComponent.teamAndBot(event.botSubstitution)} requests bot substitution`;
    }
    if (event.tooManyRobots != null) {
      return `${RefereeComponent.teamAndBot(event.tooManyRobots)} has too many robots on field`;
    }
    if (event.ballLeftFieldTouchLine != null) {
      return `${RefereeComponent.teamAndBot(event.ballLeftFieldTouchLine)} kicked ball out via touch line`;
    }
    if (event.ballLeftFieldGoalLine != null) {
      return `${RefereeComponent.teamAndBot(event.ballLeftFieldGoalLine)} kicked ball out via goal line`;
    }
    if (event.possibleGoal != null) {
      return `${RefereeComponent.teamAndBot(event.possibleGoal)} might have scored a goal`;
    }
    if (event.goal != null) {
      return `${RefereeComponent.teamAndBot(event.goal)} has scored a goal`;
    }
    if (event.indirectGoal != null) {
      return `${RefereeComponent.teamAndBot(event.indirectGoal)} performed an illegal indirect goal`;
    }
    if (event.chippedGoal != null) {
      return `${RefereeComponent.teamAndBot(event.chippedGoal)} chipped on goal`;
    }
    if (event.aimlessKick != null) {
      return `${RefereeComponent.teamAndBot(event.aimlessKick)} kicked aimlessly`;
    }
    if (event.kickTimeout != null) {
      return `${RefereeComponent.teamAndBot(event.kickTimeout)} `
        + `has not kicked within ${RefereeComponent.seconds(event.kickTimeout.time)}`;
    }
    if (event.keeperHeldBall != null) {
      return `${RefereeComponent.teamAndBot(event.keeperHeldBall)}'s keeper `
        + `held the ball for ${RefereeComponent.seconds(event.keeperHeldBall.duration)}`;
    }
    if (event.attackerDoubleTouchedBall != null) {
      return `${RefereeComponent.teamAndBot(event.attackerDoubleTouchedBall)} touched ball twice`;
    }
    if (event.attackerInDefenseArea != null) {
      return `${RefereeComponent.teamAndBot(event.attackerInDefenseArea)} was in opponent defense area`;
    }
    if (event.attackerTouchedKeeper != null) {
      return `${RefereeComponent.teamAndBot(event.attackerTouchedKeeper)} touched opponent keeper`;
    }
    if (event.botDribbledBallTooFar != null) {
      return `${RefereeComponent.teamAndBot(event.botDribbledBallTooFar)} dribbled ball too far`;
    }
    if (event.botKickedBallTooFast != null) {
      return `${RefereeComponent.teamAndBot(event.botKickedBallTooFast)} kicked ball too fast` +
        `(${RefereeComponent.velocity(event.botKickedBallTooFast.initialBallSpeed)})`;
    }
    if (event.attackerTooCloseToDefenseArea != null) {
      return `${RefereeComponent.teamAndBot(event.attackerTooCloseToDefenseArea)} too close to opponent defense area `
        + `(${RefereeComponent.distance(event.attackerTooCloseToDefenseArea.distance)})`;
    }
    if (event.botInterferedPlacement != null) {
      return `${RefereeComponent.teamAndBot(event.botInterferedPlacement)} interfered placement`;
    }
    if (event.botCrashDrawn != null) {
      return `Bot Blue ${event.botCrashDrawn.botBlue} and Yellow ${event.botCrashDrawn.botYellow} `
        + `crashed with ${RefereeComponent.velocity(event.botCrashDrawn.crashSpeed)} `
        + `@ ${RefereeComponent.radToDeg(event.botCrashDrawn.crashAngle)} `
        + `(Δ${RefereeComponent.velocity(event.botCrashDrawn.speedDiff)})`;
    }
    if (event.botCrashUnique != null) {
      return `${RefereeComponent.teamAndBot(event.botCrashUnique)} ${event.botCrashUnique.violator} `
        + `crashed into ${event.botCrashUnique.victim} `
        + `with ${RefereeComponent.velocity(event.botCrashUnique.crashSpeed)} `
        + `@ ${RefereeComponent.radToDeg(event.botCrashUnique.crashAngle)} `
        + `(Δ${RefereeComponent.velocity(event.botCrashUnique.speedDiff)})`;
    }
    if (event.botCrashUniqueSkipped != null) {
      return `Skipped: ${RefereeComponent.teamAndBot(event.botCrashUniqueSkipped)} ${event.botCrashUniqueSkipped.violator} `
        + `crashed into ${event.botCrashUniqueSkipped.victim} `
        + `with ${RefereeComponent.velocity(event.botCrashUniqueSkipped.crashSpeed)} `
        + `@ ${RefereeComponent.radToDeg(event.botCrashUniqueSkipped.crashAngle)} `
        + `(Δ${RefereeComponent.velocity(event.botCrashUniqueSkipped.speedDiff)})`;
    }
    if (event.botPushedBot != null) {
      return `${RefereeComponent.teamAndBot(event.botPushedBot)} ${event.botPushedBot.violator} `
        + `pushed ${event.botPushedBot.victim} `
        + `over ${RefereeComponent.distance(event.botPushedBot.pushedDistance)}`;
    }
    if (event.botPushedBotSkipped != null) {
      return `Skipped: ${RefereeComponent.teamAndBot(event.botPushedBotSkipped)} ${event.botPushedBotSkipped.violator} `
        + `pushed ${event.botPushedBotSkipped.victim} `
        + `over ${RefereeComponent.distance(event.botPushedBotSkipped.pushedDistance)}`;
    }
    if (event.botHeldBallDeliberately != null) {
      return `${RefereeComponent.teamAndBot(event.botHeldBallDeliberately)} `
        + `held ball deliberately for ${event.botHeldBallDeliberately.duration}`;
    }
    if (event.botTippedOver != null) {
      return `${RefereeComponent.teamAndBot(event.botTippedOver)} tipped over`;
    }
    if (event.botTooFastInStop != null) {
      return `${RefereeComponent.teamAndBot(event.botTooFastInStop)} `
        + `too fast during stop (${RefereeComponent.velocity(event.botTooFastInStop.speed)})`;
    }
    if (event.defenderTooCloseToKickPoint != null) {
      return `${RefereeComponent.teamAndBot(event.defenderTooCloseToKickPoint)} `
        + `too close to kick point (${RefereeComponent.velocity(event.defenderTooCloseToKickPoint.distance)})`;
    }
    if (event.defenderInDefenseAreaPartially != null) {
      return `${RefereeComponent.teamAndBot(event.defenderInDefenseAreaPartially)} `
        + `touched ball while partially inside own defense area `
        + `(${RefereeComponent.distance(event.defenderInDefenseAreaPartially.distance)})`;
    }
    if (event.defenderInDefenseArea != null) {
      return `${RefereeComponent.teamAndBot(event.defenderInDefenseArea)} `
        + `touched ball while fully inside own defense area `
        + `(${RefereeComponent.distance(event.defenderInDefenseArea.distance)})`;
    }
    if (event.multipleCards != null) {
      return `${RefereeComponent.teamAndBot(event.multipleCards)} collected multiple cards`;
    }
    if (event.multiplePlacementFailures != null) {
      return `${RefereeComponent.teamAndBot(event.multiplePlacementFailures)} failed ball placement repeatedly`;
    }
    if (event.multipleFouls != null) {
      return `${RefereeComponent.teamAndBot(event.multipleFouls)} collected multiple fouls`;
    }
    if (event.unsportingBehaviorMinor != null) {
      return `${RefereeComponent.teamAndBot(event.unsportingBehaviorMinor)} punished for minor unsporting behavior: `
        + event.unsportingBehaviorMinor.reason;
    }
    if (event.unsportingBehaviorMajor != null) {
      return `${RefereeComponent.teamAndBot(event.unsportingBehaviorMajor)} punished for major unsporting behavior: `
        + event.unsportingBehaviorMajor.reason;
    }
    return 'unknown game event';
  }
}
