export class Robot {
  id: number;
  x: number;
  y: number;
  orientation: number;
  timestamp: number;

  center2Dribbler = 75;
  botRadius = 90;

  orient2CornerAngle() {
    return Math.acos(this.center2Dribbler / this.botRadius);
  }

  botRightX() {
    return Math.sin(this.orientation + this.orient2CornerAngle()) * this.botRadius;
  }

  botRightY() {
    return Math.cos(this.orientation + this.orient2CornerAngle()) * this.botRadius;
  }

  botLeftX() {
    return Math.sin(this.orientation - this.orient2CornerAngle()) * this.botRadius;
  }

  botLeftY() {
    return Math.cos(this.orientation - this.orient2CornerAngle()) * this.botRadius;
  }
}
