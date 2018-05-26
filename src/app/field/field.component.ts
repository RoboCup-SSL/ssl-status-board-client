import {Component, Input, OnInit} from '@angular/core';
import {VisionService} from '../vision.service';
import {
  ISSL_DetectionBall,
  ISSL_DetectionFrame,
  ISSL_DetectionRobot,
  ISSL_FieldCicularArc,
  ISSL_FieldLineSegment,
  ISSL_GeometryData,
  SSL_DetectionBall,
  SSL_WrapperPacket
} from '../sslProto';
import {Robot} from './Robot';
import {RefereeService} from '../referee.service';
import {RefereeMessage} from '../RefereeMessage';

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

  lines: ISSL_FieldLineSegment[] = [];
  arcs: ISSL_FieldCicularArc[] = [];
  robotsYellow: Map<number, Robot> = new Map();
  robotsBlue: Map<number, Robot> = new Map();
  balls: ISSL_DetectionBall[] = [];

  refereeMessage: RefereeMessage = new RefereeMessage();

  private visionService: VisionService;
  private refereeService: RefereeService;

  constructor(visionService: VisionService, refereeService: RefereeService) {
    this.visionService = visionService;
    this.refereeService = refereeService;
    this.initSampleData();
  }

  static updateRobot(frame: ISSL_DetectionFrame, bot: ISSL_DetectionRobot, robots: Map<number, Robot>) {
    const robot = new Robot();
    robot.id = bot.robotId;
    robot.orientation = bot.orientation;
    robot.x = bot.x;
    robot.y = bot.y;
    robot.timestamp = frame.tCapture;
    robots.set(robot.id, robot);
  }


  static removeVanishedRobots(currentTimestamp: number, robots: Map<number, Robot>) {
    for (const bot of  Array.from(robots.values())) {
      if ((currentTimestamp - bot.timestamp) > 0.5) {
        robots.delete(bot.id);
      }
    }
  }

  updateGeometry(geometry: ISSL_GeometryData) {
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
      (refereeMsg: MessageEvent) => this.refereeMessage = JSON.parse(refereeMsg.data));
  }

  onNewVisionWrapper(data: Blob) {
    const reader = new FileReader();
    reader.onload = () => {
      this.onReadData(new Uint8Array(reader.result));
    };
    reader.readAsArrayBuffer(data);
  }

  onReadData(arr: Uint8Array) {
    const packet = SSL_WrapperPacket.decode(arr);
    if (packet.geometry != null) {
      this.updateGeometry(packet.geometry);
    }
    if (packet.detection != null) {
      this.updateDetection(packet.detection);
    }
  }

  private initSampleData() {
    this.balls[0] = SSL_DetectionBall.create({
      confidence: 0, area: 0, x: 0, y: 0, z: 0, pixelX: 0, pixelY: 0
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

  updateDetection(detection: ISSL_DetectionFrame) {
    for (const bot of detection.robotsYellow) {
      FieldComponent.updateRobot(detection, bot, this.robotsYellow);
    }
    FieldComponent.removeVanishedRobots(detection.tCapture, this.robotsYellow);

    for (const bot of detection.robotsBlue) {
      FieldComponent.updateRobot(detection, bot, this.robotsBlue);
    }
    FieldComponent.removeVanishedRobots(detection.tCapture, this.robotsBlue);

    this.balls = detection.balls;
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

  isCommandForYellow() {
    return this.refereeMessage.Command.Name.includes('YELLOW');
  }

  isCommandForBlue() {
    return this.refereeMessage.Command.Name.includes('BLUE');
  }

  isCommandNeutral() {
    return !this.isCommandForBlue() && !this.isCommandForYellow();
  }
}
