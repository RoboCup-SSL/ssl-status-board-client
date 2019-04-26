import {Component, Input, OnInit} from '@angular/core';
import {VisionService} from '../vision.service';
import {
  IReferee,
  ISSL_Micro_DetectionBall,
  ISSL_Micro_DetectionFrame,
  ISSL_Micro_DetectionRobot,
  ISSL_Micro_FieldCicularArc,
  ISSL_Micro_FieldLineSegment,
  ISSL_Micro_GeometryData,
  Referee,
  SSL_Micro_DetectionBall,
  SSL_Micro_WrapperPacket
} from '../sslProto';
import {Robot} from './Robot';
import {RefereeService} from '../referee.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  useShapesFromGeometry = false;
  @Input() rotateField = false;

  fieldWidth = 2000;
  fieldLength = 3000;
  boundaryWidth = 300;
  penAreaWidth = 1000;
  penAreaDepth = 500;
  goalWidth = 600;
  goalDepth = 180;
  centerCircleRadius = 500;
  ballRadius = 21.5;

  lines: ISSL_Micro_FieldLineSegment[] = [];
  arcs: ISSL_Micro_FieldCicularArc[] = [];
  robotsYellow: Map<number, Robot> = new Map();
  robotsBlue: Map<number, Robot> = new Map();
  balls: ISSL_Micro_DetectionBall[] = [];

  refereeMessage: IReferee;

  private visionService: VisionService;
  private refereeService: RefereeService;

  constructor(visionService: VisionService, refereeService: RefereeService) {
    this.visionService = visionService;
    this.refereeService = refereeService;
    this.refereeMessage = refereeService.defaultReferee();
    this.initSampleData();
  }

  static updateRobot(frame: ISSL_Micro_DetectionFrame, bot: ISSL_Micro_DetectionRobot, robots: Map<number, Robot>) {
    const robot = new Robot();
    robot.id = bot.robotId;
    robot.orientation = bot.orientation;
    robot.x = bot.x;
    robot.y = bot.y;
    robot.timestamp = Date.now();
    robots.set(robot.id, robot);
  }


  static removeVanishedRobots(robots: Map<number, Robot>) {
    for (const bot of  Array.from(robots.values())) {
      if ((Date.now() - bot.timestamp) > 500) {
        robots.delete(bot.id);
      }
    }
  }

  updateGeometry(geometry: ISSL_Micro_GeometryData) {
    this.fieldLength = geometry.field.fieldLength;
    this.fieldWidth = geometry.field.fieldWidth;
    this.boundaryWidth = geometry.field.boundaryWidth;
    this.goalDepth = geometry.field.goalDepth;
    this.goalWidth = geometry.field.goalWidth;
    this.lines = geometry.field.fieldLines;
    this.arcs = geometry.field.fieldArcs;
    this.useShapesFromGeometry = true;
  }

  ngOnInit() {
    this.visionService.getSubject().subscribe(
      (visionWrapper: MessageEvent) => this.onNewVisionWrapper(visionWrapper.data));
    this.refereeService.getSubject().subscribe(
      (refereeMsg: MessageEvent) => this.onNewRefereeMessage(refereeMsg.data));
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
    this.refereeMessage = Referee.decode(arr);
  }

  onNewVisionWrapper(data: Blob) {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (result instanceof ArrayBuffer) {
        this.readVisionWrapper(new Uint8Array(result));
      }
    };
    reader.readAsArrayBuffer(data);
  }

  readVisionWrapper(arr: Uint8Array) {
    const packet = SSL_Micro_WrapperPacket.decode(arr);
    if (packet.geometry != null) {
      this.updateGeometry(packet.geometry);
    }
    if (packet.detection != null) {
      this.updateDetection(packet.detection);
    }
  }

  updateDetection(detection: ISSL_Micro_DetectionFrame) {
    for (const bot of detection.robotsYellow) {
      FieldComponent.updateRobot(detection, bot, this.robotsYellow);
    }
    FieldComponent.removeVanishedRobots(this.robotsYellow);

    for (const bot of detection.robotsBlue) {
      FieldComponent.updateRobot(detection, bot, this.robotsBlue);
    }
    FieldComponent.removeVanishedRobots(this.robotsBlue);

    this.balls = detection.balls;
  }

  isCommandForYellow() {
    return this.refereeMessage.command.toString().includes('YELLOW');
  }

  getRobotsYellow() {
    return Array.from(this.robotsYellow.values());
  }

  getRobotsBlue() {
    return Array.from(this.robotsBlue.values());
  }

  getFieldTransformation() {
    if (this.rotateField) {
      return 'rotate(90) scale(' + (this.fieldWidth / this.fieldLength) + ')';
    }
    return '';
  }

  isCommandForBlue() {
    return this.refereeMessage.command.toString().includes('BLUE');
  }

  private initSampleData() {
    this.balls[0] = SSL_Micro_DetectionBall.create({
      x: 0, y: 0
      }
    );
    const pi = 3.14;
    this.robotsYellow.set(0, Robot.create(0, -1000, +500, 0));
    this.robotsYellow.set(1, Robot.create(1, -1000, +300, pi / 4.0));
    this.robotsYellow.set(2, Robot.create(2, -1000, +100, pi / 2.0));
    this.robotsYellow.set(3, Robot.create(3, -1000, -100, pi / 4.0 * 3.0));
    this.robotsYellow.set(4, Robot.create(4, -1000, -300, pi));
    this.robotsYellow.set(5, Robot.create(5, -1000, -500, 2 * pi));

    this.robotsBlue.set(0, Robot.create(0, 1000, -500, pi));
    this.robotsBlue.set(1, Robot.create(1, 1000, -300, pi + pi / 4.0));
    this.robotsBlue.set(2, Robot.create(2, 1000, -100, pi + pi / 2.0));
    this.robotsBlue.set(3, Robot.create(3, 1000, +100, pi + pi / 4.0 * 3.0));
    this.robotsBlue.set(4, Robot.create(4, 1000, +300, 2 * pi));
    this.robotsBlue.set(5, Robot.create(5, 1000, +500, pi));
  }

  isCommandNeutral() {
    return !this.isCommandForBlue() && !this.isCommandForYellow();
  }
}
