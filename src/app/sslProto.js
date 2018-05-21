/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.SSL_DetectionBall = (function () {

  /**
   * Properties of a SSL_DetectionBall.
   * @exports ISSL_DetectionBall
   * @interface ISSL_DetectionBall
   * @property {number} confidence SSL_DetectionBall confidence
   * @property {number|null} [area] SSL_DetectionBall area
   * @property {number} x SSL_DetectionBall x
   * @property {number} y SSL_DetectionBall y
   * @property {number|null} [z] SSL_DetectionBall z
   * @property {number} pixelX SSL_DetectionBall pixelX
   * @property {number} pixelY SSL_DetectionBall pixelY
   */

  /**
   * Constructs a new SSL_DetectionBall.
   * @exports SSL_DetectionBall
   * @classdesc Represents a SSL_DetectionBall.
   * @implements ISSL_DetectionBall
   * @constructor
   * @param {ISSL_DetectionBall=} [properties] Properties to set
   */
  function SSL_DetectionBall(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null)
          this[keys[i]] = properties[keys[i]];
  }

  /**
   * SSL_DetectionBall confidence.
   * @member {number} confidence
   * @memberof SSL_DetectionBall
   * @instance
   */
  SSL_DetectionBall.prototype.confidence = 0;

  /**
   * SSL_DetectionBall area.
   * @member {number} area
   * @memberof SSL_DetectionBall
   * @instance
   */
  SSL_DetectionBall.prototype.area = 0;

  /**
   * SSL_DetectionBall x.
   * @member {number} x
   * @memberof SSL_DetectionBall
   * @instance
   */
  SSL_DetectionBall.prototype.x = 0;

  /**
   * SSL_DetectionBall y.
   * @member {number} y
   * @memberof SSL_DetectionBall
   * @instance
   */
  SSL_DetectionBall.prototype.y = 0;

  /**
   * SSL_DetectionBall z.
   * @member {number} z
   * @memberof SSL_DetectionBall
   * @instance
   */
  SSL_DetectionBall.prototype.z = 0;

  /**
   * SSL_DetectionBall pixelX.
   * @member {number} pixelX
   * @memberof SSL_DetectionBall
   * @instance
   */
  SSL_DetectionBall.prototype.pixelX = 0;

  /**
   * SSL_DetectionBall pixelY.
   * @member {number} pixelY
   * @memberof SSL_DetectionBall
   * @instance
   */
  SSL_DetectionBall.prototype.pixelY = 0;

  /**
   * Creates a new SSL_DetectionBall instance using the specified properties.
   * @function create
   * @memberof SSL_DetectionBall
   * @static
   * @param {ISSL_DetectionBall=} [properties] Properties to set
   * @returns {SSL_DetectionBall} SSL_DetectionBall instance
   */
  SSL_DetectionBall.create = function create(properties) {
    return new SSL_DetectionBall(properties);
  };

  /**
   * Encodes the specified SSL_DetectionBall message. Does not implicitly {@link SSL_DetectionBall.verify|verify} messages.
   * @function encode
   * @memberof SSL_DetectionBall
   * @static
   * @param {ISSL_DetectionBall} message SSL_DetectionBall message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_DetectionBall.encode = function encode(message, writer) {
    if (!writer)
      writer = $Writer.create();
    writer.uint32(/* id 1, wireType 5 =*/13).float(message.confidence);
    if (message.area != null && message.hasOwnProperty("area"))
      writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.area);
    writer.uint32(/* id 3, wireType 5 =*/29).float(message.x);
    writer.uint32(/* id 4, wireType 5 =*/37).float(message.y);
    if (message.z != null && message.hasOwnProperty("z"))
      writer.uint32(/* id 5, wireType 5 =*/45).float(message.z);
    writer.uint32(/* id 6, wireType 5 =*/53).float(message.pixelX);
    writer.uint32(/* id 7, wireType 5 =*/61).float(message.pixelY);
    return writer;
  };

  /**
   * Encodes the specified SSL_DetectionBall message, length delimited. Does not implicitly {@link SSL_DetectionBall.verify|verify} messages.
   * @function encodeDelimited
   * @memberof SSL_DetectionBall
   * @static
   * @param {ISSL_DetectionBall} message SSL_DetectionBall message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_DetectionBall.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a SSL_DetectionBall message from the specified reader or buffer.
   * @function decode
   * @memberof SSL_DetectionBall
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {SSL_DetectionBall} SSL_DetectionBall
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_DetectionBall.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader))
      reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SSL_DetectionBall();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confidence = reader.float();
          break;
        case 2:
          message.area = reader.uint32();
          break;
        case 3:
          message.x = reader.float();
          break;
        case 4:
          message.y = reader.float();
          break;
        case 5:
          message.z = reader.float();
          break;
        case 6:
          message.pixelX = reader.float();
          break;
        case 7:
          message.pixelY = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("confidence"))
      throw $util.ProtocolError("missing required 'confidence'", {instance: message});
    if (!message.hasOwnProperty("x"))
      throw $util.ProtocolError("missing required 'x'", {instance: message});
    if (!message.hasOwnProperty("y"))
      throw $util.ProtocolError("missing required 'y'", {instance: message});
    if (!message.hasOwnProperty("pixelX"))
      throw $util.ProtocolError("missing required 'pixelX'", {instance: message});
    if (!message.hasOwnProperty("pixelY"))
      throw $util.ProtocolError("missing required 'pixelY'", {instance: message});
    return message;
  };

  /**
   * Decodes a SSL_DetectionBall message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof SSL_DetectionBall
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {SSL_DetectionBall} SSL_DetectionBall
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_DetectionBall.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader))
      reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a SSL_DetectionBall message.
   * @function verify
   * @memberof SSL_DetectionBall
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  SSL_DetectionBall.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
    if (typeof message.confidence !== "number")
      return "confidence: number expected";
    if (message.area != null && message.hasOwnProperty("area"))
      if (!$util.isInteger(message.area))
        return "area: integer expected";
    if (typeof message.x !== "number")
      return "x: number expected";
    if (typeof message.y !== "number")
      return "y: number expected";
    if (message.z != null && message.hasOwnProperty("z"))
      if (typeof message.z !== "number")
        return "z: number expected";
    if (typeof message.pixelX !== "number")
      return "pixelX: number expected";
    if (typeof message.pixelY !== "number")
      return "pixelY: number expected";
    return null;
  };

  /**
   * Creates a SSL_DetectionBall message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof SSL_DetectionBall
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {SSL_DetectionBall} SSL_DetectionBall
   */
  SSL_DetectionBall.fromObject = function fromObject(object) {
    if (object instanceof $root.SSL_DetectionBall)
      return object;
    var message = new $root.SSL_DetectionBall();
    if (object.confidence != null)
      message.confidence = Number(object.confidence);
    if (object.area != null)
      message.area = object.area >>> 0;
    if (object.x != null)
      message.x = Number(object.x);
    if (object.y != null)
      message.y = Number(object.y);
    if (object.z != null)
      message.z = Number(object.z);
    if (object.pixelX != null)
      message.pixelX = Number(object.pixelX);
    if (object.pixelY != null)
      message.pixelY = Number(object.pixelY);
    return message;
  };

  /**
   * Creates a plain object from a SSL_DetectionBall message. Also converts values to other types if specified.
   * @function toObject
   * @memberof SSL_DetectionBall
   * @static
   * @param {SSL_DetectionBall} message SSL_DetectionBall
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  SSL_DetectionBall.toObject = function toObject(message, options) {
    if (!options)
      options = {};
    var object = {};
    if (options.defaults) {
      object.confidence = 0;
      object.area = 0;
      object.x = 0;
      object.y = 0;
      object.z = 0;
      object.pixelX = 0;
      object.pixelY = 0;
    }
    if (message.confidence != null && message.hasOwnProperty("confidence"))
      object.confidence = options.json && !isFinite(message.confidence) ? String(message.confidence) : message.confidence;
    if (message.area != null && message.hasOwnProperty("area"))
      object.area = message.area;
    if (message.x != null && message.hasOwnProperty("x"))
      object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
    if (message.y != null && message.hasOwnProperty("y"))
      object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
    if (message.z != null && message.hasOwnProperty("z"))
      object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
    if (message.pixelX != null && message.hasOwnProperty("pixelX"))
      object.pixelX = options.json && !isFinite(message.pixelX) ? String(message.pixelX) : message.pixelX;
    if (message.pixelY != null && message.hasOwnProperty("pixelY"))
      object.pixelY = options.json && !isFinite(message.pixelY) ? String(message.pixelY) : message.pixelY;
    return object;
  };

  /**
   * Converts this SSL_DetectionBall to JSON.
   * @function toJSON
   * @memberof SSL_DetectionBall
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  SSL_DetectionBall.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return SSL_DetectionBall;
})();

$root.SSL_DetectionRobot = (function () {

  /**
   * Properties of a SSL_DetectionRobot.
   * @exports ISSL_DetectionRobot
   * @interface ISSL_DetectionRobot
   * @property {number} confidence SSL_DetectionRobot confidence
   * @property {number|null} [robotId] SSL_DetectionRobot robotId
   * @property {number} x SSL_DetectionRobot x
   * @property {number} y SSL_DetectionRobot y
   * @property {number|null} [orientation] SSL_DetectionRobot orientation
   * @property {number} pixelX SSL_DetectionRobot pixelX
   * @property {number} pixelY SSL_DetectionRobot pixelY
   * @property {number|null} [height] SSL_DetectionRobot height
   */

  /**
   * Constructs a new SSL_DetectionRobot.
   * @exports SSL_DetectionRobot
   * @classdesc Represents a SSL_DetectionRobot.
   * @implements ISSL_DetectionRobot
   * @constructor
   * @param {ISSL_DetectionRobot=} [properties] Properties to set
   */
  function SSL_DetectionRobot(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null)
          this[keys[i]] = properties[keys[i]];
  }

  /**
   * SSL_DetectionRobot confidence.
   * @member {number} confidence
   * @memberof SSL_DetectionRobot
   * @instance
   */
  SSL_DetectionRobot.prototype.confidence = 0;

  /**
   * SSL_DetectionRobot robotId.
   * @member {number} robotId
   * @memberof SSL_DetectionRobot
   * @instance
   */
  SSL_DetectionRobot.prototype.robotId = 0;

  /**
   * SSL_DetectionRobot x.
   * @member {number} x
   * @memberof SSL_DetectionRobot
   * @instance
   */
  SSL_DetectionRobot.prototype.x = 0;

  /**
   * SSL_DetectionRobot y.
   * @member {number} y
   * @memberof SSL_DetectionRobot
   * @instance
   */
  SSL_DetectionRobot.prototype.y = 0;

  /**
   * SSL_DetectionRobot orientation.
   * @member {number} orientation
   * @memberof SSL_DetectionRobot
   * @instance
   */
  SSL_DetectionRobot.prototype.orientation = 0;

  /**
   * SSL_DetectionRobot pixelX.
   * @member {number} pixelX
   * @memberof SSL_DetectionRobot
   * @instance
   */
  SSL_DetectionRobot.prototype.pixelX = 0;

  /**
   * SSL_DetectionRobot pixelY.
   * @member {number} pixelY
   * @memberof SSL_DetectionRobot
   * @instance
   */
  SSL_DetectionRobot.prototype.pixelY = 0;

  /**
   * SSL_DetectionRobot height.
   * @member {number} height
   * @memberof SSL_DetectionRobot
   * @instance
   */
  SSL_DetectionRobot.prototype.height = 0;

  /**
   * Creates a new SSL_DetectionRobot instance using the specified properties.
   * @function create
   * @memberof SSL_DetectionRobot
   * @static
   * @param {ISSL_DetectionRobot=} [properties] Properties to set
   * @returns {SSL_DetectionRobot} SSL_DetectionRobot instance
   */
  SSL_DetectionRobot.create = function create(properties) {
    return new SSL_DetectionRobot(properties);
  };

  /**
   * Encodes the specified SSL_DetectionRobot message. Does not implicitly {@link SSL_DetectionRobot.verify|verify} messages.
   * @function encode
   * @memberof SSL_DetectionRobot
   * @static
   * @param {ISSL_DetectionRobot} message SSL_DetectionRobot message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_DetectionRobot.encode = function encode(message, writer) {
    if (!writer)
      writer = $Writer.create();
    writer.uint32(/* id 1, wireType 5 =*/13).float(message.confidence);
    if (message.robotId != null && message.hasOwnProperty("robotId"))
      writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.robotId);
    writer.uint32(/* id 3, wireType 5 =*/29).float(message.x);
    writer.uint32(/* id 4, wireType 5 =*/37).float(message.y);
    if (message.orientation != null && message.hasOwnProperty("orientation"))
      writer.uint32(/* id 5, wireType 5 =*/45).float(message.orientation);
    writer.uint32(/* id 6, wireType 5 =*/53).float(message.pixelX);
    writer.uint32(/* id 7, wireType 5 =*/61).float(message.pixelY);
    if (message.height != null && message.hasOwnProperty("height"))
      writer.uint32(/* id 8, wireType 5 =*/69).float(message.height);
    return writer;
  };

  /**
   * Encodes the specified SSL_DetectionRobot message, length delimited. Does not implicitly {@link SSL_DetectionRobot.verify|verify} messages.
   * @function encodeDelimited
   * @memberof SSL_DetectionRobot
   * @static
   * @param {ISSL_DetectionRobot} message SSL_DetectionRobot message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_DetectionRobot.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a SSL_DetectionRobot message from the specified reader or buffer.
   * @function decode
   * @memberof SSL_DetectionRobot
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {SSL_DetectionRobot} SSL_DetectionRobot
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_DetectionRobot.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader))
      reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SSL_DetectionRobot();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confidence = reader.float();
          break;
        case 2:
          message.robotId = reader.uint32();
          break;
        case 3:
          message.x = reader.float();
          break;
        case 4:
          message.y = reader.float();
          break;
        case 5:
          message.orientation = reader.float();
          break;
        case 6:
          message.pixelX = reader.float();
          break;
        case 7:
          message.pixelY = reader.float();
          break;
        case 8:
          message.height = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("confidence"))
      throw $util.ProtocolError("missing required 'confidence'", {instance: message});
    if (!message.hasOwnProperty("x"))
      throw $util.ProtocolError("missing required 'x'", {instance: message});
    if (!message.hasOwnProperty("y"))
      throw $util.ProtocolError("missing required 'y'", {instance: message});
    if (!message.hasOwnProperty("pixelX"))
      throw $util.ProtocolError("missing required 'pixelX'", {instance: message});
    if (!message.hasOwnProperty("pixelY"))
      throw $util.ProtocolError("missing required 'pixelY'", {instance: message});
    return message;
  };

  /**
   * Decodes a SSL_DetectionRobot message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof SSL_DetectionRobot
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {SSL_DetectionRobot} SSL_DetectionRobot
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_DetectionRobot.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader))
      reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a SSL_DetectionRobot message.
   * @function verify
   * @memberof SSL_DetectionRobot
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  SSL_DetectionRobot.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
    if (typeof message.confidence !== "number")
      return "confidence: number expected";
    if (message.robotId != null && message.hasOwnProperty("robotId"))
      if (!$util.isInteger(message.robotId))
        return "robotId: integer expected";
    if (typeof message.x !== "number")
      return "x: number expected";
    if (typeof message.y !== "number")
      return "y: number expected";
    if (message.orientation != null && message.hasOwnProperty("orientation"))
      if (typeof message.orientation !== "number")
        return "orientation: number expected";
    if (typeof message.pixelX !== "number")
      return "pixelX: number expected";
    if (typeof message.pixelY !== "number")
      return "pixelY: number expected";
    if (message.height != null && message.hasOwnProperty("height"))
      if (typeof message.height !== "number")
        return "height: number expected";
    return null;
  };

  /**
   * Creates a SSL_DetectionRobot message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof SSL_DetectionRobot
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {SSL_DetectionRobot} SSL_DetectionRobot
   */
  SSL_DetectionRobot.fromObject = function fromObject(object) {
    if (object instanceof $root.SSL_DetectionRobot)
      return object;
    var message = new $root.SSL_DetectionRobot();
    if (object.confidence != null)
      message.confidence = Number(object.confidence);
    if (object.robotId != null)
      message.robotId = object.robotId >>> 0;
    if (object.x != null)
      message.x = Number(object.x);
    if (object.y != null)
      message.y = Number(object.y);
    if (object.orientation != null)
      message.orientation = Number(object.orientation);
    if (object.pixelX != null)
      message.pixelX = Number(object.pixelX);
    if (object.pixelY != null)
      message.pixelY = Number(object.pixelY);
    if (object.height != null)
      message.height = Number(object.height);
    return message;
  };

  /**
   * Creates a plain object from a SSL_DetectionRobot message. Also converts values to other types if specified.
   * @function toObject
   * @memberof SSL_DetectionRobot
   * @static
   * @param {SSL_DetectionRobot} message SSL_DetectionRobot
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  SSL_DetectionRobot.toObject = function toObject(message, options) {
    if (!options)
      options = {};
    var object = {};
    if (options.defaults) {
      object.confidence = 0;
      object.robotId = 0;
      object.x = 0;
      object.y = 0;
      object.orientation = 0;
      object.pixelX = 0;
      object.pixelY = 0;
      object.height = 0;
    }
    if (message.confidence != null && message.hasOwnProperty("confidence"))
      object.confidence = options.json && !isFinite(message.confidence) ? String(message.confidence) : message.confidence;
    if (message.robotId != null && message.hasOwnProperty("robotId"))
      object.robotId = message.robotId;
    if (message.x != null && message.hasOwnProperty("x"))
      object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
    if (message.y != null && message.hasOwnProperty("y"))
      object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
    if (message.orientation != null && message.hasOwnProperty("orientation"))
      object.orientation = options.json && !isFinite(message.orientation) ? String(message.orientation) : message.orientation;
    if (message.pixelX != null && message.hasOwnProperty("pixelX"))
      object.pixelX = options.json && !isFinite(message.pixelX) ? String(message.pixelX) : message.pixelX;
    if (message.pixelY != null && message.hasOwnProperty("pixelY"))
      object.pixelY = options.json && !isFinite(message.pixelY) ? String(message.pixelY) : message.pixelY;
    if (message.height != null && message.hasOwnProperty("height"))
      object.height = options.json && !isFinite(message.height) ? String(message.height) : message.height;
    return object;
  };

  /**
   * Converts this SSL_DetectionRobot to JSON.
   * @function toJSON
   * @memberof SSL_DetectionRobot
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  SSL_DetectionRobot.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return SSL_DetectionRobot;
})();

$root.SSL_DetectionFrame = (function () {

  /**
   * Properties of a SSL_DetectionFrame.
   * @exports ISSL_DetectionFrame
   * @interface ISSL_DetectionFrame
   * @property {number} frameNumber SSL_DetectionFrame frameNumber
   * @property {number} tCapture SSL_DetectionFrame tCapture
   * @property {number} tSent SSL_DetectionFrame tSent
   * @property {number} cameraId SSL_DetectionFrame cameraId
   * @property {Array.<ISSL_DetectionBall>|null} [balls] SSL_DetectionFrame balls
   * @property {Array.<ISSL_DetectionRobot>|null} [robotsYellow] SSL_DetectionFrame robotsYellow
   * @property {Array.<ISSL_DetectionRobot>|null} [robotsBlue] SSL_DetectionFrame robotsBlue
   */

  /**
   * Constructs a new SSL_DetectionFrame.
   * @exports SSL_DetectionFrame
   * @classdesc Represents a SSL_DetectionFrame.
   * @implements ISSL_DetectionFrame
   * @constructor
   * @param {ISSL_DetectionFrame=} [properties] Properties to set
   */
  function SSL_DetectionFrame(properties) {
    this.balls = [];
    this.robotsYellow = [];
    this.robotsBlue = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null)
          this[keys[i]] = properties[keys[i]];
  }

  /**
   * SSL_DetectionFrame frameNumber.
   * @member {number} frameNumber
   * @memberof SSL_DetectionFrame
   * @instance
   */
  SSL_DetectionFrame.prototype.frameNumber = 0;

  /**
   * SSL_DetectionFrame tCapture.
   * @member {number} tCapture
   * @memberof SSL_DetectionFrame
   * @instance
   */
  SSL_DetectionFrame.prototype.tCapture = 0;

  /**
   * SSL_DetectionFrame tSent.
   * @member {number} tSent
   * @memberof SSL_DetectionFrame
   * @instance
   */
  SSL_DetectionFrame.prototype.tSent = 0;

  /**
   * SSL_DetectionFrame cameraId.
   * @member {number} cameraId
   * @memberof SSL_DetectionFrame
   * @instance
   */
  SSL_DetectionFrame.prototype.cameraId = 0;

  /**
   * SSL_DetectionFrame balls.
   * @member {Array.<ISSL_DetectionBall>} balls
   * @memberof SSL_DetectionFrame
   * @instance
   */
  SSL_DetectionFrame.prototype.balls = $util.emptyArray;

  /**
   * SSL_DetectionFrame robotsYellow.
   * @member {Array.<ISSL_DetectionRobot>} robotsYellow
   * @memberof SSL_DetectionFrame
   * @instance
   */
  SSL_DetectionFrame.prototype.robotsYellow = $util.emptyArray;

  /**
   * SSL_DetectionFrame robotsBlue.
   * @member {Array.<ISSL_DetectionRobot>} robotsBlue
   * @memberof SSL_DetectionFrame
   * @instance
   */
  SSL_DetectionFrame.prototype.robotsBlue = $util.emptyArray;

  /**
   * Creates a new SSL_DetectionFrame instance using the specified properties.
   * @function create
   * @memberof SSL_DetectionFrame
   * @static
   * @param {ISSL_DetectionFrame=} [properties] Properties to set
   * @returns {SSL_DetectionFrame} SSL_DetectionFrame instance
   */
  SSL_DetectionFrame.create = function create(properties) {
    return new SSL_DetectionFrame(properties);
  };

  /**
   * Encodes the specified SSL_DetectionFrame message. Does not implicitly {@link SSL_DetectionFrame.verify|verify} messages.
   * @function encode
   * @memberof SSL_DetectionFrame
   * @static
   * @param {ISSL_DetectionFrame} message SSL_DetectionFrame message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_DetectionFrame.encode = function encode(message, writer) {
    if (!writer)
      writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.frameNumber);
    writer.uint32(/* id 2, wireType 1 =*/17).double(message.tCapture);
    writer.uint32(/* id 3, wireType 1 =*/25).double(message.tSent);
    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.cameraId);
    if (message.balls != null && message.balls.length)
      for (var i = 0; i < message.balls.length; ++i)
        $root.SSL_DetectionBall.encode(message.balls[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
    if (message.robotsYellow != null && message.robotsYellow.length)
      for (var i = 0; i < message.robotsYellow.length; ++i)
        $root.SSL_DetectionRobot.encode(message.robotsYellow[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
    if (message.robotsBlue != null && message.robotsBlue.length)
      for (var i = 0; i < message.robotsBlue.length; ++i)
        $root.SSL_DetectionRobot.encode(message.robotsBlue[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
    return writer;
  };

  /**
   * Encodes the specified SSL_DetectionFrame message, length delimited. Does not implicitly {@link SSL_DetectionFrame.verify|verify} messages.
   * @function encodeDelimited
   * @memberof SSL_DetectionFrame
   * @static
   * @param {ISSL_DetectionFrame} message SSL_DetectionFrame message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_DetectionFrame.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a SSL_DetectionFrame message from the specified reader or buffer.
   * @function decode
   * @memberof SSL_DetectionFrame
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {SSL_DetectionFrame} SSL_DetectionFrame
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_DetectionFrame.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader))
      reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SSL_DetectionFrame();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.frameNumber = reader.uint32();
          break;
        case 2:
          message.tCapture = reader.double();
          break;
        case 3:
          message.tSent = reader.double();
          break;
        case 4:
          message.cameraId = reader.uint32();
          break;
        case 5:
          if (!(message.balls && message.balls.length))
            message.balls = [];
          message.balls.push($root.SSL_DetectionBall.decode(reader, reader.uint32()));
          break;
        case 6:
          if (!(message.robotsYellow && message.robotsYellow.length))
            message.robotsYellow = [];
          message.robotsYellow.push($root.SSL_DetectionRobot.decode(reader, reader.uint32()));
          break;
        case 7:
          if (!(message.robotsBlue && message.robotsBlue.length))
            message.robotsBlue = [];
          message.robotsBlue.push($root.SSL_DetectionRobot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("frameNumber"))
      throw $util.ProtocolError("missing required 'frameNumber'", {instance: message});
    if (!message.hasOwnProperty("tCapture"))
      throw $util.ProtocolError("missing required 'tCapture'", {instance: message});
    if (!message.hasOwnProperty("tSent"))
      throw $util.ProtocolError("missing required 'tSent'", {instance: message});
    if (!message.hasOwnProperty("cameraId"))
      throw $util.ProtocolError("missing required 'cameraId'", {instance: message});
    return message;
  };

  /**
   * Decodes a SSL_DetectionFrame message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof SSL_DetectionFrame
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {SSL_DetectionFrame} SSL_DetectionFrame
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_DetectionFrame.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader))
      reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a SSL_DetectionFrame message.
   * @function verify
   * @memberof SSL_DetectionFrame
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  SSL_DetectionFrame.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
    if (!$util.isInteger(message.frameNumber))
      return "frameNumber: integer expected";
    if (typeof message.tCapture !== "number")
      return "tCapture: number expected";
    if (typeof message.tSent !== "number")
      return "tSent: number expected";
    if (!$util.isInteger(message.cameraId))
      return "cameraId: integer expected";
    if (message.balls != null && message.hasOwnProperty("balls")) {
      if (!Array.isArray(message.balls))
        return "balls: array expected";
      for (var i = 0; i < message.balls.length; ++i) {
        var error = $root.SSL_DetectionBall.verify(message.balls[i]);
        if (error)
          return "balls." + error;
      }
    }
    if (message.robotsYellow != null && message.hasOwnProperty("robotsYellow")) {
      if (!Array.isArray(message.robotsYellow))
        return "robotsYellow: array expected";
      for (var i = 0; i < message.robotsYellow.length; ++i) {
        var error = $root.SSL_DetectionRobot.verify(message.robotsYellow[i]);
        if (error)
          return "robotsYellow." + error;
      }
    }
    if (message.robotsBlue != null && message.hasOwnProperty("robotsBlue")) {
      if (!Array.isArray(message.robotsBlue))
        return "robotsBlue: array expected";
      for (var i = 0; i < message.robotsBlue.length; ++i) {
        var error = $root.SSL_DetectionRobot.verify(message.robotsBlue[i]);
        if (error)
          return "robotsBlue." + error;
      }
    }
    return null;
  };

  /**
   * Creates a SSL_DetectionFrame message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof SSL_DetectionFrame
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {SSL_DetectionFrame} SSL_DetectionFrame
   */
  SSL_DetectionFrame.fromObject = function fromObject(object) {
    if (object instanceof $root.SSL_DetectionFrame)
      return object;
    var message = new $root.SSL_DetectionFrame();
    if (object.frameNumber != null)
      message.frameNumber = object.frameNumber >>> 0;
    if (object.tCapture != null)
      message.tCapture = Number(object.tCapture);
    if (object.tSent != null)
      message.tSent = Number(object.tSent);
    if (object.cameraId != null)
      message.cameraId = object.cameraId >>> 0;
    if (object.balls) {
      if (!Array.isArray(object.balls))
        throw TypeError(".SSL_DetectionFrame.balls: array expected");
      message.balls = [];
      for (var i = 0; i < object.balls.length; ++i) {
        if (typeof object.balls[i] !== "object")
          throw TypeError(".SSL_DetectionFrame.balls: object expected");
        message.balls[i] = $root.SSL_DetectionBall.fromObject(object.balls[i]);
      }
    }
    if (object.robotsYellow) {
      if (!Array.isArray(object.robotsYellow))
        throw TypeError(".SSL_DetectionFrame.robotsYellow: array expected");
      message.robotsYellow = [];
      for (var i = 0; i < object.robotsYellow.length; ++i) {
        if (typeof object.robotsYellow[i] !== "object")
          throw TypeError(".SSL_DetectionFrame.robotsYellow: object expected");
        message.robotsYellow[i] = $root.SSL_DetectionRobot.fromObject(object.robotsYellow[i]);
      }
    }
    if (object.robotsBlue) {
      if (!Array.isArray(object.robotsBlue))
        throw TypeError(".SSL_DetectionFrame.robotsBlue: array expected");
      message.robotsBlue = [];
      for (var i = 0; i < object.robotsBlue.length; ++i) {
        if (typeof object.robotsBlue[i] !== "object")
          throw TypeError(".SSL_DetectionFrame.robotsBlue: object expected");
        message.robotsBlue[i] = $root.SSL_DetectionRobot.fromObject(object.robotsBlue[i]);
      }
    }
    return message;
  };

  /**
   * Creates a plain object from a SSL_DetectionFrame message. Also converts values to other types if specified.
   * @function toObject
   * @memberof SSL_DetectionFrame
   * @static
   * @param {SSL_DetectionFrame} message SSL_DetectionFrame
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  SSL_DetectionFrame.toObject = function toObject(message, options) {
    if (!options)
      options = {};
    var object = {};
    if (options.arrays || options.defaults) {
      object.balls = [];
      object.robotsYellow = [];
      object.robotsBlue = [];
    }
    if (options.defaults) {
      object.frameNumber = 0;
      object.tCapture = 0;
      object.tSent = 0;
      object.cameraId = 0;
    }
    if (message.frameNumber != null && message.hasOwnProperty("frameNumber"))
      object.frameNumber = message.frameNumber;
    if (message.tCapture != null && message.hasOwnProperty("tCapture"))
      object.tCapture = options.json && !isFinite(message.tCapture) ? String(message.tCapture) : message.tCapture;
    if (message.tSent != null && message.hasOwnProperty("tSent"))
      object.tSent = options.json && !isFinite(message.tSent) ? String(message.tSent) : message.tSent;
    if (message.cameraId != null && message.hasOwnProperty("cameraId"))
      object.cameraId = message.cameraId;
    if (message.balls && message.balls.length) {
      object.balls = [];
      for (var j = 0; j < message.balls.length; ++j)
        object.balls[j] = $root.SSL_DetectionBall.toObject(message.balls[j], options);
    }
    if (message.robotsYellow && message.robotsYellow.length) {
      object.robotsYellow = [];
      for (var j = 0; j < message.robotsYellow.length; ++j)
        object.robotsYellow[j] = $root.SSL_DetectionRobot.toObject(message.robotsYellow[j], options);
    }
    if (message.robotsBlue && message.robotsBlue.length) {
      object.robotsBlue = [];
      for (var j = 0; j < message.robotsBlue.length; ++j)
        object.robotsBlue[j] = $root.SSL_DetectionRobot.toObject(message.robotsBlue[j], options);
    }
    return object;
  };

  /**
   * Converts this SSL_DetectionFrame to JSON.
   * @function toJSON
   * @memberof SSL_DetectionFrame
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  SSL_DetectionFrame.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return SSL_DetectionFrame;
})();

$root.Vector2f = (function () {

  /**
   * Properties of a Vector2f.
   * @exports IVector2f
   * @interface IVector2f
   * @property {number} x Vector2f x
   * @property {number} y Vector2f y
   */

  /**
   * Constructs a new Vector2f.
   * @exports Vector2f
   * @classdesc Represents a Vector2f.
   * @implements IVector2f
   * @constructor
   * @param {IVector2f=} [properties] Properties to set
   */
  function Vector2f(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null)
          this[keys[i]] = properties[keys[i]];
  }

  /**
   * Vector2f x.
   * @member {number} x
   * @memberof Vector2f
   * @instance
   */
  Vector2f.prototype.x = 0;

  /**
   * Vector2f y.
   * @member {number} y
   * @memberof Vector2f
   * @instance
   */
  Vector2f.prototype.y = 0;

  /**
   * Creates a new Vector2f instance using the specified properties.
   * @function create
   * @memberof Vector2f
   * @static
   * @param {IVector2f=} [properties] Properties to set
   * @returns {Vector2f} Vector2f instance
   */
  Vector2f.create = function create(properties) {
    return new Vector2f(properties);
  };

  /**
   * Encodes the specified Vector2f message. Does not implicitly {@link Vector2f.verify|verify} messages.
   * @function encode
   * @memberof Vector2f
   * @static
   * @param {IVector2f} message Vector2f message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Vector2f.encode = function encode(message, writer) {
    if (!writer)
      writer = $Writer.create();
    writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
    writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
    return writer;
  };

  /**
   * Encodes the specified Vector2f message, length delimited. Does not implicitly {@link Vector2f.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Vector2f
   * @static
   * @param {IVector2f} message Vector2f message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Vector2f.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a Vector2f message from the specified reader or buffer.
   * @function decode
   * @memberof Vector2f
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Vector2f} Vector2f
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Vector2f.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader))
      reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Vector2f();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.float();
          break;
        case 2:
          message.y = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("x"))
      throw $util.ProtocolError("missing required 'x'", {instance: message});
    if (!message.hasOwnProperty("y"))
      throw $util.ProtocolError("missing required 'y'", {instance: message});
    return message;
  };

  /**
   * Decodes a Vector2f message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Vector2f
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Vector2f} Vector2f
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Vector2f.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader))
      reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a Vector2f message.
   * @function verify
   * @memberof Vector2f
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Vector2f.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
    if (typeof message.x !== "number")
      return "x: number expected";
    if (typeof message.y !== "number")
      return "y: number expected";
    return null;
  };

  /**
   * Creates a Vector2f message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Vector2f
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Vector2f} Vector2f
   */
  Vector2f.fromObject = function fromObject(object) {
    if (object instanceof $root.Vector2f)
      return object;
    var message = new $root.Vector2f();
    if (object.x != null)
      message.x = Number(object.x);
    if (object.y != null)
      message.y = Number(object.y);
    return message;
  };

  /**
   * Creates a plain object from a Vector2f message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Vector2f
   * @static
   * @param {Vector2f} message Vector2f
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Vector2f.toObject = function toObject(message, options) {
    if (!options)
      options = {};
    var object = {};
    if (options.defaults) {
      object.x = 0;
      object.y = 0;
    }
    if (message.x != null && message.hasOwnProperty("x"))
      object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
    if (message.y != null && message.hasOwnProperty("y"))
      object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
    return object;
  };

  /**
   * Converts this Vector2f to JSON.
   * @function toJSON
   * @memberof Vector2f
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Vector2f.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return Vector2f;
})();

$root.SSL_FieldLineSegment = (function () {

  /**
   * Properties of a SSL_FieldLineSegment.
   * @exports ISSL_FieldLineSegment
   * @interface ISSL_FieldLineSegment
   * @property {string} name SSL_FieldLineSegment name
   * @property {IVector2f} p1 SSL_FieldLineSegment p1
   * @property {IVector2f} p2 SSL_FieldLineSegment p2
   * @property {number} thickness SSL_FieldLineSegment thickness
   */

  /**
   * Constructs a new SSL_FieldLineSegment.
   * @exports SSL_FieldLineSegment
   * @classdesc Represents a SSL_FieldLineSegment.
   * @implements ISSL_FieldLineSegment
   * @constructor
   * @param {ISSL_FieldLineSegment=} [properties] Properties to set
   */
  function SSL_FieldLineSegment(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null)
          this[keys[i]] = properties[keys[i]];
  }

  /**
   * SSL_FieldLineSegment name.
   * @member {string} name
   * @memberof SSL_FieldLineSegment
   * @instance
   */
  SSL_FieldLineSegment.prototype.name = "";

  /**
   * SSL_FieldLineSegment p1.
   * @member {IVector2f} p1
   * @memberof SSL_FieldLineSegment
   * @instance
   */
  SSL_FieldLineSegment.prototype.p1 = null;

  /**
   * SSL_FieldLineSegment p2.
   * @member {IVector2f} p2
   * @memberof SSL_FieldLineSegment
   * @instance
   */
  SSL_FieldLineSegment.prototype.p2 = null;

  /**
   * SSL_FieldLineSegment thickness.
   * @member {number} thickness
   * @memberof SSL_FieldLineSegment
   * @instance
   */
  SSL_FieldLineSegment.prototype.thickness = 0;

  /**
   * Creates a new SSL_FieldLineSegment instance using the specified properties.
   * @function create
   * @memberof SSL_FieldLineSegment
   * @static
   * @param {ISSL_FieldLineSegment=} [properties] Properties to set
   * @returns {SSL_FieldLineSegment} SSL_FieldLineSegment instance
   */
  SSL_FieldLineSegment.create = function create(properties) {
    return new SSL_FieldLineSegment(properties);
  };

  /**
   * Encodes the specified SSL_FieldLineSegment message. Does not implicitly {@link SSL_FieldLineSegment.verify|verify} messages.
   * @function encode
   * @memberof SSL_FieldLineSegment
   * @static
   * @param {ISSL_FieldLineSegment} message SSL_FieldLineSegment message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_FieldLineSegment.encode = function encode(message, writer) {
    if (!writer)
      writer = $Writer.create();
    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
    $root.Vector2f.encode(message.p1, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
    $root.Vector2f.encode(message.p2, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
    writer.uint32(/* id 4, wireType 5 =*/37).float(message.thickness);
    return writer;
  };

  /**
   * Encodes the specified SSL_FieldLineSegment message, length delimited. Does not implicitly {@link SSL_FieldLineSegment.verify|verify} messages.
   * @function encodeDelimited
   * @memberof SSL_FieldLineSegment
   * @static
   * @param {ISSL_FieldLineSegment} message SSL_FieldLineSegment message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_FieldLineSegment.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a SSL_FieldLineSegment message from the specified reader or buffer.
   * @function decode
   * @memberof SSL_FieldLineSegment
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {SSL_FieldLineSegment} SSL_FieldLineSegment
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_FieldLineSegment.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader))
      reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SSL_FieldLineSegment();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.p1 = $root.Vector2f.decode(reader, reader.uint32());
          break;
        case 3:
          message.p2 = $root.Vector2f.decode(reader, reader.uint32());
          break;
        case 4:
          message.thickness = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("name"))
      throw $util.ProtocolError("missing required 'name'", {instance: message});
    if (!message.hasOwnProperty("p1"))
      throw $util.ProtocolError("missing required 'p1'", {instance: message});
    if (!message.hasOwnProperty("p2"))
      throw $util.ProtocolError("missing required 'p2'", {instance: message});
    if (!message.hasOwnProperty("thickness"))
      throw $util.ProtocolError("missing required 'thickness'", {instance: message});
    return message;
  };

  /**
   * Decodes a SSL_FieldLineSegment message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof SSL_FieldLineSegment
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {SSL_FieldLineSegment} SSL_FieldLineSegment
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_FieldLineSegment.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader))
      reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a SSL_FieldLineSegment message.
   * @function verify
   * @memberof SSL_FieldLineSegment
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  SSL_FieldLineSegment.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
    if (!$util.isString(message.name))
      return "name: string expected";
    {
      var error = $root.Vector2f.verify(message.p1);
      if (error)
        return "p1." + error;
    }
    {
      var error = $root.Vector2f.verify(message.p2);
      if (error)
        return "p2." + error;
    }
    if (typeof message.thickness !== "number")
      return "thickness: number expected";
    return null;
  };

  /**
   * Creates a SSL_FieldLineSegment message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof SSL_FieldLineSegment
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {SSL_FieldLineSegment} SSL_FieldLineSegment
   */
  SSL_FieldLineSegment.fromObject = function fromObject(object) {
    if (object instanceof $root.SSL_FieldLineSegment)
      return object;
    var message = new $root.SSL_FieldLineSegment();
    if (object.name != null)
      message.name = String(object.name);
    if (object.p1 != null) {
      if (typeof object.p1 !== "object")
        throw TypeError(".SSL_FieldLineSegment.p1: object expected");
      message.p1 = $root.Vector2f.fromObject(object.p1);
    }
    if (object.p2 != null) {
      if (typeof object.p2 !== "object")
        throw TypeError(".SSL_FieldLineSegment.p2: object expected");
      message.p2 = $root.Vector2f.fromObject(object.p2);
    }
    if (object.thickness != null)
      message.thickness = Number(object.thickness);
    return message;
  };

  /**
   * Creates a plain object from a SSL_FieldLineSegment message. Also converts values to other types if specified.
   * @function toObject
   * @memberof SSL_FieldLineSegment
   * @static
   * @param {SSL_FieldLineSegment} message SSL_FieldLineSegment
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  SSL_FieldLineSegment.toObject = function toObject(message, options) {
    if (!options)
      options = {};
    var object = {};
    if (options.defaults) {
      object.name = "";
      object.p1 = null;
      object.p2 = null;
      object.thickness = 0;
    }
    if (message.name != null && message.hasOwnProperty("name"))
      object.name = message.name;
    if (message.p1 != null && message.hasOwnProperty("p1"))
      object.p1 = $root.Vector2f.toObject(message.p1, options);
    if (message.p2 != null && message.hasOwnProperty("p2"))
      object.p2 = $root.Vector2f.toObject(message.p2, options);
    if (message.thickness != null && message.hasOwnProperty("thickness"))
      object.thickness = options.json && !isFinite(message.thickness) ? String(message.thickness) : message.thickness;
    return object;
  };

  /**
   * Converts this SSL_FieldLineSegment to JSON.
   * @function toJSON
   * @memberof SSL_FieldLineSegment
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  SSL_FieldLineSegment.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return SSL_FieldLineSegment;
})();

$root.SSL_FieldCicularArc = (function () {

  /**
   * Properties of a SSL_FieldCicularArc.
   * @exports ISSL_FieldCicularArc
   * @interface ISSL_FieldCicularArc
   * @property {string} name SSL_FieldCicularArc name
   * @property {IVector2f} center SSL_FieldCicularArc center
   * @property {number} radius SSL_FieldCicularArc radius
   * @property {number} a1 SSL_FieldCicularArc a1
   * @property {number} a2 SSL_FieldCicularArc a2
   * @property {number} thickness SSL_FieldCicularArc thickness
   */

  /**
   * Constructs a new SSL_FieldCicularArc.
   * @exports SSL_FieldCicularArc
   * @classdesc Represents a SSL_FieldCicularArc.
   * @implements ISSL_FieldCicularArc
   * @constructor
   * @param {ISSL_FieldCicularArc=} [properties] Properties to set
   */
  function SSL_FieldCicularArc(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null)
          this[keys[i]] = properties[keys[i]];
  }

  /**
   * SSL_FieldCicularArc name.
   * @member {string} name
   * @memberof SSL_FieldCicularArc
   * @instance
   */
  SSL_FieldCicularArc.prototype.name = "";

  /**
   * SSL_FieldCicularArc center.
   * @member {IVector2f} center
   * @memberof SSL_FieldCicularArc
   * @instance
   */
  SSL_FieldCicularArc.prototype.center = null;

  /**
   * SSL_FieldCicularArc radius.
   * @member {number} radius
   * @memberof SSL_FieldCicularArc
   * @instance
   */
  SSL_FieldCicularArc.prototype.radius = 0;

  /**
   * SSL_FieldCicularArc a1.
   * @member {number} a1
   * @memberof SSL_FieldCicularArc
   * @instance
   */
  SSL_FieldCicularArc.prototype.a1 = 0;

  /**
   * SSL_FieldCicularArc a2.
   * @member {number} a2
   * @memberof SSL_FieldCicularArc
   * @instance
   */
  SSL_FieldCicularArc.prototype.a2 = 0;

  /**
   * SSL_FieldCicularArc thickness.
   * @member {number} thickness
   * @memberof SSL_FieldCicularArc
   * @instance
   */
  SSL_FieldCicularArc.prototype.thickness = 0;

  /**
   * Creates a new SSL_FieldCicularArc instance using the specified properties.
   * @function create
   * @memberof SSL_FieldCicularArc
   * @static
   * @param {ISSL_FieldCicularArc=} [properties] Properties to set
   * @returns {SSL_FieldCicularArc} SSL_FieldCicularArc instance
   */
  SSL_FieldCicularArc.create = function create(properties) {
    return new SSL_FieldCicularArc(properties);
  };

  /**
   * Encodes the specified SSL_FieldCicularArc message. Does not implicitly {@link SSL_FieldCicularArc.verify|verify} messages.
   * @function encode
   * @memberof SSL_FieldCicularArc
   * @static
   * @param {ISSL_FieldCicularArc} message SSL_FieldCicularArc message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_FieldCicularArc.encode = function encode(message, writer) {
    if (!writer)
      writer = $Writer.create();
    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
    $root.Vector2f.encode(message.center, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
    writer.uint32(/* id 3, wireType 5 =*/29).float(message.radius);
    writer.uint32(/* id 4, wireType 5 =*/37).float(message.a1);
    writer.uint32(/* id 5, wireType 5 =*/45).float(message.a2);
    writer.uint32(/* id 6, wireType 5 =*/53).float(message.thickness);
    return writer;
  };

  /**
   * Encodes the specified SSL_FieldCicularArc message, length delimited. Does not implicitly {@link SSL_FieldCicularArc.verify|verify} messages.
   * @function encodeDelimited
   * @memberof SSL_FieldCicularArc
   * @static
   * @param {ISSL_FieldCicularArc} message SSL_FieldCicularArc message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_FieldCicularArc.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a SSL_FieldCicularArc message from the specified reader or buffer.
   * @function decode
   * @memberof SSL_FieldCicularArc
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {SSL_FieldCicularArc} SSL_FieldCicularArc
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_FieldCicularArc.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader))
      reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SSL_FieldCicularArc();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.center = $root.Vector2f.decode(reader, reader.uint32());
          break;
        case 3:
          message.radius = reader.float();
          break;
        case 4:
          message.a1 = reader.float();
          break;
        case 5:
          message.a2 = reader.float();
          break;
        case 6:
          message.thickness = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("name"))
      throw $util.ProtocolError("missing required 'name'", {instance: message});
    if (!message.hasOwnProperty("center"))
      throw $util.ProtocolError("missing required 'center'", {instance: message});
    if (!message.hasOwnProperty("radius"))
      throw $util.ProtocolError("missing required 'radius'", {instance: message});
    if (!message.hasOwnProperty("a1"))
      throw $util.ProtocolError("missing required 'a1'", {instance: message});
    if (!message.hasOwnProperty("a2"))
      throw $util.ProtocolError("missing required 'a2'", {instance: message});
    if (!message.hasOwnProperty("thickness"))
      throw $util.ProtocolError("missing required 'thickness'", {instance: message});
    return message;
  };

  /**
   * Decodes a SSL_FieldCicularArc message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof SSL_FieldCicularArc
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {SSL_FieldCicularArc} SSL_FieldCicularArc
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_FieldCicularArc.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader))
      reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a SSL_FieldCicularArc message.
   * @function verify
   * @memberof SSL_FieldCicularArc
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  SSL_FieldCicularArc.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
    if (!$util.isString(message.name))
      return "name: string expected";
    {
      var error = $root.Vector2f.verify(message.center);
      if (error)
        return "center." + error;
    }
    if (typeof message.radius !== "number")
      return "radius: number expected";
    if (typeof message.a1 !== "number")
      return "a1: number expected";
    if (typeof message.a2 !== "number")
      return "a2: number expected";
    if (typeof message.thickness !== "number")
      return "thickness: number expected";
    return null;
  };

  /**
   * Creates a SSL_FieldCicularArc message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof SSL_FieldCicularArc
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {SSL_FieldCicularArc} SSL_FieldCicularArc
   */
  SSL_FieldCicularArc.fromObject = function fromObject(object) {
    if (object instanceof $root.SSL_FieldCicularArc)
      return object;
    var message = new $root.SSL_FieldCicularArc();
    if (object.name != null)
      message.name = String(object.name);
    if (object.center != null) {
      if (typeof object.center !== "object")
        throw TypeError(".SSL_FieldCicularArc.center: object expected");
      message.center = $root.Vector2f.fromObject(object.center);
    }
    if (object.radius != null)
      message.radius = Number(object.radius);
    if (object.a1 != null)
      message.a1 = Number(object.a1);
    if (object.a2 != null)
      message.a2 = Number(object.a2);
    if (object.thickness != null)
      message.thickness = Number(object.thickness);
    return message;
  };

  /**
   * Creates a plain object from a SSL_FieldCicularArc message. Also converts values to other types if specified.
   * @function toObject
   * @memberof SSL_FieldCicularArc
   * @static
   * @param {SSL_FieldCicularArc} message SSL_FieldCicularArc
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  SSL_FieldCicularArc.toObject = function toObject(message, options) {
    if (!options)
      options = {};
    var object = {};
    if (options.defaults) {
      object.name = "";
      object.center = null;
      object.radius = 0;
      object.a1 = 0;
      object.a2 = 0;
      object.thickness = 0;
    }
    if (message.name != null && message.hasOwnProperty("name"))
      object.name = message.name;
    if (message.center != null && message.hasOwnProperty("center"))
      object.center = $root.Vector2f.toObject(message.center, options);
    if (message.radius != null && message.hasOwnProperty("radius"))
      object.radius = options.json && !isFinite(message.radius) ? String(message.radius) : message.radius;
    if (message.a1 != null && message.hasOwnProperty("a1"))
      object.a1 = options.json && !isFinite(message.a1) ? String(message.a1) : message.a1;
    if (message.a2 != null && message.hasOwnProperty("a2"))
      object.a2 = options.json && !isFinite(message.a2) ? String(message.a2) : message.a2;
    if (message.thickness != null && message.hasOwnProperty("thickness"))
      object.thickness = options.json && !isFinite(message.thickness) ? String(message.thickness) : message.thickness;
    return object;
  };

  /**
   * Converts this SSL_FieldCicularArc to JSON.
   * @function toJSON
   * @memberof SSL_FieldCicularArc
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  SSL_FieldCicularArc.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return SSL_FieldCicularArc;
})();

$root.SSL_GeometryFieldSize = (function () {

  /**
   * Properties of a SSL_GeometryFieldSize.
   * @exports ISSL_GeometryFieldSize
   * @interface ISSL_GeometryFieldSize
   * @property {number} fieldLength SSL_GeometryFieldSize fieldLength
   * @property {number} fieldWidth SSL_GeometryFieldSize fieldWidth
   * @property {number} goalWidth SSL_GeometryFieldSize goalWidth
   * @property {number} goalDepth SSL_GeometryFieldSize goalDepth
   * @property {number} boundaryWidth SSL_GeometryFieldSize boundaryWidth
   * @property {Array.<ISSL_FieldLineSegment>|null} [fieldLines] SSL_GeometryFieldSize fieldLines
   * @property {Array.<ISSL_FieldCicularArc>|null} [fieldArcs] SSL_GeometryFieldSize fieldArcs
   */

  /**
   * Constructs a new SSL_GeometryFieldSize.
   * @exports SSL_GeometryFieldSize
   * @classdesc Represents a SSL_GeometryFieldSize.
   * @implements ISSL_GeometryFieldSize
   * @constructor
   * @param {ISSL_GeometryFieldSize=} [properties] Properties to set
   */
  function SSL_GeometryFieldSize(properties) {
    this.fieldLines = [];
    this.fieldArcs = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null)
          this[keys[i]] = properties[keys[i]];
  }

  /**
   * SSL_GeometryFieldSize fieldLength.
   * @member {number} fieldLength
   * @memberof SSL_GeometryFieldSize
   * @instance
   */
  SSL_GeometryFieldSize.prototype.fieldLength = 0;

  /**
   * SSL_GeometryFieldSize fieldWidth.
   * @member {number} fieldWidth
   * @memberof SSL_GeometryFieldSize
   * @instance
   */
  SSL_GeometryFieldSize.prototype.fieldWidth = 0;

  /**
   * SSL_GeometryFieldSize goalWidth.
   * @member {number} goalWidth
   * @memberof SSL_GeometryFieldSize
   * @instance
   */
  SSL_GeometryFieldSize.prototype.goalWidth = 0;

  /**
   * SSL_GeometryFieldSize goalDepth.
   * @member {number} goalDepth
   * @memberof SSL_GeometryFieldSize
   * @instance
   */
  SSL_GeometryFieldSize.prototype.goalDepth = 0;

  /**
   * SSL_GeometryFieldSize boundaryWidth.
   * @member {number} boundaryWidth
   * @memberof SSL_GeometryFieldSize
   * @instance
   */
  SSL_GeometryFieldSize.prototype.boundaryWidth = 0;

  /**
   * SSL_GeometryFieldSize fieldLines.
   * @member {Array.<ISSL_FieldLineSegment>} fieldLines
   * @memberof SSL_GeometryFieldSize
   * @instance
   */
  SSL_GeometryFieldSize.prototype.fieldLines = $util.emptyArray;

  /**
   * SSL_GeometryFieldSize fieldArcs.
   * @member {Array.<ISSL_FieldCicularArc>} fieldArcs
   * @memberof SSL_GeometryFieldSize
   * @instance
   */
  SSL_GeometryFieldSize.prototype.fieldArcs = $util.emptyArray;

  /**
   * Creates a new SSL_GeometryFieldSize instance using the specified properties.
   * @function create
   * @memberof SSL_GeometryFieldSize
   * @static
   * @param {ISSL_GeometryFieldSize=} [properties] Properties to set
   * @returns {SSL_GeometryFieldSize} SSL_GeometryFieldSize instance
   */
  SSL_GeometryFieldSize.create = function create(properties) {
    return new SSL_GeometryFieldSize(properties);
  };

  /**
   * Encodes the specified SSL_GeometryFieldSize message. Does not implicitly {@link SSL_GeometryFieldSize.verify|verify} messages.
   * @function encode
   * @memberof SSL_GeometryFieldSize
   * @static
   * @param {ISSL_GeometryFieldSize} message SSL_GeometryFieldSize message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_GeometryFieldSize.encode = function encode(message, writer) {
    if (!writer)
      writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.fieldLength);
    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.fieldWidth);
    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.goalWidth);
    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.goalDepth);
    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.boundaryWidth);
    if (message.fieldLines != null && message.fieldLines.length)
      for (var i = 0; i < message.fieldLines.length; ++i)
        $root.SSL_FieldLineSegment.encode(message.fieldLines[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
    if (message.fieldArcs != null && message.fieldArcs.length)
      for (var i = 0; i < message.fieldArcs.length; ++i)
        $root.SSL_FieldCicularArc.encode(message.fieldArcs[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
    return writer;
  };

  /**
   * Encodes the specified SSL_GeometryFieldSize message, length delimited. Does not implicitly {@link SSL_GeometryFieldSize.verify|verify} messages.
   * @function encodeDelimited
   * @memberof SSL_GeometryFieldSize
   * @static
   * @param {ISSL_GeometryFieldSize} message SSL_GeometryFieldSize message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_GeometryFieldSize.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a SSL_GeometryFieldSize message from the specified reader or buffer.
   * @function decode
   * @memberof SSL_GeometryFieldSize
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {SSL_GeometryFieldSize} SSL_GeometryFieldSize
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_GeometryFieldSize.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader))
      reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SSL_GeometryFieldSize();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fieldLength = reader.int32();
          break;
        case 2:
          message.fieldWidth = reader.int32();
          break;
        case 3:
          message.goalWidth = reader.int32();
          break;
        case 4:
          message.goalDepth = reader.int32();
          break;
        case 5:
          message.boundaryWidth = reader.int32();
          break;
        case 6:
          if (!(message.fieldLines && message.fieldLines.length))
            message.fieldLines = [];
          message.fieldLines.push($root.SSL_FieldLineSegment.decode(reader, reader.uint32()));
          break;
        case 7:
          if (!(message.fieldArcs && message.fieldArcs.length))
            message.fieldArcs = [];
          message.fieldArcs.push($root.SSL_FieldCicularArc.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("fieldLength"))
      throw $util.ProtocolError("missing required 'fieldLength'", {instance: message});
    if (!message.hasOwnProperty("fieldWidth"))
      throw $util.ProtocolError("missing required 'fieldWidth'", {instance: message});
    if (!message.hasOwnProperty("goalWidth"))
      throw $util.ProtocolError("missing required 'goalWidth'", {instance: message});
    if (!message.hasOwnProperty("goalDepth"))
      throw $util.ProtocolError("missing required 'goalDepth'", {instance: message});
    if (!message.hasOwnProperty("boundaryWidth"))
      throw $util.ProtocolError("missing required 'boundaryWidth'", {instance: message});
    return message;
  };

  /**
   * Decodes a SSL_GeometryFieldSize message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof SSL_GeometryFieldSize
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {SSL_GeometryFieldSize} SSL_GeometryFieldSize
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_GeometryFieldSize.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader))
      reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a SSL_GeometryFieldSize message.
   * @function verify
   * @memberof SSL_GeometryFieldSize
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  SSL_GeometryFieldSize.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
    if (!$util.isInteger(message.fieldLength))
      return "fieldLength: integer expected";
    if (!$util.isInteger(message.fieldWidth))
      return "fieldWidth: integer expected";
    if (!$util.isInteger(message.goalWidth))
      return "goalWidth: integer expected";
    if (!$util.isInteger(message.goalDepth))
      return "goalDepth: integer expected";
    if (!$util.isInteger(message.boundaryWidth))
      return "boundaryWidth: integer expected";
    if (message.fieldLines != null && message.hasOwnProperty("fieldLines")) {
      if (!Array.isArray(message.fieldLines))
        return "fieldLines: array expected";
      for (var i = 0; i < message.fieldLines.length; ++i) {
        var error = $root.SSL_FieldLineSegment.verify(message.fieldLines[i]);
        if (error)
          return "fieldLines." + error;
      }
    }
    if (message.fieldArcs != null && message.hasOwnProperty("fieldArcs")) {
      if (!Array.isArray(message.fieldArcs))
        return "fieldArcs: array expected";
      for (var i = 0; i < message.fieldArcs.length; ++i) {
        var error = $root.SSL_FieldCicularArc.verify(message.fieldArcs[i]);
        if (error)
          return "fieldArcs." + error;
      }
    }
    return null;
  };

  /**
   * Creates a SSL_GeometryFieldSize message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof SSL_GeometryFieldSize
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {SSL_GeometryFieldSize} SSL_GeometryFieldSize
   */
  SSL_GeometryFieldSize.fromObject = function fromObject(object) {
    if (object instanceof $root.SSL_GeometryFieldSize)
      return object;
    var message = new $root.SSL_GeometryFieldSize();
    if (object.fieldLength != null)
      message.fieldLength = object.fieldLength | 0;
    if (object.fieldWidth != null)
      message.fieldWidth = object.fieldWidth | 0;
    if (object.goalWidth != null)
      message.goalWidth = object.goalWidth | 0;
    if (object.goalDepth != null)
      message.goalDepth = object.goalDepth | 0;
    if (object.boundaryWidth != null)
      message.boundaryWidth = object.boundaryWidth | 0;
    if (object.fieldLines) {
      if (!Array.isArray(object.fieldLines))
        throw TypeError(".SSL_GeometryFieldSize.fieldLines: array expected");
      message.fieldLines = [];
      for (var i = 0; i < object.fieldLines.length; ++i) {
        if (typeof object.fieldLines[i] !== "object")
          throw TypeError(".SSL_GeometryFieldSize.fieldLines: object expected");
        message.fieldLines[i] = $root.SSL_FieldLineSegment.fromObject(object.fieldLines[i]);
      }
    }
    if (object.fieldArcs) {
      if (!Array.isArray(object.fieldArcs))
        throw TypeError(".SSL_GeometryFieldSize.fieldArcs: array expected");
      message.fieldArcs = [];
      for (var i = 0; i < object.fieldArcs.length; ++i) {
        if (typeof object.fieldArcs[i] !== "object")
          throw TypeError(".SSL_GeometryFieldSize.fieldArcs: object expected");
        message.fieldArcs[i] = $root.SSL_FieldCicularArc.fromObject(object.fieldArcs[i]);
      }
    }
    return message;
  };

  /**
   * Creates a plain object from a SSL_GeometryFieldSize message. Also converts values to other types if specified.
   * @function toObject
   * @memberof SSL_GeometryFieldSize
   * @static
   * @param {SSL_GeometryFieldSize} message SSL_GeometryFieldSize
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  SSL_GeometryFieldSize.toObject = function toObject(message, options) {
    if (!options)
      options = {};
    var object = {};
    if (options.arrays || options.defaults) {
      object.fieldLines = [];
      object.fieldArcs = [];
    }
    if (options.defaults) {
      object.fieldLength = 0;
      object.fieldWidth = 0;
      object.goalWidth = 0;
      object.goalDepth = 0;
      object.boundaryWidth = 0;
    }
    if (message.fieldLength != null && message.hasOwnProperty("fieldLength"))
      object.fieldLength = message.fieldLength;
    if (message.fieldWidth != null && message.hasOwnProperty("fieldWidth"))
      object.fieldWidth = message.fieldWidth;
    if (message.goalWidth != null && message.hasOwnProperty("goalWidth"))
      object.goalWidth = message.goalWidth;
    if (message.goalDepth != null && message.hasOwnProperty("goalDepth"))
      object.goalDepth = message.goalDepth;
    if (message.boundaryWidth != null && message.hasOwnProperty("boundaryWidth"))
      object.boundaryWidth = message.boundaryWidth;
    if (message.fieldLines && message.fieldLines.length) {
      object.fieldLines = [];
      for (var j = 0; j < message.fieldLines.length; ++j)
        object.fieldLines[j] = $root.SSL_FieldLineSegment.toObject(message.fieldLines[j], options);
    }
    if (message.fieldArcs && message.fieldArcs.length) {
      object.fieldArcs = [];
      for (var j = 0; j < message.fieldArcs.length; ++j)
        object.fieldArcs[j] = $root.SSL_FieldCicularArc.toObject(message.fieldArcs[j], options);
    }
    return object;
  };

  /**
   * Converts this SSL_GeometryFieldSize to JSON.
   * @function toJSON
   * @memberof SSL_GeometryFieldSize
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  SSL_GeometryFieldSize.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return SSL_GeometryFieldSize;
})();

$root.SSL_GeometryCameraCalibration = (function () {

  /**
   * Properties of a SSL_GeometryCameraCalibration.
   * @exports ISSL_GeometryCameraCalibration
   * @interface ISSL_GeometryCameraCalibration
   * @property {number} cameraId SSL_GeometryCameraCalibration cameraId
   * @property {number} focalLength SSL_GeometryCameraCalibration focalLength
   * @property {number} principalPointX SSL_GeometryCameraCalibration principalPointX
   * @property {number} principalPointY SSL_GeometryCameraCalibration principalPointY
   * @property {number} distortion SSL_GeometryCameraCalibration distortion
   * @property {number} q0 SSL_GeometryCameraCalibration q0
   * @property {number} q1 SSL_GeometryCameraCalibration q1
   * @property {number} q2 SSL_GeometryCameraCalibration q2
   * @property {number} q3 SSL_GeometryCameraCalibration q3
   * @property {number} tx SSL_GeometryCameraCalibration tx
   * @property {number} ty SSL_GeometryCameraCalibration ty
   * @property {number} tz SSL_GeometryCameraCalibration tz
   * @property {number|null} [derivedCameraWorldTx] SSL_GeometryCameraCalibration derivedCameraWorldTx
   * @property {number|null} [derivedCameraWorldTy] SSL_GeometryCameraCalibration derivedCameraWorldTy
   * @property {number|null} [derivedCameraWorldTz] SSL_GeometryCameraCalibration derivedCameraWorldTz
   */

  /**
   * Constructs a new SSL_GeometryCameraCalibration.
   * @exports SSL_GeometryCameraCalibration
   * @classdesc Represents a SSL_GeometryCameraCalibration.
   * @implements ISSL_GeometryCameraCalibration
   * @constructor
   * @param {ISSL_GeometryCameraCalibration=} [properties] Properties to set
   */
  function SSL_GeometryCameraCalibration(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null)
          this[keys[i]] = properties[keys[i]];
  }

  /**
   * SSL_GeometryCameraCalibration cameraId.
   * @member {number} cameraId
   * @memberof SSL_GeometryCameraCalibration
   * @instance
   */
  SSL_GeometryCameraCalibration.prototype.cameraId = 0;

  /**
   * SSL_GeometryCameraCalibration focalLength.
   * @member {number} focalLength
   * @memberof SSL_GeometryCameraCalibration
   * @instance
   */
  SSL_GeometryCameraCalibration.prototype.focalLength = 0;

  /**
   * SSL_GeometryCameraCalibration principalPointX.
   * @member {number} principalPointX
   * @memberof SSL_GeometryCameraCalibration
   * @instance
   */
  SSL_GeometryCameraCalibration.prototype.principalPointX = 0;

  /**
   * SSL_GeometryCameraCalibration principalPointY.
   * @member {number} principalPointY
   * @memberof SSL_GeometryCameraCalibration
   * @instance
   */
  SSL_GeometryCameraCalibration.prototype.principalPointY = 0;

  /**
   * SSL_GeometryCameraCalibration distortion.
   * @member {number} distortion
   * @memberof SSL_GeometryCameraCalibration
   * @instance
   */
  SSL_GeometryCameraCalibration.prototype.distortion = 0;

  /**
   * SSL_GeometryCameraCalibration q0.
   * @member {number} q0
   * @memberof SSL_GeometryCameraCalibration
   * @instance
   */
  SSL_GeometryCameraCalibration.prototype.q0 = 0;

  /**
   * SSL_GeometryCameraCalibration q1.
   * @member {number} q1
   * @memberof SSL_GeometryCameraCalibration
   * @instance
   */
  SSL_GeometryCameraCalibration.prototype.q1 = 0;

  /**
   * SSL_GeometryCameraCalibration q2.
   * @member {number} q2
   * @memberof SSL_GeometryCameraCalibration
   * @instance
   */
  SSL_GeometryCameraCalibration.prototype.q2 = 0;

  /**
   * SSL_GeometryCameraCalibration q3.
   * @member {number} q3
   * @memberof SSL_GeometryCameraCalibration
   * @instance
   */
  SSL_GeometryCameraCalibration.prototype.q3 = 0;

  /**
   * SSL_GeometryCameraCalibration tx.
   * @member {number} tx
   * @memberof SSL_GeometryCameraCalibration
   * @instance
   */
  SSL_GeometryCameraCalibration.prototype.tx = 0;

  /**
   * SSL_GeometryCameraCalibration ty.
   * @member {number} ty
   * @memberof SSL_GeometryCameraCalibration
   * @instance
   */
  SSL_GeometryCameraCalibration.prototype.ty = 0;

  /**
   * SSL_GeometryCameraCalibration tz.
   * @member {number} tz
   * @memberof SSL_GeometryCameraCalibration
   * @instance
   */
  SSL_GeometryCameraCalibration.prototype.tz = 0;

  /**
   * SSL_GeometryCameraCalibration derivedCameraWorldTx.
   * @member {number} derivedCameraWorldTx
   * @memberof SSL_GeometryCameraCalibration
   * @instance
   */
  SSL_GeometryCameraCalibration.prototype.derivedCameraWorldTx = 0;

  /**
   * SSL_GeometryCameraCalibration derivedCameraWorldTy.
   * @member {number} derivedCameraWorldTy
   * @memberof SSL_GeometryCameraCalibration
   * @instance
   */
  SSL_GeometryCameraCalibration.prototype.derivedCameraWorldTy = 0;

  /**
   * SSL_GeometryCameraCalibration derivedCameraWorldTz.
   * @member {number} derivedCameraWorldTz
   * @memberof SSL_GeometryCameraCalibration
   * @instance
   */
  SSL_GeometryCameraCalibration.prototype.derivedCameraWorldTz = 0;

  /**
   * Creates a new SSL_GeometryCameraCalibration instance using the specified properties.
   * @function create
   * @memberof SSL_GeometryCameraCalibration
   * @static
   * @param {ISSL_GeometryCameraCalibration=} [properties] Properties to set
   * @returns {SSL_GeometryCameraCalibration} SSL_GeometryCameraCalibration instance
   */
  SSL_GeometryCameraCalibration.create = function create(properties) {
    return new SSL_GeometryCameraCalibration(properties);
  };

  /**
   * Encodes the specified SSL_GeometryCameraCalibration message. Does not implicitly {@link SSL_GeometryCameraCalibration.verify|verify} messages.
   * @function encode
   * @memberof SSL_GeometryCameraCalibration
   * @static
   * @param {ISSL_GeometryCameraCalibration} message SSL_GeometryCameraCalibration message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_GeometryCameraCalibration.encode = function encode(message, writer) {
    if (!writer)
      writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.cameraId);
    writer.uint32(/* id 2, wireType 5 =*/21).float(message.focalLength);
    writer.uint32(/* id 3, wireType 5 =*/29).float(message.principalPointX);
    writer.uint32(/* id 4, wireType 5 =*/37).float(message.principalPointY);
    writer.uint32(/* id 5, wireType 5 =*/45).float(message.distortion);
    writer.uint32(/* id 6, wireType 5 =*/53).float(message.q0);
    writer.uint32(/* id 7, wireType 5 =*/61).float(message.q1);
    writer.uint32(/* id 8, wireType 5 =*/69).float(message.q2);
    writer.uint32(/* id 9, wireType 5 =*/77).float(message.q3);
    writer.uint32(/* id 10, wireType 5 =*/85).float(message.tx);
    writer.uint32(/* id 11, wireType 5 =*/93).float(message.ty);
    writer.uint32(/* id 12, wireType 5 =*/101).float(message.tz);
    if (message.derivedCameraWorldTx != null && message.hasOwnProperty("derivedCameraWorldTx"))
      writer.uint32(/* id 13, wireType 5 =*/109).float(message.derivedCameraWorldTx);
    if (message.derivedCameraWorldTy != null && message.hasOwnProperty("derivedCameraWorldTy"))
      writer.uint32(/* id 14, wireType 5 =*/117).float(message.derivedCameraWorldTy);
    if (message.derivedCameraWorldTz != null && message.hasOwnProperty("derivedCameraWorldTz"))
      writer.uint32(/* id 15, wireType 5 =*/125).float(message.derivedCameraWorldTz);
    return writer;
  };

  /**
   * Encodes the specified SSL_GeometryCameraCalibration message, length delimited. Does not implicitly {@link SSL_GeometryCameraCalibration.verify|verify} messages.
   * @function encodeDelimited
   * @memberof SSL_GeometryCameraCalibration
   * @static
   * @param {ISSL_GeometryCameraCalibration} message SSL_GeometryCameraCalibration message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_GeometryCameraCalibration.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a SSL_GeometryCameraCalibration message from the specified reader or buffer.
   * @function decode
   * @memberof SSL_GeometryCameraCalibration
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {SSL_GeometryCameraCalibration} SSL_GeometryCameraCalibration
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_GeometryCameraCalibration.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader))
      reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.SSL_GeometryCameraCalibration();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cameraId = reader.uint32();
          break;
        case 2:
          message.focalLength = reader.float();
          break;
        case 3:
          message.principalPointX = reader.float();
          break;
        case 4:
          message.principalPointY = reader.float();
          break;
        case 5:
          message.distortion = reader.float();
          break;
        case 6:
          message.q0 = reader.float();
          break;
        case 7:
          message.q1 = reader.float();
          break;
        case 8:
          message.q2 = reader.float();
          break;
        case 9:
          message.q3 = reader.float();
          break;
        case 10:
          message.tx = reader.float();
          break;
        case 11:
          message.ty = reader.float();
          break;
        case 12:
          message.tz = reader.float();
          break;
        case 13:
          message.derivedCameraWorldTx = reader.float();
          break;
        case 14:
          message.derivedCameraWorldTy = reader.float();
          break;
        case 15:
          message.derivedCameraWorldTz = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("cameraId"))
      throw $util.ProtocolError("missing required 'cameraId'", {instance: message});
    if (!message.hasOwnProperty("focalLength"))
      throw $util.ProtocolError("missing required 'focalLength'", {instance: message});
    if (!message.hasOwnProperty("principalPointX"))
      throw $util.ProtocolError("missing required 'principalPointX'", {instance: message});
    if (!message.hasOwnProperty("principalPointY"))
      throw $util.ProtocolError("missing required 'principalPointY'", {instance: message});
    if (!message.hasOwnProperty("distortion"))
      throw $util.ProtocolError("missing required 'distortion'", {instance: message});
    if (!message.hasOwnProperty("q0"))
      throw $util.ProtocolError("missing required 'q0'", {instance: message});
    if (!message.hasOwnProperty("q1"))
      throw $util.ProtocolError("missing required 'q1'", {instance: message});
    if (!message.hasOwnProperty("q2"))
      throw $util.ProtocolError("missing required 'q2'", {instance: message});
    if (!message.hasOwnProperty("q3"))
      throw $util.ProtocolError("missing required 'q3'", {instance: message});
    if (!message.hasOwnProperty("tx"))
      throw $util.ProtocolError("missing required 'tx'", {instance: message});
    if (!message.hasOwnProperty("ty"))
      throw $util.ProtocolError("missing required 'ty'", {instance: message});
    if (!message.hasOwnProperty("tz"))
      throw $util.ProtocolError("missing required 'tz'", {instance: message});
    return message;
  };

  /**
   * Decodes a SSL_GeometryCameraCalibration message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof SSL_GeometryCameraCalibration
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {SSL_GeometryCameraCalibration} SSL_GeometryCameraCalibration
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_GeometryCameraCalibration.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader))
      reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a SSL_GeometryCameraCalibration message.
   * @function verify
   * @memberof SSL_GeometryCameraCalibration
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  SSL_GeometryCameraCalibration.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
    if (!$util.isInteger(message.cameraId))
      return "cameraId: integer expected";
    if (typeof message.focalLength !== "number")
      return "focalLength: number expected";
    if (typeof message.principalPointX !== "number")
      return "principalPointX: number expected";
    if (typeof message.principalPointY !== "number")
      return "principalPointY: number expected";
    if (typeof message.distortion !== "number")
      return "distortion: number expected";
    if (typeof message.q0 !== "number")
      return "q0: number expected";
    if (typeof message.q1 !== "number")
      return "q1: number expected";
    if (typeof message.q2 !== "number")
      return "q2: number expected";
    if (typeof message.q3 !== "number")
      return "q3: number expected";
    if (typeof message.tx !== "number")
      return "tx: number expected";
    if (typeof message.ty !== "number")
      return "ty: number expected";
    if (typeof message.tz !== "number")
      return "tz: number expected";
    if (message.derivedCameraWorldTx != null && message.hasOwnProperty("derivedCameraWorldTx"))
      if (typeof message.derivedCameraWorldTx !== "number")
        return "derivedCameraWorldTx: number expected";
    if (message.derivedCameraWorldTy != null && message.hasOwnProperty("derivedCameraWorldTy"))
      if (typeof message.derivedCameraWorldTy !== "number")
        return "derivedCameraWorldTy: number expected";
    if (message.derivedCameraWorldTz != null && message.hasOwnProperty("derivedCameraWorldTz"))
      if (typeof message.derivedCameraWorldTz !== "number")
        return "derivedCameraWorldTz: number expected";
    return null;
  };

  /**
   * Creates a SSL_GeometryCameraCalibration message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof SSL_GeometryCameraCalibration
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {SSL_GeometryCameraCalibration} SSL_GeometryCameraCalibration
   */
  SSL_GeometryCameraCalibration.fromObject = function fromObject(object) {
    if (object instanceof $root.SSL_GeometryCameraCalibration)
      return object;
    var message = new $root.SSL_GeometryCameraCalibration();
    if (object.cameraId != null)
      message.cameraId = object.cameraId >>> 0;
    if (object.focalLength != null)
      message.focalLength = Number(object.focalLength);
    if (object.principalPointX != null)
      message.principalPointX = Number(object.principalPointX);
    if (object.principalPointY != null)
      message.principalPointY = Number(object.principalPointY);
    if (object.distortion != null)
      message.distortion = Number(object.distortion);
    if (object.q0 != null)
      message.q0 = Number(object.q0);
    if (object.q1 != null)
      message.q1 = Number(object.q1);
    if (object.q2 != null)
      message.q2 = Number(object.q2);
    if (object.q3 != null)
      message.q3 = Number(object.q3);
    if (object.tx != null)
      message.tx = Number(object.tx);
    if (object.ty != null)
      message.ty = Number(object.ty);
    if (object.tz != null)
      message.tz = Number(object.tz);
    if (object.derivedCameraWorldTx != null)
      message.derivedCameraWorldTx = Number(object.derivedCameraWorldTx);
    if (object.derivedCameraWorldTy != null)
      message.derivedCameraWorldTy = Number(object.derivedCameraWorldTy);
    if (object.derivedCameraWorldTz != null)
      message.derivedCameraWorldTz = Number(object.derivedCameraWorldTz);
    return message;
  };

  /**
   * Creates a plain object from a SSL_GeometryCameraCalibration message. Also converts values to other types if specified.
   * @function toObject
   * @memberof SSL_GeometryCameraCalibration
   * @static
   * @param {SSL_GeometryCameraCalibration} message SSL_GeometryCameraCalibration
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  SSL_GeometryCameraCalibration.toObject = function toObject(message, options) {
    if (!options)
      options = {};
    var object = {};
    if (options.defaults) {
      object.cameraId = 0;
      object.focalLength = 0;
      object.principalPointX = 0;
      object.principalPointY = 0;
      object.distortion = 0;
      object.q0 = 0;
      object.q1 = 0;
      object.q2 = 0;
      object.q3 = 0;
      object.tx = 0;
      object.ty = 0;
      object.tz = 0;
      object.derivedCameraWorldTx = 0;
      object.derivedCameraWorldTy = 0;
      object.derivedCameraWorldTz = 0;
    }
    if (message.cameraId != null && message.hasOwnProperty("cameraId"))
      object.cameraId = message.cameraId;
    if (message.focalLength != null && message.hasOwnProperty("focalLength"))
      object.focalLength = options.json && !isFinite(message.focalLength) ? String(message.focalLength) : message.focalLength;
    if (message.principalPointX != null && message.hasOwnProperty("principalPointX"))
      object.principalPointX = options.json && !isFinite(message.principalPointX) ? String(message.principalPointX) : message.principalPointX;
    if (message.principalPointY != null && message.hasOwnProperty("principalPointY"))
      object.principalPointY = options.json && !isFinite(message.principalPointY) ? String(message.principalPointY) : message.principalPointY;
    if (message.distortion != null && message.hasOwnProperty("distortion"))
      object.distortion = options.json && !isFinite(message.distortion) ? String(message.distortion) : message.distortion;
    if (message.q0 != null && message.hasOwnProperty("q0"))
      object.q0 = options.json && !isFinite(message.q0) ? String(message.q0) : message.q0;
    if (message.q1 != null && message.hasOwnProperty("q1"))
      object.q1 = options.json && !isFinite(message.q1) ? String(message.q1) : message.q1;
    if (message.q2 != null && message.hasOwnProperty("q2"))
      object.q2 = options.json && !isFinite(message.q2) ? String(message.q2) : message.q2;
    if (message.q3 != null && message.hasOwnProperty("q3"))
      object.q3 = options.json && !isFinite(message.q3) ? String(message.q3) : message.q3;
    if (message.tx != null && message.hasOwnProperty("tx"))
      object.tx = options.json && !isFinite(message.tx) ? String(message.tx) : message.tx;
    if (message.ty != null && message.hasOwnProperty("ty"))
      object.ty = options.json && !isFinite(message.ty) ? String(message.ty) : message.ty;
    if (message.tz != null && message.hasOwnProperty("tz"))
      object.tz = options.json && !isFinite(message.tz) ? String(message.tz) : message.tz;
    if (message.derivedCameraWorldTx != null && message.hasOwnProperty("derivedCameraWorldTx"))
      object.derivedCameraWorldTx = options.json && !isFinite(message.derivedCameraWorldTx) ? String(message.derivedCameraWorldTx) : message.derivedCameraWorldTx;
    if (message.derivedCameraWorldTy != null && message.hasOwnProperty("derivedCameraWorldTy"))
      object.derivedCameraWorldTy = options.json && !isFinite(message.derivedCameraWorldTy) ? String(message.derivedCameraWorldTy) : message.derivedCameraWorldTy;
    if (message.derivedCameraWorldTz != null && message.hasOwnProperty("derivedCameraWorldTz"))
      object.derivedCameraWorldTz = options.json && !isFinite(message.derivedCameraWorldTz) ? String(message.derivedCameraWorldTz) : message.derivedCameraWorldTz;
    return object;
  };

  /**
   * Converts this SSL_GeometryCameraCalibration to JSON.
   * @function toJSON
   * @memberof SSL_GeometryCameraCalibration
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  SSL_GeometryCameraCalibration.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return SSL_GeometryCameraCalibration;
})();

$root.SSL_GeometryData = (function () {

  /**
   * Properties of a SSL_GeometryData.
   * @exports ISSL_GeometryData
   * @interface ISSL_GeometryData
   * @property {ISSL_GeometryFieldSize} field SSL_GeometryData field
   * @property {Array.<ISSL_GeometryCameraCalibration>|null} [calib] SSL_GeometryData calib
   */

  /**
   * Constructs a new SSL_GeometryData.
   * @exports SSL_GeometryData
   * @classdesc Represents a SSL_GeometryData.
   * @implements ISSL_GeometryData
   * @constructor
   * @param {ISSL_GeometryData=} [properties] Properties to set
   */
  function SSL_GeometryData(properties) {
    this.calib = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null)
          this[keys[i]] = properties[keys[i]];
  }

  /**
   * SSL_GeometryData field.
   * @member {ISSL_GeometryFieldSize} field
   * @memberof SSL_GeometryData
   * @instance
   */
  SSL_GeometryData.prototype.field = null;

  /**
   * SSL_GeometryData calib.
   * @member {Array.<ISSL_GeometryCameraCalibration>} calib
   * @memberof SSL_GeometryData
   * @instance
   */
  SSL_GeometryData.prototype.calib = $util.emptyArray;

  /**
   * Creates a new SSL_GeometryData instance using the specified properties.
   * @function create
   * @memberof SSL_GeometryData
   * @static
   * @param {ISSL_GeometryData=} [properties] Properties to set
   * @returns {SSL_GeometryData} SSL_GeometryData instance
   */
  SSL_GeometryData.create = function create(properties) {
    return new SSL_GeometryData(properties);
  };

  /**
   * Encodes the specified SSL_GeometryData message. Does not implicitly {@link SSL_GeometryData.verify|verify} messages.
   * @function encode
   * @memberof SSL_GeometryData
   * @static
   * @param {ISSL_GeometryData} message SSL_GeometryData message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_GeometryData.encode = function encode(message, writer) {
    if (!writer)
      writer = $Writer.create();
    $root.SSL_GeometryFieldSize.encode(message.field, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
    if (message.calib != null && message.calib.length)
      for (var i = 0; i < message.calib.length; ++i)
        $root.SSL_GeometryCameraCalibration.encode(message.calib[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
    return writer;
  };

  /**
   * Encodes the specified SSL_GeometryData message, length delimited. Does not implicitly {@link SSL_GeometryData.verify|verify} messages.
   * @function encodeDelimited
   * @memberof SSL_GeometryData
   * @static
   * @param {ISSL_GeometryData} message SSL_GeometryData message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_GeometryData.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a SSL_GeometryData message from the specified reader or buffer.
   * @function decode
   * @memberof SSL_GeometryData
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {SSL_GeometryData} SSL_GeometryData
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_GeometryData.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader))
      reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SSL_GeometryData();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.field = $root.SSL_GeometryFieldSize.decode(reader, reader.uint32());
          break;
        case 2:
          if (!(message.calib && message.calib.length))
            message.calib = [];
          message.calib.push($root.SSL_GeometryCameraCalibration.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("field"))
      throw $util.ProtocolError("missing required 'field'", {instance: message});
    return message;
  };

  /**
   * Decodes a SSL_GeometryData message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof SSL_GeometryData
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {SSL_GeometryData} SSL_GeometryData
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_GeometryData.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader))
      reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a SSL_GeometryData message.
   * @function verify
   * @memberof SSL_GeometryData
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  SSL_GeometryData.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
    {
      var error = $root.SSL_GeometryFieldSize.verify(message.field);
      if (error)
        return "field." + error;
    }
    if (message.calib != null && message.hasOwnProperty("calib")) {
      if (!Array.isArray(message.calib))
        return "calib: array expected";
      for (var i = 0; i < message.calib.length; ++i) {
        var error = $root.SSL_GeometryCameraCalibration.verify(message.calib[i]);
        if (error)
          return "calib." + error;
      }
    }
    return null;
  };

  /**
   * Creates a SSL_GeometryData message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof SSL_GeometryData
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {SSL_GeometryData} SSL_GeometryData
   */
  SSL_GeometryData.fromObject = function fromObject(object) {
    if (object instanceof $root.SSL_GeometryData)
      return object;
    var message = new $root.SSL_GeometryData();
    if (object.field != null) {
      if (typeof object.field !== "object")
        throw TypeError(".SSL_GeometryData.field: object expected");
      message.field = $root.SSL_GeometryFieldSize.fromObject(object.field);
    }
    if (object.calib) {
      if (!Array.isArray(object.calib))
        throw TypeError(".SSL_GeometryData.calib: array expected");
      message.calib = [];
      for (var i = 0; i < object.calib.length; ++i) {
        if (typeof object.calib[i] !== "object")
          throw TypeError(".SSL_GeometryData.calib: object expected");
        message.calib[i] = $root.SSL_GeometryCameraCalibration.fromObject(object.calib[i]);
      }
    }
    return message;
  };

  /**
   * Creates a plain object from a SSL_GeometryData message. Also converts values to other types if specified.
   * @function toObject
   * @memberof SSL_GeometryData
   * @static
   * @param {SSL_GeometryData} message SSL_GeometryData
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  SSL_GeometryData.toObject = function toObject(message, options) {
    if (!options)
      options = {};
    var object = {};
    if (options.arrays || options.defaults)
      object.calib = [];
    if (options.defaults)
      object.field = null;
    if (message.field != null && message.hasOwnProperty("field"))
      object.field = $root.SSL_GeometryFieldSize.toObject(message.field, options);
    if (message.calib && message.calib.length) {
      object.calib = [];
      for (var j = 0; j < message.calib.length; ++j)
        object.calib[j] = $root.SSL_GeometryCameraCalibration.toObject(message.calib[j], options);
    }
    return object;
  };

  /**
   * Converts this SSL_GeometryData to JSON.
   * @function toJSON
   * @memberof SSL_GeometryData
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  SSL_GeometryData.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return SSL_GeometryData;
})();

$root.SSL_WrapperPacket = (function () {

  /**
   * Properties of a SSL_WrapperPacket.
   * @exports ISSL_WrapperPacket
   * @interface ISSL_WrapperPacket
   * @property {ISSL_DetectionFrame|null} [detection] SSL_WrapperPacket detection
   * @property {ISSL_GeometryData|null} [geometry] SSL_WrapperPacket geometry
   */

  /**
   * Constructs a new SSL_WrapperPacket.
   * @exports SSL_WrapperPacket
   * @classdesc Represents a SSL_WrapperPacket.
   * @implements ISSL_WrapperPacket
   * @constructor
   * @param {ISSL_WrapperPacket=} [properties] Properties to set
   */
  function SSL_WrapperPacket(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null)
          this[keys[i]] = properties[keys[i]];
  }

  /**
   * SSL_WrapperPacket detection.
   * @member {ISSL_DetectionFrame|null|undefined} detection
   * @memberof SSL_WrapperPacket
   * @instance
   */
  SSL_WrapperPacket.prototype.detection = null;

  /**
   * SSL_WrapperPacket geometry.
   * @member {ISSL_GeometryData|null|undefined} geometry
   * @memberof SSL_WrapperPacket
   * @instance
   */
  SSL_WrapperPacket.prototype.geometry = null;

  /**
   * Creates a new SSL_WrapperPacket instance using the specified properties.
   * @function create
   * @memberof SSL_WrapperPacket
   * @static
   * @param {ISSL_WrapperPacket=} [properties] Properties to set
   * @returns {SSL_WrapperPacket} SSL_WrapperPacket instance
   */
  SSL_WrapperPacket.create = function create(properties) {
    return new SSL_WrapperPacket(properties);
  };

  /**
   * Encodes the specified SSL_WrapperPacket message. Does not implicitly {@link SSL_WrapperPacket.verify|verify} messages.
   * @function encode
   * @memberof SSL_WrapperPacket
   * @static
   * @param {ISSL_WrapperPacket} message SSL_WrapperPacket message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_WrapperPacket.encode = function encode(message, writer) {
    if (!writer)
      writer = $Writer.create();
    if (message.detection != null && message.hasOwnProperty("detection"))
      $root.SSL_DetectionFrame.encode(message.detection, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
    if (message.geometry != null && message.hasOwnProperty("geometry"))
      $root.SSL_GeometryData.encode(message.geometry, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
    return writer;
  };

  /**
   * Encodes the specified SSL_WrapperPacket message, length delimited. Does not implicitly {@link SSL_WrapperPacket.verify|verify} messages.
   * @function encodeDelimited
   * @memberof SSL_WrapperPacket
   * @static
   * @param {ISSL_WrapperPacket} message SSL_WrapperPacket message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_WrapperPacket.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a SSL_WrapperPacket message from the specified reader or buffer.
   * @function decode
   * @memberof SSL_WrapperPacket
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {SSL_WrapperPacket} SSL_WrapperPacket
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_WrapperPacket.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader))
      reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SSL_WrapperPacket();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.detection = $root.SSL_DetectionFrame.decode(reader, reader.uint32());
          break;
        case 2:
          message.geometry = $root.SSL_GeometryData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a SSL_WrapperPacket message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof SSL_WrapperPacket
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {SSL_WrapperPacket} SSL_WrapperPacket
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_WrapperPacket.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader))
      reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a SSL_WrapperPacket message.
   * @function verify
   * @memberof SSL_WrapperPacket
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  SSL_WrapperPacket.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
    if (message.detection != null && message.hasOwnProperty("detection")) {
      var error = $root.SSL_DetectionFrame.verify(message.detection);
      if (error)
        return "detection." + error;
    }
    if (message.geometry != null && message.hasOwnProperty("geometry")) {
      var error = $root.SSL_GeometryData.verify(message.geometry);
      if (error)
        return "geometry." + error;
    }
    return null;
  };

  /**
   * Creates a SSL_WrapperPacket message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof SSL_WrapperPacket
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {SSL_WrapperPacket} SSL_WrapperPacket
   */
  SSL_WrapperPacket.fromObject = function fromObject(object) {
    if (object instanceof $root.SSL_WrapperPacket)
      return object;
    var message = new $root.SSL_WrapperPacket();
    if (object.detection != null) {
      if (typeof object.detection !== "object")
        throw TypeError(".SSL_WrapperPacket.detection: object expected");
      message.detection = $root.SSL_DetectionFrame.fromObject(object.detection);
    }
    if (object.geometry != null) {
      if (typeof object.geometry !== "object")
        throw TypeError(".SSL_WrapperPacket.geometry: object expected");
      message.geometry = $root.SSL_GeometryData.fromObject(object.geometry);
    }
    return message;
  };

  /**
   * Creates a plain object from a SSL_WrapperPacket message. Also converts values to other types if specified.
   * @function toObject
   * @memberof SSL_WrapperPacket
   * @static
   * @param {SSL_WrapperPacket} message SSL_WrapperPacket
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  SSL_WrapperPacket.toObject = function toObject(message, options) {
    if (!options)
      options = {};
    var object = {};
    if (options.defaults) {
      object.detection = null;
      object.geometry = null;
    }
    if (message.detection != null && message.hasOwnProperty("detection"))
      object.detection = $root.SSL_DetectionFrame.toObject(message.detection, options);
    if (message.geometry != null && message.hasOwnProperty("geometry"))
      object.geometry = $root.SSL_GeometryData.toObject(message.geometry, options);
    return object;
  };

  /**
   * Converts this SSL_WrapperPacket to JSON.
   * @function toJSON
   * @memberof SSL_WrapperPacket
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  SSL_WrapperPacket.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return SSL_WrapperPacket;
})();

module.exports = $root;
