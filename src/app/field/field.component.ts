import {Component, OnInit} from '@angular/core';
import {VisionService} from '../vision.service';
import {
  ISSL_DetectionBall,
  ISSL_DetectionFrame,
  ISSL_DetectionRobot,
  ISSL_FieldCicularArc,
  ISSL_FieldLineSegment,
  ISSL_GeometryData,
  SSL_WrapperPacket
} from '../sslProto';
import {Robot} from './Robot';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  useShapesFromGeometry = true;
  rotateField = false;

  fieldWidth = 9000;
  fieldLength = 12000;
  boundaryWidth = 300;
  penAreaWidth = 2400;
  penAreaDepth = 1200;
  goalWidth = 1200;
  goalDepth = 180;
  centerCircleRadius = 500;
  botRadius = 90;
  ballRadius = 21.5;

  lines: ISSL_FieldLineSegment[] = [];
  arcs: ISSL_FieldCicularArc[] = [];
  robotsYellow: Map<number, Robot> = new Map();
  robotsBlue: Map<number, Robot> = new Map();
  balls: ISSL_DetectionBall[] = [];

  private visionService: VisionService;

  constructor(visionService: VisionService) {
    this.visionService = visionService;
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

  ngOnInit() {
    this.visionService.subject.subscribe(
      (visionWrapper: MessageEvent) => this.onNewVisionWrapper(visionWrapper.data));
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

  updateGeometry(geometry: ISSL_GeometryData) {
    this.fieldLength = geometry.field.fieldLength;
    this.fieldWidth = geometry.field.fieldWidth;
    this.boundaryWidth = geometry.field.boundaryWidth;
    this.goalDepth = geometry.field.goalDepth;
    this.goalWidth = geometry.field.goalWidth;
    if (this.useShapesFromGeometry) {
      this.lines = geometry.field.fieldLines;
      this.arcs = geometry.field.fieldArcs;
    }
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
}
