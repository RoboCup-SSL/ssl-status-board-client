export class Robot {
  id: number;
  x: number;
  y: number;
  orientation: number;
  timestamp: number;

  center2Dribbler = 75;
  botRadius = 90;

  static create(id: number, x: number, y: number, orientation: number): Robot {
    const bot = new Robot();
    bot.id = id;
    bot.x = x;
    bot.y = y;
    bot.orientation = orientation;
    bot.timestamp = 0;
    return bot;
  }

  orient2CornerAngle() {
    return Math.acos(this.center2Dribbler / this.botRadius);
  }

  botRightX() {
    return Math.cos(this.orientation + this.orient2CornerAngle()) * this.botRadius;
  }

  botRightY() {
    return Math.sin(this.orientation + this.orient2CornerAngle()) * this.botRadius;
  }

  botLeftX() {
    return Math.cos(this.orientation - this.orient2CornerAngle()) * this.botRadius;
  }

  botLeftY() {
    return Math.sin(this.orientation - this.orient2CornerAngle()) * this.botRadius;
  }
}
