/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.SSL_Micro_DetectionBall = (function () {

  /**
   * Properties of a SSL_Micro_DetectionBall.
   * @exports ISSL_Micro_DetectionBall
   * @interface ISSL_Micro_DetectionBall
   * @property {number} x SSL_Micro_DetectionBall x
   * @property {number} y SSL_Micro_DetectionBall y
   */

  /**
   * Constructs a new SSL_Micro_DetectionBall.
   * @exports SSL_Micro_DetectionBall
   * @classdesc Represents a SSL_Micro_DetectionBall.
   * @implements ISSL_Micro_DetectionBall
   * @constructor
   * @param {ISSL_Micro_DetectionBall=} [properties] Properties to set
   */
  function SSL_Micro_DetectionBall(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null)
          this[keys[i]] = properties[keys[i]];
  }

  /**
   * SSL_Micro_DetectionBall x.
   * @member {number} x
   * @memberof SSL_Micro_DetectionBall
   * @instance
   */
  SSL_Micro_DetectionBall.prototype.x = 0;

  /**
   * SSL_Micro_DetectionBall y.
   * @member {number} y
   * @memberof SSL_Micro_DetectionBall
   * @instance
   */
  SSL_Micro_DetectionBall.prototype.y = 0;

  /**
   * Creates a new SSL_Micro_DetectionBall instance using the specified properties.
   * @function create
   * @memberof SSL_Micro_DetectionBall
   * @static
   * @param {ISSL_Micro_DetectionBall=} [properties] Properties to set
   * @returns {SSL_Micro_DetectionBall} SSL_Micro_DetectionBall instance
   */
  SSL_Micro_DetectionBall.create = function create(properties) {
    return new SSL_Micro_DetectionBall(properties);
  };

  /**
   * Encodes the specified SSL_Micro_DetectionBall message. Does not implicitly {@link SSL_Micro_DetectionBall.verify|verify} messages.
   * @function encode
   * @memberof SSL_Micro_DetectionBall
   * @static
   * @param {ISSL_Micro_DetectionBall} message SSL_Micro_DetectionBall message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_Micro_DetectionBall.encode = function encode(message, writer) {
    if (!writer)
      writer = $Writer.create();
    writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
    writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
    return writer;
  };

  /**
   * Encodes the specified SSL_Micro_DetectionBall message, length delimited. Does not implicitly {@link SSL_Micro_DetectionBall.verify|verify} messages.
   * @function encodeDelimited
   * @memberof SSL_Micro_DetectionBall
   * @static
   * @param {ISSL_Micro_DetectionBall} message SSL_Micro_DetectionBall message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_Micro_DetectionBall.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a SSL_Micro_DetectionBall message from the specified reader or buffer.
   * @function decode
   * @memberof SSL_Micro_DetectionBall
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {SSL_Micro_DetectionBall} SSL_Micro_DetectionBall
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_Micro_DetectionBall.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader))
      reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SSL_Micro_DetectionBall();
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
   * Decodes a SSL_Micro_DetectionBall message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof SSL_Micro_DetectionBall
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {SSL_Micro_DetectionBall} SSL_Micro_DetectionBall
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_Micro_DetectionBall.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader))
      reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a SSL_Micro_DetectionBall message.
   * @function verify
   * @memberof SSL_Micro_DetectionBall
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  SSL_Micro_DetectionBall.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
    if (typeof message.x !== "number")
      return "x: number expected";
    if (typeof message.y !== "number")
      return "y: number expected";
    return null;
  };

  /**
   * Creates a SSL_Micro_DetectionBall message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof SSL_Micro_DetectionBall
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {SSL_Micro_DetectionBall} SSL_Micro_DetectionBall
   */
  SSL_Micro_DetectionBall.fromObject = function fromObject(object) {
    if (object instanceof $root.SSL_Micro_DetectionBall)
      return object;
    var message = new $root.SSL_Micro_DetectionBall();
    if (object.x != null)
      message.x = Number(object.x);
    if (object.y != null)
      message.y = Number(object.y);
    return message;
  };

  /**
   * Creates a plain object from a SSL_Micro_DetectionBall message. Also converts values to other types if specified.
   * @function toObject
   * @memberof SSL_Micro_DetectionBall
   * @static
   * @param {SSL_Micro_DetectionBall} message SSL_Micro_DetectionBall
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  SSL_Micro_DetectionBall.toObject = function toObject(message, options) {
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
   * Converts this SSL_Micro_DetectionBall to JSON.
   * @function toJSON
   * @memberof SSL_Micro_DetectionBall
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  SSL_Micro_DetectionBall.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return SSL_Micro_DetectionBall;
})();

$root.SSL_Micro_DetectionRobot = (function () {

  /**
   * Properties of a SSL_Micro_DetectionRobot.
   * @exports ISSL_Micro_DetectionRobot
   * @interface ISSL_Micro_DetectionRobot
   * @property {number|null} [robotId] SSL_Micro_DetectionRobot robotId
   * @property {number} x SSL_Micro_DetectionRobot x
   * @property {number} y SSL_Micro_DetectionRobot y
   * @property {number|null} [orientation] SSL_Micro_DetectionRobot orientation
   */

  /**
   * Constructs a new SSL_Micro_DetectionRobot.
   * @exports SSL_Micro_DetectionRobot
   * @classdesc Represents a SSL_Micro_DetectionRobot.
   * @implements ISSL_Micro_DetectionRobot
   * @constructor
   * @param {ISSL_Micro_DetectionRobot=} [properties] Properties to set
   */
  function SSL_Micro_DetectionRobot(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null)
          this[keys[i]] = properties[keys[i]];
  }

  /**
   * SSL_Micro_DetectionRobot robotId.
   * @member {number} robotId
   * @memberof SSL_Micro_DetectionRobot
   * @instance
   */
  SSL_Micro_DetectionRobot.prototype.robotId = 0;

  /**
   * SSL_Micro_DetectionRobot x.
   * @member {number} x
   * @memberof SSL_Micro_DetectionRobot
   * @instance
   */
  SSL_Micro_DetectionRobot.prototype.x = 0;

  /**
   * SSL_Micro_DetectionRobot y.
   * @member {number} y
   * @memberof SSL_Micro_DetectionRobot
   * @instance
   */
  SSL_Micro_DetectionRobot.prototype.y = 0;

  /**
   * SSL_Micro_DetectionRobot orientation.
   * @member {number} orientation
   * @memberof SSL_Micro_DetectionRobot
   * @instance
   */
  SSL_Micro_DetectionRobot.prototype.orientation = 0;

  /**
   * Creates a new SSL_Micro_DetectionRobot instance using the specified properties.
   * @function create
   * @memberof SSL_Micro_DetectionRobot
   * @static
   * @param {ISSL_Micro_DetectionRobot=} [properties] Properties to set
   * @returns {SSL_Micro_DetectionRobot} SSL_Micro_DetectionRobot instance
   */
  SSL_Micro_DetectionRobot.create = function create(properties) {
    return new SSL_Micro_DetectionRobot(properties);
  };

  /**
   * Encodes the specified SSL_Micro_DetectionRobot message. Does not implicitly {@link SSL_Micro_DetectionRobot.verify|verify} messages.
   * @function encode
   * @memberof SSL_Micro_DetectionRobot
   * @static
   * @param {ISSL_Micro_DetectionRobot} message SSL_Micro_DetectionRobot message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_Micro_DetectionRobot.encode = function encode(message, writer) {
    if (!writer)
      writer = $Writer.create();
    if (message.robotId != null && message.hasOwnProperty("robotId"))
      writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.robotId);
    writer.uint32(/* id 2, wireType 5 =*/21).float(message.x);
    writer.uint32(/* id 3, wireType 5 =*/29).float(message.y);
    if (message.orientation != null && message.hasOwnProperty("orientation"))
      writer.uint32(/* id 4, wireType 5 =*/37).float(message.orientation);
    return writer;
  };

  /**
   * Encodes the specified SSL_Micro_DetectionRobot message, length delimited. Does not implicitly {@link SSL_Micro_DetectionRobot.verify|verify} messages.
   * @function encodeDelimited
   * @memberof SSL_Micro_DetectionRobot
   * @static
   * @param {ISSL_Micro_DetectionRobot} message SSL_Micro_DetectionRobot message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_Micro_DetectionRobot.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a SSL_Micro_DetectionRobot message from the specified reader or buffer.
   * @function decode
   * @memberof SSL_Micro_DetectionRobot
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {SSL_Micro_DetectionRobot} SSL_Micro_DetectionRobot
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_Micro_DetectionRobot.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader))
      reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SSL_Micro_DetectionRobot();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.robotId = reader.uint32();
          break;
        case 2:
          message.x = reader.float();
          break;
        case 3:
          message.y = reader.float();
          break;
        case 4:
          message.orientation = reader.float();
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
   * Decodes a SSL_Micro_DetectionRobot message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof SSL_Micro_DetectionRobot
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {SSL_Micro_DetectionRobot} SSL_Micro_DetectionRobot
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_Micro_DetectionRobot.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader))
      reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a SSL_Micro_DetectionRobot message.
   * @function verify
   * @memberof SSL_Micro_DetectionRobot
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  SSL_Micro_DetectionRobot.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
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
    return null;
  };

  /**
   * Creates a SSL_Micro_DetectionRobot message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof SSL_Micro_DetectionRobot
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {SSL_Micro_DetectionRobot} SSL_Micro_DetectionRobot
   */
  SSL_Micro_DetectionRobot.fromObject = function fromObject(object) {
    if (object instanceof $root.SSL_Micro_DetectionRobot)
      return object;
    var message = new $root.SSL_Micro_DetectionRobot();
    if (object.robotId != null)
      message.robotId = object.robotId >>> 0;
    if (object.x != null)
      message.x = Number(object.x);
    if (object.y != null)
      message.y = Number(object.y);
    if (object.orientation != null)
      message.orientation = Number(object.orientation);
    return message;
  };

  /**
   * Creates a plain object from a SSL_Micro_DetectionRobot message. Also converts values to other types if specified.
   * @function toObject
   * @memberof SSL_Micro_DetectionRobot
   * @static
   * @param {SSL_Micro_DetectionRobot} message SSL_Micro_DetectionRobot
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  SSL_Micro_DetectionRobot.toObject = function toObject(message, options) {
    if (!options)
      options = {};
    var object = {};
    if (options.defaults) {
      object.robotId = 0;
      object.x = 0;
      object.y = 0;
      object.orientation = 0;
    }
    if (message.robotId != null && message.hasOwnProperty("robotId"))
      object.robotId = message.robotId;
    if (message.x != null && message.hasOwnProperty("x"))
      object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
    if (message.y != null && message.hasOwnProperty("y"))
      object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
    if (message.orientation != null && message.hasOwnProperty("orientation"))
      object.orientation = options.json && !isFinite(message.orientation) ? String(message.orientation) : message.orientation;
    return object;
  };

  /**
   * Converts this SSL_Micro_DetectionRobot to JSON.
   * @function toJSON
   * @memberof SSL_Micro_DetectionRobot
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  SSL_Micro_DetectionRobot.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return SSL_Micro_DetectionRobot;
})();

$root.SSL_Micro_DetectionFrame = (function () {

  /**
   * Properties of a SSL_Micro_DetectionFrame.
   * @exports ISSL_Micro_DetectionFrame
   * @interface ISSL_Micro_DetectionFrame
   * @property {Array.<ISSL_Micro_DetectionBall>|null} [balls] SSL_Micro_DetectionFrame balls
   * @property {Array.<ISSL_Micro_DetectionRobot>|null} [robotsYellow] SSL_Micro_DetectionFrame robotsYellow
   * @property {Array.<ISSL_Micro_DetectionRobot>|null} [robotsBlue] SSL_Micro_DetectionFrame robotsBlue
   */

  /**
   * Constructs a new SSL_Micro_DetectionFrame.
   * @exports SSL_Micro_DetectionFrame
   * @classdesc Represents a SSL_Micro_DetectionFrame.
   * @implements ISSL_Micro_DetectionFrame
   * @constructor
   * @param {ISSL_Micro_DetectionFrame=} [properties] Properties to set
   */
  function SSL_Micro_DetectionFrame(properties) {
    this.balls = [];
    this.robotsYellow = [];
    this.robotsBlue = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null)
          this[keys[i]] = properties[keys[i]];
  }

  /**
   * SSL_Micro_DetectionFrame balls.
   * @member {Array.<ISSL_Micro_DetectionBall>} balls
   * @memberof SSL_Micro_DetectionFrame
   * @instance
   */
  SSL_Micro_DetectionFrame.prototype.balls = $util.emptyArray;

  /**
   * SSL_Micro_DetectionFrame robotsYellow.
   * @member {Array.<ISSL_Micro_DetectionRobot>} robotsYellow
   * @memberof SSL_Micro_DetectionFrame
   * @instance
   */
  SSL_Micro_DetectionFrame.prototype.robotsYellow = $util.emptyArray;

  /**
   * SSL_Micro_DetectionFrame robotsBlue.
   * @member {Array.<ISSL_Micro_DetectionRobot>} robotsBlue
   * @memberof SSL_Micro_DetectionFrame
   * @instance
   */
  SSL_Micro_DetectionFrame.prototype.robotsBlue = $util.emptyArray;

  /**
   * Creates a new SSL_Micro_DetectionFrame instance using the specified properties.
   * @function create
   * @memberof SSL_Micro_DetectionFrame
   * @static
   * @param {ISSL_Micro_DetectionFrame=} [properties] Properties to set
   * @returns {SSL_Micro_DetectionFrame} SSL_Micro_DetectionFrame instance
   */
  SSL_Micro_DetectionFrame.create = function create(properties) {
    return new SSL_Micro_DetectionFrame(properties);
  };

  /**
   * Encodes the specified SSL_Micro_DetectionFrame message. Does not implicitly {@link SSL_Micro_DetectionFrame.verify|verify} messages.
   * @function encode
   * @memberof SSL_Micro_DetectionFrame
   * @static
   * @param {ISSL_Micro_DetectionFrame} message SSL_Micro_DetectionFrame message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_Micro_DetectionFrame.encode = function encode(message, writer) {
    if (!writer)
      writer = $Writer.create();
    if (message.balls != null && message.balls.length)
      for (var i = 0; i < message.balls.length; ++i)
        $root.SSL_Micro_DetectionBall.encode(message.balls[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
    if (message.robotsYellow != null && message.robotsYellow.length)
      for (var i = 0; i < message.robotsYellow.length; ++i)
        $root.SSL_Micro_DetectionRobot.encode(message.robotsYellow[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
    if (message.robotsBlue != null && message.robotsBlue.length)
      for (var i = 0; i < message.robotsBlue.length; ++i)
        $root.SSL_Micro_DetectionRobot.encode(message.robotsBlue[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
    return writer;
  };

  /**
   * Encodes the specified SSL_Micro_DetectionFrame message, length delimited. Does not implicitly {@link SSL_Micro_DetectionFrame.verify|verify} messages.
   * @function encodeDelimited
   * @memberof SSL_Micro_DetectionFrame
   * @static
   * @param {ISSL_Micro_DetectionFrame} message SSL_Micro_DetectionFrame message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_Micro_DetectionFrame.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a SSL_Micro_DetectionFrame message from the specified reader or buffer.
   * @function decode
   * @memberof SSL_Micro_DetectionFrame
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {SSL_Micro_DetectionFrame} SSL_Micro_DetectionFrame
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_Micro_DetectionFrame.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader))
      reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SSL_Micro_DetectionFrame();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          if (!(message.balls && message.balls.length))
            message.balls = [];
          message.balls.push($root.SSL_Micro_DetectionBall.decode(reader, reader.uint32()));
          break;
        case 6:
          if (!(message.robotsYellow && message.robotsYellow.length))
            message.robotsYellow = [];
          message.robotsYellow.push($root.SSL_Micro_DetectionRobot.decode(reader, reader.uint32()));
          break;
        case 7:
          if (!(message.robotsBlue && message.robotsBlue.length))
            message.robotsBlue = [];
          message.robotsBlue.push($root.SSL_Micro_DetectionRobot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a SSL_Micro_DetectionFrame message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof SSL_Micro_DetectionFrame
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {SSL_Micro_DetectionFrame} SSL_Micro_DetectionFrame
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_Micro_DetectionFrame.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader))
      reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a SSL_Micro_DetectionFrame message.
   * @function verify
   * @memberof SSL_Micro_DetectionFrame
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  SSL_Micro_DetectionFrame.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
    if (message.balls != null && message.hasOwnProperty("balls")) {
      if (!Array.isArray(message.balls))
        return "balls: array expected";
      for (var i = 0; i < message.balls.length; ++i) {
        var error = $root.SSL_Micro_DetectionBall.verify(message.balls[i]);
        if (error)
          return "balls." + error;
      }
    }
    if (message.robotsYellow != null && message.hasOwnProperty("robotsYellow")) {
      if (!Array.isArray(message.robotsYellow))
        return "robotsYellow: array expected";
      for (var i = 0; i < message.robotsYellow.length; ++i) {
        var error = $root.SSL_Micro_DetectionRobot.verify(message.robotsYellow[i]);
        if (error)
          return "robotsYellow." + error;
      }
    }
    if (message.robotsBlue != null && message.hasOwnProperty("robotsBlue")) {
      if (!Array.isArray(message.robotsBlue))
        return "robotsBlue: array expected";
      for (var i = 0; i < message.robotsBlue.length; ++i) {
        var error = $root.SSL_Micro_DetectionRobot.verify(message.robotsBlue[i]);
        if (error)
          return "robotsBlue." + error;
      }
    }
    return null;
  };

  /**
   * Creates a SSL_Micro_DetectionFrame message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof SSL_Micro_DetectionFrame
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {SSL_Micro_DetectionFrame} SSL_Micro_DetectionFrame
   */
  SSL_Micro_DetectionFrame.fromObject = function fromObject(object) {
    if (object instanceof $root.SSL_Micro_DetectionFrame)
      return object;
    var message = new $root.SSL_Micro_DetectionFrame();
    if (object.balls) {
      if (!Array.isArray(object.balls))
        throw TypeError(".SSL_Micro_DetectionFrame.balls: array expected");
      message.balls = [];
      for (var i = 0; i < object.balls.length; ++i) {
        if (typeof object.balls[i] !== "object")
          throw TypeError(".SSL_Micro_DetectionFrame.balls: object expected");
        message.balls[i] = $root.SSL_Micro_DetectionBall.fromObject(object.balls[i]);
      }
    }
    if (object.robotsYellow) {
      if (!Array.isArray(object.robotsYellow))
        throw TypeError(".SSL_Micro_DetectionFrame.robotsYellow: array expected");
      message.robotsYellow = [];
      for (var i = 0; i < object.robotsYellow.length; ++i) {
        if (typeof object.robotsYellow[i] !== "object")
          throw TypeError(".SSL_Micro_DetectionFrame.robotsYellow: object expected");
        message.robotsYellow[i] = $root.SSL_Micro_DetectionRobot.fromObject(object.robotsYellow[i]);
      }
    }
    if (object.robotsBlue) {
      if (!Array.isArray(object.robotsBlue))
        throw TypeError(".SSL_Micro_DetectionFrame.robotsBlue: array expected");
      message.robotsBlue = [];
      for (var i = 0; i < object.robotsBlue.length; ++i) {
        if (typeof object.robotsBlue[i] !== "object")
          throw TypeError(".SSL_Micro_DetectionFrame.robotsBlue: object expected");
        message.robotsBlue[i] = $root.SSL_Micro_DetectionRobot.fromObject(object.robotsBlue[i]);
      }
    }
    return message;
  };

  /**
   * Creates a plain object from a SSL_Micro_DetectionFrame message. Also converts values to other types if specified.
   * @function toObject
   * @memberof SSL_Micro_DetectionFrame
   * @static
   * @param {SSL_Micro_DetectionFrame} message SSL_Micro_DetectionFrame
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  SSL_Micro_DetectionFrame.toObject = function toObject(message, options) {
    if (!options)
      options = {};
    var object = {};
    if (options.arrays || options.defaults) {
      object.balls = [];
      object.robotsYellow = [];
      object.robotsBlue = [];
    }
    if (message.balls && message.balls.length) {
      object.balls = [];
      for (var j = 0; j < message.balls.length; ++j)
        object.balls[j] = $root.SSL_Micro_DetectionBall.toObject(message.balls[j], options);
    }
    if (message.robotsYellow && message.robotsYellow.length) {
      object.robotsYellow = [];
      for (var j = 0; j < message.robotsYellow.length; ++j)
        object.robotsYellow[j] = $root.SSL_Micro_DetectionRobot.toObject(message.robotsYellow[j], options);
    }
    if (message.robotsBlue && message.robotsBlue.length) {
      object.robotsBlue = [];
      for (var j = 0; j < message.robotsBlue.length; ++j)
        object.robotsBlue[j] = $root.SSL_Micro_DetectionRobot.toObject(message.robotsBlue[j], options);
    }
    return object;
  };

  /**
   * Converts this SSL_Micro_DetectionFrame to JSON.
   * @function toJSON
   * @memberof SSL_Micro_DetectionFrame
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  SSL_Micro_DetectionFrame.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return SSL_Micro_DetectionFrame;
})();

$root.Micro_Vector2f = (function () {

  /**
   * Properties of a Micro_Vector2f.
   * @exports IMicro_Vector2f
   * @interface IMicro_Vector2f
   * @property {number} x Micro_Vector2f x
   * @property {number} y Micro_Vector2f y
   */

  /**
   * Constructs a new Micro_Vector2f.
   * @exports Micro_Vector2f
   * @classdesc Represents a Micro_Vector2f.
   * @implements IMicro_Vector2f
   * @constructor
   * @param {IMicro_Vector2f=} [properties] Properties to set
   */
  function Micro_Vector2f(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null)
          this[keys[i]] = properties[keys[i]];
  }

  /**
   * Micro_Vector2f x.
   * @member {number} x
   * @memberof Micro_Vector2f
   * @instance
   */
  Micro_Vector2f.prototype.x = 0;

  /**
   * Micro_Vector2f y.
   * @member {number} y
   * @memberof Micro_Vector2f
   * @instance
   */
  Micro_Vector2f.prototype.y = 0;

  /**
   * Creates a new Micro_Vector2f instance using the specified properties.
   * @function create
   * @memberof Micro_Vector2f
   * @static
   * @param {IMicro_Vector2f=} [properties] Properties to set
   * @returns {Micro_Vector2f} Micro_Vector2f instance
   */
  Micro_Vector2f.create = function create(properties) {
    return new Micro_Vector2f(properties);
  };

  /**
   * Encodes the specified Micro_Vector2f message. Does not implicitly {@link Micro_Vector2f.verify|verify} messages.
   * @function encode
   * @memberof Micro_Vector2f
   * @static
   * @param {IMicro_Vector2f} message Micro_Vector2f message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Micro_Vector2f.encode = function encode(message, writer) {
    if (!writer)
      writer = $Writer.create();
    writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
    writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
    return writer;
  };

  /**
   * Encodes the specified Micro_Vector2f message, length delimited. Does not implicitly {@link Micro_Vector2f.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Micro_Vector2f
   * @static
   * @param {IMicro_Vector2f} message Micro_Vector2f message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Micro_Vector2f.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a Micro_Vector2f message from the specified reader or buffer.
   * @function decode
   * @memberof Micro_Vector2f
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Micro_Vector2f} Micro_Vector2f
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Micro_Vector2f.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader))
      reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Micro_Vector2f();
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
   * Decodes a Micro_Vector2f message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Micro_Vector2f
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Micro_Vector2f} Micro_Vector2f
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Micro_Vector2f.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader))
      reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a Micro_Vector2f message.
   * @function verify
   * @memberof Micro_Vector2f
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Micro_Vector2f.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
    if (typeof message.x !== "number")
      return "x: number expected";
    if (typeof message.y !== "number")
      return "y: number expected";
    return null;
  };

  /**
   * Creates a Micro_Vector2f message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Micro_Vector2f
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Micro_Vector2f} Micro_Vector2f
   */
  Micro_Vector2f.fromObject = function fromObject(object) {
    if (object instanceof $root.Micro_Vector2f)
      return object;
    var message = new $root.Micro_Vector2f();
    if (object.x != null)
      message.x = Number(object.x);
    if (object.y != null)
      message.y = Number(object.y);
    return message;
  };

  /**
   * Creates a plain object from a Micro_Vector2f message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Micro_Vector2f
   * @static
   * @param {Micro_Vector2f} message Micro_Vector2f
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Micro_Vector2f.toObject = function toObject(message, options) {
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
   * Converts this Micro_Vector2f to JSON.
   * @function toJSON
   * @memberof Micro_Vector2f
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Micro_Vector2f.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return Micro_Vector2f;
})();

$root.SSL_Micro_FieldLineSegment = (function () {

  /**
   * Properties of a SSL_Micro_FieldLineSegment.
   * @exports ISSL_Micro_FieldLineSegment
   * @interface ISSL_Micro_FieldLineSegment
   * @property {string|null} [name] SSL_Micro_FieldLineSegment name
   * @property {IMicro_Vector2f} p1 SSL_Micro_FieldLineSegment p1
   * @property {IMicro_Vector2f} p2 SSL_Micro_FieldLineSegment p2
   * @property {number|null} [thickness] SSL_Micro_FieldLineSegment thickness
   */

  /**
   * Constructs a new SSL_Micro_FieldLineSegment.
   * @exports SSL_Micro_FieldLineSegment
   * @classdesc Represents a SSL_Micro_FieldLineSegment.
   * @implements ISSL_Micro_FieldLineSegment
   * @constructor
   * @param {ISSL_Micro_FieldLineSegment=} [properties] Properties to set
   */
  function SSL_Micro_FieldLineSegment(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null)
          this[keys[i]] = properties[keys[i]];
  }

  /**
   * SSL_Micro_FieldLineSegment name.
   * @member {string} name
   * @memberof SSL_Micro_FieldLineSegment
   * @instance
   */
  SSL_Micro_FieldLineSegment.prototype.name = "";

  /**
   * SSL_Micro_FieldLineSegment p1.
   * @member {IMicro_Vector2f} p1
   * @memberof SSL_Micro_FieldLineSegment
   * @instance
   */
  SSL_Micro_FieldLineSegment.prototype.p1 = null;

  /**
   * SSL_Micro_FieldLineSegment p2.
   * @member {IMicro_Vector2f} p2
   * @memberof SSL_Micro_FieldLineSegment
   * @instance
   */
  SSL_Micro_FieldLineSegment.prototype.p2 = null;

  /**
   * SSL_Micro_FieldLineSegment thickness.
   * @member {number} thickness
   * @memberof SSL_Micro_FieldLineSegment
   * @instance
   */
  SSL_Micro_FieldLineSegment.prototype.thickness = 0;

  /**
   * Creates a new SSL_Micro_FieldLineSegment instance using the specified properties.
   * @function create
   * @memberof SSL_Micro_FieldLineSegment
   * @static
   * @param {ISSL_Micro_FieldLineSegment=} [properties] Properties to set
   * @returns {SSL_Micro_FieldLineSegment} SSL_Micro_FieldLineSegment instance
   */
  SSL_Micro_FieldLineSegment.create = function create(properties) {
    return new SSL_Micro_FieldLineSegment(properties);
  };

  /**
   * Encodes the specified SSL_Micro_FieldLineSegment message. Does not implicitly {@link SSL_Micro_FieldLineSegment.verify|verify} messages.
   * @function encode
   * @memberof SSL_Micro_FieldLineSegment
   * @static
   * @param {ISSL_Micro_FieldLineSegment} message SSL_Micro_FieldLineSegment message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_Micro_FieldLineSegment.encode = function encode(message, writer) {
    if (!writer)
      writer = $Writer.create();
    if (message.name != null && message.hasOwnProperty("name"))
      writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
    $root.Micro_Vector2f.encode(message.p1, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
    $root.Micro_Vector2f.encode(message.p2, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
    if (message.thickness != null && message.hasOwnProperty("thickness"))
      writer.uint32(/* id 4, wireType 5 =*/37).float(message.thickness);
    return writer;
  };

  /**
   * Encodes the specified SSL_Micro_FieldLineSegment message, length delimited. Does not implicitly {@link SSL_Micro_FieldLineSegment.verify|verify} messages.
   * @function encodeDelimited
   * @memberof SSL_Micro_FieldLineSegment
   * @static
   * @param {ISSL_Micro_FieldLineSegment} message SSL_Micro_FieldLineSegment message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_Micro_FieldLineSegment.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a SSL_Micro_FieldLineSegment message from the specified reader or buffer.
   * @function decode
   * @memberof SSL_Micro_FieldLineSegment
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {SSL_Micro_FieldLineSegment} SSL_Micro_FieldLineSegment
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_Micro_FieldLineSegment.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader))
      reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SSL_Micro_FieldLineSegment();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.p1 = $root.Micro_Vector2f.decode(reader, reader.uint32());
          break;
        case 3:
          message.p2 = $root.Micro_Vector2f.decode(reader, reader.uint32());
          break;
        case 4:
          message.thickness = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("p1"))
      throw $util.ProtocolError("missing required 'p1'", {instance: message});
    if (!message.hasOwnProperty("p2"))
      throw $util.ProtocolError("missing required 'p2'", {instance: message});
    return message;
  };

  /**
   * Decodes a SSL_Micro_FieldLineSegment message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof SSL_Micro_FieldLineSegment
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {SSL_Micro_FieldLineSegment} SSL_Micro_FieldLineSegment
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_Micro_FieldLineSegment.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader))
      reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a SSL_Micro_FieldLineSegment message.
   * @function verify
   * @memberof SSL_Micro_FieldLineSegment
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  SSL_Micro_FieldLineSegment.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
    if (message.name != null && message.hasOwnProperty("name"))
      if (!$util.isString(message.name))
        return "name: string expected";
    {
      var error = $root.Micro_Vector2f.verify(message.p1);
      if (error)
        return "p1." + error;
    }
    {
      var error = $root.Micro_Vector2f.verify(message.p2);
      if (error)
        return "p2." + error;
    }
    if (message.thickness != null && message.hasOwnProperty("thickness"))
      if (typeof message.thickness !== "number")
        return "thickness: number expected";
    return null;
  };

  /**
   * Creates a SSL_Micro_FieldLineSegment message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof SSL_Micro_FieldLineSegment
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {SSL_Micro_FieldLineSegment} SSL_Micro_FieldLineSegment
   */
  SSL_Micro_FieldLineSegment.fromObject = function fromObject(object) {
    if (object instanceof $root.SSL_Micro_FieldLineSegment)
      return object;
    var message = new $root.SSL_Micro_FieldLineSegment();
    if (object.name != null)
      message.name = String(object.name);
    if (object.p1 != null) {
      if (typeof object.p1 !== "object")
        throw TypeError(".SSL_Micro_FieldLineSegment.p1: object expected");
      message.p1 = $root.Micro_Vector2f.fromObject(object.p1);
    }
    if (object.p2 != null) {
      if (typeof object.p2 !== "object")
        throw TypeError(".SSL_Micro_FieldLineSegment.p2: object expected");
      message.p2 = $root.Micro_Vector2f.fromObject(object.p2);
    }
    if (object.thickness != null)
      message.thickness = Number(object.thickness);
    return message;
  };

  /**
   * Creates a plain object from a SSL_Micro_FieldLineSegment message. Also converts values to other types if specified.
   * @function toObject
   * @memberof SSL_Micro_FieldLineSegment
   * @static
   * @param {SSL_Micro_FieldLineSegment} message SSL_Micro_FieldLineSegment
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  SSL_Micro_FieldLineSegment.toObject = function toObject(message, options) {
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
      object.p1 = $root.Micro_Vector2f.toObject(message.p1, options);
    if (message.p2 != null && message.hasOwnProperty("p2"))
      object.p2 = $root.Micro_Vector2f.toObject(message.p2, options);
    if (message.thickness != null && message.hasOwnProperty("thickness"))
      object.thickness = options.json && !isFinite(message.thickness) ? String(message.thickness) : message.thickness;
    return object;
  };

  /**
   * Converts this SSL_Micro_FieldLineSegment to JSON.
   * @function toJSON
   * @memberof SSL_Micro_FieldLineSegment
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  SSL_Micro_FieldLineSegment.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return SSL_Micro_FieldLineSegment;
})();

$root.SSL_Micro_FieldCicularArc = (function () {

  /**
   * Properties of a SSL_Micro_FieldCicularArc.
   * @exports ISSL_Micro_FieldCicularArc
   * @interface ISSL_Micro_FieldCicularArc
   * @property {string|null} [name] SSL_Micro_FieldCicularArc name
   * @property {IMicro_Vector2f} center SSL_Micro_FieldCicularArc center
   * @property {number} radius SSL_Micro_FieldCicularArc radius
   * @property {number|null} [a1] SSL_Micro_FieldCicularArc a1
   * @property {number|null} [a2] SSL_Micro_FieldCicularArc a2
   * @property {number|null} [thickness] SSL_Micro_FieldCicularArc thickness
   */

  /**
   * Constructs a new SSL_Micro_FieldCicularArc.
   * @exports SSL_Micro_FieldCicularArc
   * @classdesc Represents a SSL_Micro_FieldCicularArc.
   * @implements ISSL_Micro_FieldCicularArc
   * @constructor
   * @param {ISSL_Micro_FieldCicularArc=} [properties] Properties to set
   */
  function SSL_Micro_FieldCicularArc(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null)
          this[keys[i]] = properties[keys[i]];
  }

  /**
   * SSL_Micro_FieldCicularArc name.
   * @member {string} name
   * @memberof SSL_Micro_FieldCicularArc
   * @instance
   */
  SSL_Micro_FieldCicularArc.prototype.name = "";

  /**
   * SSL_Micro_FieldCicularArc center.
   * @member {IMicro_Vector2f} center
   * @memberof SSL_Micro_FieldCicularArc
   * @instance
   */
  SSL_Micro_FieldCicularArc.prototype.center = null;

  /**
   * SSL_Micro_FieldCicularArc radius.
   * @member {number} radius
   * @memberof SSL_Micro_FieldCicularArc
   * @instance
   */
  SSL_Micro_FieldCicularArc.prototype.radius = 0;

  /**
   * SSL_Micro_FieldCicularArc a1.
   * @member {number} a1
   * @memberof SSL_Micro_FieldCicularArc
   * @instance
   */
  SSL_Micro_FieldCicularArc.prototype.a1 = 0;

  /**
   * SSL_Micro_FieldCicularArc a2.
   * @member {number} a2
   * @memberof SSL_Micro_FieldCicularArc
   * @instance
   */
  SSL_Micro_FieldCicularArc.prototype.a2 = 0;

  /**
   * SSL_Micro_FieldCicularArc thickness.
   * @member {number} thickness
   * @memberof SSL_Micro_FieldCicularArc
   * @instance
   */
  SSL_Micro_FieldCicularArc.prototype.thickness = 0;

  /**
   * Creates a new SSL_Micro_FieldCicularArc instance using the specified properties.
   * @function create
   * @memberof SSL_Micro_FieldCicularArc
   * @static
   * @param {ISSL_Micro_FieldCicularArc=} [properties] Properties to set
   * @returns {SSL_Micro_FieldCicularArc} SSL_Micro_FieldCicularArc instance
   */
  SSL_Micro_FieldCicularArc.create = function create(properties) {
    return new SSL_Micro_FieldCicularArc(properties);
  };

  /**
   * Encodes the specified SSL_Micro_FieldCicularArc message. Does not implicitly {@link SSL_Micro_FieldCicularArc.verify|verify} messages.
   * @function encode
   * @memberof SSL_Micro_FieldCicularArc
   * @static
   * @param {ISSL_Micro_FieldCicularArc} message SSL_Micro_FieldCicularArc message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_Micro_FieldCicularArc.encode = function encode(message, writer) {
    if (!writer)
      writer = $Writer.create();
    if (message.name != null && message.hasOwnProperty("name"))
      writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
    $root.Micro_Vector2f.encode(message.center, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
    writer.uint32(/* id 3, wireType 5 =*/29).float(message.radius);
    if (message.a1 != null && message.hasOwnProperty("a1"))
      writer.uint32(/* id 4, wireType 5 =*/37).float(message.a1);
    if (message.a2 != null && message.hasOwnProperty("a2"))
      writer.uint32(/* id 5, wireType 5 =*/45).float(message.a2);
    if (message.thickness != null && message.hasOwnProperty("thickness"))
      writer.uint32(/* id 6, wireType 5 =*/53).float(message.thickness);
    return writer;
  };

  /**
   * Encodes the specified SSL_Micro_FieldCicularArc message, length delimited. Does not implicitly {@link SSL_Micro_FieldCicularArc.verify|verify} messages.
   * @function encodeDelimited
   * @memberof SSL_Micro_FieldCicularArc
   * @static
   * @param {ISSL_Micro_FieldCicularArc} message SSL_Micro_FieldCicularArc message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_Micro_FieldCicularArc.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a SSL_Micro_FieldCicularArc message from the specified reader or buffer.
   * @function decode
   * @memberof SSL_Micro_FieldCicularArc
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {SSL_Micro_FieldCicularArc} SSL_Micro_FieldCicularArc
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_Micro_FieldCicularArc.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader))
      reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SSL_Micro_FieldCicularArc();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.center = $root.Micro_Vector2f.decode(reader, reader.uint32());
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
    if (!message.hasOwnProperty("center"))
      throw $util.ProtocolError("missing required 'center'", {instance: message});
    if (!message.hasOwnProperty("radius"))
      throw $util.ProtocolError("missing required 'radius'", {instance: message});
    return message;
  };

  /**
   * Decodes a SSL_Micro_FieldCicularArc message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof SSL_Micro_FieldCicularArc
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {SSL_Micro_FieldCicularArc} SSL_Micro_FieldCicularArc
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_Micro_FieldCicularArc.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader))
      reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a SSL_Micro_FieldCicularArc message.
   * @function verify
   * @memberof SSL_Micro_FieldCicularArc
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  SSL_Micro_FieldCicularArc.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
    if (message.name != null && message.hasOwnProperty("name"))
      if (!$util.isString(message.name))
        return "name: string expected";
    {
      var error = $root.Micro_Vector2f.verify(message.center);
      if (error)
        return "center." + error;
    }
    if (typeof message.radius !== "number")
      return "radius: number expected";
    if (message.a1 != null && message.hasOwnProperty("a1"))
      if (typeof message.a1 !== "number")
        return "a1: number expected";
    if (message.a2 != null && message.hasOwnProperty("a2"))
      if (typeof message.a2 !== "number")
        return "a2: number expected";
    if (message.thickness != null && message.hasOwnProperty("thickness"))
      if (typeof message.thickness !== "number")
        return "thickness: number expected";
    return null;
  };

  /**
   * Creates a SSL_Micro_FieldCicularArc message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof SSL_Micro_FieldCicularArc
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {SSL_Micro_FieldCicularArc} SSL_Micro_FieldCicularArc
   */
  SSL_Micro_FieldCicularArc.fromObject = function fromObject(object) {
    if (object instanceof $root.SSL_Micro_FieldCicularArc)
      return object;
    var message = new $root.SSL_Micro_FieldCicularArc();
    if (object.name != null)
      message.name = String(object.name);
    if (object.center != null) {
      if (typeof object.center !== "object")
        throw TypeError(".SSL_Micro_FieldCicularArc.center: object expected");
      message.center = $root.Micro_Vector2f.fromObject(object.center);
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
   * Creates a plain object from a SSL_Micro_FieldCicularArc message. Also converts values to other types if specified.
   * @function toObject
   * @memberof SSL_Micro_FieldCicularArc
   * @static
   * @param {SSL_Micro_FieldCicularArc} message SSL_Micro_FieldCicularArc
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  SSL_Micro_FieldCicularArc.toObject = function toObject(message, options) {
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
      object.center = $root.Micro_Vector2f.toObject(message.center, options);
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
   * Converts this SSL_Micro_FieldCicularArc to JSON.
   * @function toJSON
   * @memberof SSL_Micro_FieldCicularArc
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  SSL_Micro_FieldCicularArc.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return SSL_Micro_FieldCicularArc;
})();

$root.SSL_Micro_GeometryFieldSize = (function () {

  /**
   * Properties of a SSL_Micro_GeometryFieldSize.
   * @exports ISSL_Micro_GeometryFieldSize
   * @interface ISSL_Micro_GeometryFieldSize
   * @property {number|null} [fieldLength] SSL_Micro_GeometryFieldSize fieldLength
   * @property {number|null} [fieldWidth] SSL_Micro_GeometryFieldSize fieldWidth
   * @property {number|null} [goalWidth] SSL_Micro_GeometryFieldSize goalWidth
   * @property {number|null} [goalDepth] SSL_Micro_GeometryFieldSize goalDepth
   * @property {number|null} [boundaryWidth] SSL_Micro_GeometryFieldSize boundaryWidth
   * @property {Array.<ISSL_Micro_FieldLineSegment>|null} [fieldLines] SSL_Micro_GeometryFieldSize fieldLines
   * @property {Array.<ISSL_Micro_FieldCicularArc>|null} [fieldArcs] SSL_Micro_GeometryFieldSize fieldArcs
   */

  /**
   * Constructs a new SSL_Micro_GeometryFieldSize.
   * @exports SSL_Micro_GeometryFieldSize
   * @classdesc Represents a SSL_Micro_GeometryFieldSize.
   * @implements ISSL_Micro_GeometryFieldSize
   * @constructor
   * @param {ISSL_Micro_GeometryFieldSize=} [properties] Properties to set
   */
  function SSL_Micro_GeometryFieldSize(properties) {
    this.fieldLines = [];
    this.fieldArcs = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null)
          this[keys[i]] = properties[keys[i]];
  }

  /**
   * SSL_Micro_GeometryFieldSize fieldLength.
   * @member {number} fieldLength
   * @memberof SSL_Micro_GeometryFieldSize
   * @instance
   */
  SSL_Micro_GeometryFieldSize.prototype.fieldLength = 0;

  /**
   * SSL_Micro_GeometryFieldSize fieldWidth.
   * @member {number} fieldWidth
   * @memberof SSL_Micro_GeometryFieldSize
   * @instance
   */
  SSL_Micro_GeometryFieldSize.prototype.fieldWidth = 0;

  /**
   * SSL_Micro_GeometryFieldSize goalWidth.
   * @member {number} goalWidth
   * @memberof SSL_Micro_GeometryFieldSize
   * @instance
   */
  SSL_Micro_GeometryFieldSize.prototype.goalWidth = 0;

  /**
   * SSL_Micro_GeometryFieldSize goalDepth.
   * @member {number} goalDepth
   * @memberof SSL_Micro_GeometryFieldSize
   * @instance
   */
  SSL_Micro_GeometryFieldSize.prototype.goalDepth = 0;

  /**
   * SSL_Micro_GeometryFieldSize boundaryWidth.
   * @member {number} boundaryWidth
   * @memberof SSL_Micro_GeometryFieldSize
   * @instance
   */
  SSL_Micro_GeometryFieldSize.prototype.boundaryWidth = 0;

  /**
   * SSL_Micro_GeometryFieldSize fieldLines.
   * @member {Array.<ISSL_Micro_FieldLineSegment>} fieldLines
   * @memberof SSL_Micro_GeometryFieldSize
   * @instance
   */
  SSL_Micro_GeometryFieldSize.prototype.fieldLines = $util.emptyArray;

  /**
   * SSL_Micro_GeometryFieldSize fieldArcs.
   * @member {Array.<ISSL_Micro_FieldCicularArc>} fieldArcs
   * @memberof SSL_Micro_GeometryFieldSize
   * @instance
   */
  SSL_Micro_GeometryFieldSize.prototype.fieldArcs = $util.emptyArray;

  /**
   * Creates a new SSL_Micro_GeometryFieldSize instance using the specified properties.
   * @function create
   * @memberof SSL_Micro_GeometryFieldSize
   * @static
   * @param {ISSL_Micro_GeometryFieldSize=} [properties] Properties to set
   * @returns {SSL_Micro_GeometryFieldSize} SSL_Micro_GeometryFieldSize instance
   */
  SSL_Micro_GeometryFieldSize.create = function create(properties) {
    return new SSL_Micro_GeometryFieldSize(properties);
  };

  /**
   * Encodes the specified SSL_Micro_GeometryFieldSize message. Does not implicitly {@link SSL_Micro_GeometryFieldSize.verify|verify} messages.
   * @function encode
   * @memberof SSL_Micro_GeometryFieldSize
   * @static
   * @param {ISSL_Micro_GeometryFieldSize} message SSL_Micro_GeometryFieldSize message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_Micro_GeometryFieldSize.encode = function encode(message, writer) {
    if (!writer)
      writer = $Writer.create();
    if (message.fieldLength != null && message.hasOwnProperty("fieldLength"))
      writer.uint32(/* id 1, wireType 0 =*/8).int32(message.fieldLength);
    if (message.fieldWidth != null && message.hasOwnProperty("fieldWidth"))
      writer.uint32(/* id 2, wireType 0 =*/16).int32(message.fieldWidth);
    if (message.goalWidth != null && message.hasOwnProperty("goalWidth"))
      writer.uint32(/* id 3, wireType 0 =*/24).int32(message.goalWidth);
    if (message.goalDepth != null && message.hasOwnProperty("goalDepth"))
      writer.uint32(/* id 4, wireType 0 =*/32).int32(message.goalDepth);
    if (message.boundaryWidth != null && message.hasOwnProperty("boundaryWidth"))
      writer.uint32(/* id 5, wireType 0 =*/40).int32(message.boundaryWidth);
    if (message.fieldLines != null && message.fieldLines.length)
      for (var i = 0; i < message.fieldLines.length; ++i)
        $root.SSL_Micro_FieldLineSegment.encode(message.fieldLines[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
    if (message.fieldArcs != null && message.fieldArcs.length)
      for (var i = 0; i < message.fieldArcs.length; ++i)
        $root.SSL_Micro_FieldCicularArc.encode(message.fieldArcs[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
    return writer;
  };

  /**
   * Encodes the specified SSL_Micro_GeometryFieldSize message, length delimited. Does not implicitly {@link SSL_Micro_GeometryFieldSize.verify|verify} messages.
   * @function encodeDelimited
   * @memberof SSL_Micro_GeometryFieldSize
   * @static
   * @param {ISSL_Micro_GeometryFieldSize} message SSL_Micro_GeometryFieldSize message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_Micro_GeometryFieldSize.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a SSL_Micro_GeometryFieldSize message from the specified reader or buffer.
   * @function decode
   * @memberof SSL_Micro_GeometryFieldSize
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {SSL_Micro_GeometryFieldSize} SSL_Micro_GeometryFieldSize
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_Micro_GeometryFieldSize.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader))
      reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.SSL_Micro_GeometryFieldSize();
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
          message.fieldLines.push($root.SSL_Micro_FieldLineSegment.decode(reader, reader.uint32()));
          break;
        case 7:
          if (!(message.fieldArcs && message.fieldArcs.length))
            message.fieldArcs = [];
          message.fieldArcs.push($root.SSL_Micro_FieldCicularArc.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a SSL_Micro_GeometryFieldSize message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof SSL_Micro_GeometryFieldSize
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {SSL_Micro_GeometryFieldSize} SSL_Micro_GeometryFieldSize
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_Micro_GeometryFieldSize.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader))
      reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a SSL_Micro_GeometryFieldSize message.
   * @function verify
   * @memberof SSL_Micro_GeometryFieldSize
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  SSL_Micro_GeometryFieldSize.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
    if (message.fieldLength != null && message.hasOwnProperty("fieldLength"))
      if (!$util.isInteger(message.fieldLength))
        return "fieldLength: integer expected";
    if (message.fieldWidth != null && message.hasOwnProperty("fieldWidth"))
      if (!$util.isInteger(message.fieldWidth))
        return "fieldWidth: integer expected";
    if (message.goalWidth != null && message.hasOwnProperty("goalWidth"))
      if (!$util.isInteger(message.goalWidth))
        return "goalWidth: integer expected";
    if (message.goalDepth != null && message.hasOwnProperty("goalDepth"))
      if (!$util.isInteger(message.goalDepth))
        return "goalDepth: integer expected";
    if (message.boundaryWidth != null && message.hasOwnProperty("boundaryWidth"))
      if (!$util.isInteger(message.boundaryWidth))
        return "boundaryWidth: integer expected";
    if (message.fieldLines != null && message.hasOwnProperty("fieldLines")) {
      if (!Array.isArray(message.fieldLines))
        return "fieldLines: array expected";
      for (var i = 0; i < message.fieldLines.length; ++i) {
        var error = $root.SSL_Micro_FieldLineSegment.verify(message.fieldLines[i]);
        if (error)
          return "fieldLines." + error;
      }
    }
    if (message.fieldArcs != null && message.hasOwnProperty("fieldArcs")) {
      if (!Array.isArray(message.fieldArcs))
        return "fieldArcs: array expected";
      for (var i = 0; i < message.fieldArcs.length; ++i) {
        var error = $root.SSL_Micro_FieldCicularArc.verify(message.fieldArcs[i]);
        if (error)
          return "fieldArcs." + error;
      }
    }
    return null;
  };

  /**
   * Creates a SSL_Micro_GeometryFieldSize message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof SSL_Micro_GeometryFieldSize
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {SSL_Micro_GeometryFieldSize} SSL_Micro_GeometryFieldSize
   */
  SSL_Micro_GeometryFieldSize.fromObject = function fromObject(object) {
    if (object instanceof $root.SSL_Micro_GeometryFieldSize)
      return object;
    var message = new $root.SSL_Micro_GeometryFieldSize();
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
        throw TypeError(".SSL_Micro_GeometryFieldSize.fieldLines: array expected");
      message.fieldLines = [];
      for (var i = 0; i < object.fieldLines.length; ++i) {
        if (typeof object.fieldLines[i] !== "object")
          throw TypeError(".SSL_Micro_GeometryFieldSize.fieldLines: object expected");
        message.fieldLines[i] = $root.SSL_Micro_FieldLineSegment.fromObject(object.fieldLines[i]);
      }
    }
    if (object.fieldArcs) {
      if (!Array.isArray(object.fieldArcs))
        throw TypeError(".SSL_Micro_GeometryFieldSize.fieldArcs: array expected");
      message.fieldArcs = [];
      for (var i = 0; i < object.fieldArcs.length; ++i) {
        if (typeof object.fieldArcs[i] !== "object")
          throw TypeError(".SSL_Micro_GeometryFieldSize.fieldArcs: object expected");
        message.fieldArcs[i] = $root.SSL_Micro_FieldCicularArc.fromObject(object.fieldArcs[i]);
      }
    }
    return message;
  };

  /**
   * Creates a plain object from a SSL_Micro_GeometryFieldSize message. Also converts values to other types if specified.
   * @function toObject
   * @memberof SSL_Micro_GeometryFieldSize
   * @static
   * @param {SSL_Micro_GeometryFieldSize} message SSL_Micro_GeometryFieldSize
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  SSL_Micro_GeometryFieldSize.toObject = function toObject(message, options) {
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
        object.fieldLines[j] = $root.SSL_Micro_FieldLineSegment.toObject(message.fieldLines[j], options);
    }
    if (message.fieldArcs && message.fieldArcs.length) {
      object.fieldArcs = [];
      for (var j = 0; j < message.fieldArcs.length; ++j)
        object.fieldArcs[j] = $root.SSL_Micro_FieldCicularArc.toObject(message.fieldArcs[j], options);
    }
    return object;
  };

  /**
   * Converts this SSL_Micro_GeometryFieldSize to JSON.
   * @function toJSON
   * @memberof SSL_Micro_GeometryFieldSize
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  SSL_Micro_GeometryFieldSize.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return SSL_Micro_GeometryFieldSize;
})();

$root.SSL_Micro_GeometryCameraCalibration = (function () {

  /**
   * Properties of a SSL_Micro_GeometryCameraCalibration.
   * @exports ISSL_Micro_GeometryCameraCalibration
   * @interface ISSL_Micro_GeometryCameraCalibration
   * @property {number} cameraId SSL_Micro_GeometryCameraCalibration cameraId
   * @property {number|null} [focalLength] SSL_Micro_GeometryCameraCalibration focalLength
   * @property {number|null} [principalPointX] SSL_Micro_GeometryCameraCalibration principalPointX
   * @property {number|null} [principalPointY] SSL_Micro_GeometryCameraCalibration principalPointY
   * @property {number|null} [distortion] SSL_Micro_GeometryCameraCalibration distortion
   * @property {number|null} [q0] SSL_Micro_GeometryCameraCalibration q0
   * @property {number|null} [q1] SSL_Micro_GeometryCameraCalibration q1
   * @property {number|null} [q2] SSL_Micro_GeometryCameraCalibration q2
   * @property {number|null} [q3] SSL_Micro_GeometryCameraCalibration q3
   * @property {number|null} [tx] SSL_Micro_GeometryCameraCalibration tx
   * @property {number|null} [ty] SSL_Micro_GeometryCameraCalibration ty
   * @property {number|null} [tz] SSL_Micro_GeometryCameraCalibration tz
   * @property {number|null} [derivedCameraWorldTx] SSL_Micro_GeometryCameraCalibration derivedCameraWorldTx
   * @property {number|null} [derivedCameraWorldTy] SSL_Micro_GeometryCameraCalibration derivedCameraWorldTy
   * @property {number|null} [derivedCameraWorldTz] SSL_Micro_GeometryCameraCalibration derivedCameraWorldTz
   */

  /**
   * Constructs a new SSL_Micro_GeometryCameraCalibration.
   * @exports SSL_Micro_GeometryCameraCalibration
   * @classdesc Represents a SSL_Micro_GeometryCameraCalibration.
   * @implements ISSL_Micro_GeometryCameraCalibration
   * @constructor
   * @param {ISSL_Micro_GeometryCameraCalibration=} [properties] Properties to set
   */
  function SSL_Micro_GeometryCameraCalibration(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null)
          this[keys[i]] = properties[keys[i]];
  }

  /**
   * SSL_Micro_GeometryCameraCalibration cameraId.
   * @member {number} cameraId
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @instance
   */
  SSL_Micro_GeometryCameraCalibration.prototype.cameraId = 0;

  /**
   * SSL_Micro_GeometryCameraCalibration focalLength.
   * @member {number} focalLength
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @instance
   */
  SSL_Micro_GeometryCameraCalibration.prototype.focalLength = 0;

  /**
   * SSL_Micro_GeometryCameraCalibration principalPointX.
   * @member {number} principalPointX
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @instance
   */
  SSL_Micro_GeometryCameraCalibration.prototype.principalPointX = 0;

  /**
   * SSL_Micro_GeometryCameraCalibration principalPointY.
   * @member {number} principalPointY
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @instance
   */
  SSL_Micro_GeometryCameraCalibration.prototype.principalPointY = 0;

  /**
   * SSL_Micro_GeometryCameraCalibration distortion.
   * @member {number} distortion
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @instance
   */
  SSL_Micro_GeometryCameraCalibration.prototype.distortion = 0;

  /**
   * SSL_Micro_GeometryCameraCalibration q0.
   * @member {number} q0
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @instance
   */
  SSL_Micro_GeometryCameraCalibration.prototype.q0 = 0;

  /**
   * SSL_Micro_GeometryCameraCalibration q1.
   * @member {number} q1
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @instance
   */
  SSL_Micro_GeometryCameraCalibration.prototype.q1 = 0;

  /**
   * SSL_Micro_GeometryCameraCalibration q2.
   * @member {number} q2
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @instance
   */
  SSL_Micro_GeometryCameraCalibration.prototype.q2 = 0;

  /**
   * SSL_Micro_GeometryCameraCalibration q3.
   * @member {number} q3
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @instance
   */
  SSL_Micro_GeometryCameraCalibration.prototype.q3 = 0;

  /**
   * SSL_Micro_GeometryCameraCalibration tx.
   * @member {number} tx
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @instance
   */
  SSL_Micro_GeometryCameraCalibration.prototype.tx = 0;

  /**
   * SSL_Micro_GeometryCameraCalibration ty.
   * @member {number} ty
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @instance
   */
  SSL_Micro_GeometryCameraCalibration.prototype.ty = 0;

  /**
   * SSL_Micro_GeometryCameraCalibration tz.
   * @member {number} tz
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @instance
   */
  SSL_Micro_GeometryCameraCalibration.prototype.tz = 0;

  /**
   * SSL_Micro_GeometryCameraCalibration derivedCameraWorldTx.
   * @member {number} derivedCameraWorldTx
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @instance
   */
  SSL_Micro_GeometryCameraCalibration.prototype.derivedCameraWorldTx = 0;

  /**
   * SSL_Micro_GeometryCameraCalibration derivedCameraWorldTy.
   * @member {number} derivedCameraWorldTy
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @instance
   */
  SSL_Micro_GeometryCameraCalibration.prototype.derivedCameraWorldTy = 0;

  /**
   * SSL_Micro_GeometryCameraCalibration derivedCameraWorldTz.
   * @member {number} derivedCameraWorldTz
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @instance
   */
  SSL_Micro_GeometryCameraCalibration.prototype.derivedCameraWorldTz = 0;

  /**
   * Creates a new SSL_Micro_GeometryCameraCalibration instance using the specified properties.
   * @function create
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @static
   * @param {ISSL_Micro_GeometryCameraCalibration=} [properties] Properties to set
   * @returns {SSL_Micro_GeometryCameraCalibration} SSL_Micro_GeometryCameraCalibration instance
   */
  SSL_Micro_GeometryCameraCalibration.create = function create(properties) {
    return new SSL_Micro_GeometryCameraCalibration(properties);
  };

  /**
   * Encodes the specified SSL_Micro_GeometryCameraCalibration message. Does not implicitly {@link SSL_Micro_GeometryCameraCalibration.verify|verify} messages.
   * @function encode
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @static
   * @param {ISSL_Micro_GeometryCameraCalibration} message SSL_Micro_GeometryCameraCalibration message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_Micro_GeometryCameraCalibration.encode = function encode(message, writer) {
    if (!writer)
      writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.cameraId);
    if (message.focalLength != null && message.hasOwnProperty("focalLength"))
      writer.uint32(/* id 2, wireType 5 =*/21).float(message.focalLength);
    if (message.principalPointX != null && message.hasOwnProperty("principalPointX"))
      writer.uint32(/* id 3, wireType 5 =*/29).float(message.principalPointX);
    if (message.principalPointY != null && message.hasOwnProperty("principalPointY"))
      writer.uint32(/* id 4, wireType 5 =*/37).float(message.principalPointY);
    if (message.distortion != null && message.hasOwnProperty("distortion"))
      writer.uint32(/* id 5, wireType 5 =*/45).float(message.distortion);
    if (message.q0 != null && message.hasOwnProperty("q0"))
      writer.uint32(/* id 6, wireType 5 =*/53).float(message.q0);
    if (message.q1 != null && message.hasOwnProperty("q1"))
      writer.uint32(/* id 7, wireType 5 =*/61).float(message.q1);
    if (message.q2 != null && message.hasOwnProperty("q2"))
      writer.uint32(/* id 8, wireType 5 =*/69).float(message.q2);
    if (message.q3 != null && message.hasOwnProperty("q3"))
      writer.uint32(/* id 9, wireType 5 =*/77).float(message.q3);
    if (message.tx != null && message.hasOwnProperty("tx"))
      writer.uint32(/* id 10, wireType 5 =*/85).float(message.tx);
    if (message.ty != null && message.hasOwnProperty("ty"))
      writer.uint32(/* id 11, wireType 5 =*/93).float(message.ty);
    if (message.tz != null && message.hasOwnProperty("tz"))
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
   * Encodes the specified SSL_Micro_GeometryCameraCalibration message, length delimited. Does not implicitly {@link SSL_Micro_GeometryCameraCalibration.verify|verify} messages.
   * @function encodeDelimited
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @static
   * @param {ISSL_Micro_GeometryCameraCalibration} message SSL_Micro_GeometryCameraCalibration message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_Micro_GeometryCameraCalibration.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a SSL_Micro_GeometryCameraCalibration message from the specified reader or buffer.
   * @function decode
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {SSL_Micro_GeometryCameraCalibration} SSL_Micro_GeometryCameraCalibration
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_Micro_GeometryCameraCalibration.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader))
      reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.SSL_Micro_GeometryCameraCalibration();
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
    return message;
  };

  /**
   * Decodes a SSL_Micro_GeometryCameraCalibration message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {SSL_Micro_GeometryCameraCalibration} SSL_Micro_GeometryCameraCalibration
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_Micro_GeometryCameraCalibration.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader))
      reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a SSL_Micro_GeometryCameraCalibration message.
   * @function verify
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  SSL_Micro_GeometryCameraCalibration.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
    if (!$util.isInteger(message.cameraId))
      return "cameraId: integer expected";
    if (message.focalLength != null && message.hasOwnProperty("focalLength"))
      if (typeof message.focalLength !== "number")
        return "focalLength: number expected";
    if (message.principalPointX != null && message.hasOwnProperty("principalPointX"))
      if (typeof message.principalPointX !== "number")
        return "principalPointX: number expected";
    if (message.principalPointY != null && message.hasOwnProperty("principalPointY"))
      if (typeof message.principalPointY !== "number")
        return "principalPointY: number expected";
    if (message.distortion != null && message.hasOwnProperty("distortion"))
      if (typeof message.distortion !== "number")
        return "distortion: number expected";
    if (message.q0 != null && message.hasOwnProperty("q0"))
      if (typeof message.q0 !== "number")
        return "q0: number expected";
    if (message.q1 != null && message.hasOwnProperty("q1"))
      if (typeof message.q1 !== "number")
        return "q1: number expected";
    if (message.q2 != null && message.hasOwnProperty("q2"))
      if (typeof message.q2 !== "number")
        return "q2: number expected";
    if (message.q3 != null && message.hasOwnProperty("q3"))
      if (typeof message.q3 !== "number")
        return "q3: number expected";
    if (message.tx != null && message.hasOwnProperty("tx"))
      if (typeof message.tx !== "number")
        return "tx: number expected";
    if (message.ty != null && message.hasOwnProperty("ty"))
      if (typeof message.ty !== "number")
        return "ty: number expected";
    if (message.tz != null && message.hasOwnProperty("tz"))
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
   * Creates a SSL_Micro_GeometryCameraCalibration message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {SSL_Micro_GeometryCameraCalibration} SSL_Micro_GeometryCameraCalibration
   */
  SSL_Micro_GeometryCameraCalibration.fromObject = function fromObject(object) {
    if (object instanceof $root.SSL_Micro_GeometryCameraCalibration)
      return object;
    var message = new $root.SSL_Micro_GeometryCameraCalibration();
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
   * Creates a plain object from a SSL_Micro_GeometryCameraCalibration message. Also converts values to other types if specified.
   * @function toObject
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @static
   * @param {SSL_Micro_GeometryCameraCalibration} message SSL_Micro_GeometryCameraCalibration
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  SSL_Micro_GeometryCameraCalibration.toObject = function toObject(message, options) {
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
   * Converts this SSL_Micro_GeometryCameraCalibration to JSON.
   * @function toJSON
   * @memberof SSL_Micro_GeometryCameraCalibration
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  SSL_Micro_GeometryCameraCalibration.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return SSL_Micro_GeometryCameraCalibration;
})();

$root.SSL_Micro_GeometryData = (function () {

  /**
   * Properties of a SSL_Micro_GeometryData.
   * @exports ISSL_Micro_GeometryData
   * @interface ISSL_Micro_GeometryData
   * @property {ISSL_Micro_GeometryFieldSize} field SSL_Micro_GeometryData field
   * @property {Array.<ISSL_Micro_GeometryCameraCalibration>|null} [calib] SSL_Micro_GeometryData calib
   */

  /**
   * Constructs a new SSL_Micro_GeometryData.
   * @exports SSL_Micro_GeometryData
   * @classdesc Represents a SSL_Micro_GeometryData.
   * @implements ISSL_Micro_GeometryData
   * @constructor
   * @param {ISSL_Micro_GeometryData=} [properties] Properties to set
   */
  function SSL_Micro_GeometryData(properties) {
    this.calib = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null)
          this[keys[i]] = properties[keys[i]];
  }

  /**
   * SSL_Micro_GeometryData field.
   * @member {ISSL_Micro_GeometryFieldSize} field
   * @memberof SSL_Micro_GeometryData
   * @instance
   */
  SSL_Micro_GeometryData.prototype.field = null;

  /**
   * SSL_Micro_GeometryData calib.
   * @member {Array.<ISSL_Micro_GeometryCameraCalibration>} calib
   * @memberof SSL_Micro_GeometryData
   * @instance
   */
  SSL_Micro_GeometryData.prototype.calib = $util.emptyArray;

  /**
   * Creates a new SSL_Micro_GeometryData instance using the specified properties.
   * @function create
   * @memberof SSL_Micro_GeometryData
   * @static
   * @param {ISSL_Micro_GeometryData=} [properties] Properties to set
   * @returns {SSL_Micro_GeometryData} SSL_Micro_GeometryData instance
   */
  SSL_Micro_GeometryData.create = function create(properties) {
    return new SSL_Micro_GeometryData(properties);
  };

  /**
   * Encodes the specified SSL_Micro_GeometryData message. Does not implicitly {@link SSL_Micro_GeometryData.verify|verify} messages.
   * @function encode
   * @memberof SSL_Micro_GeometryData
   * @static
   * @param {ISSL_Micro_GeometryData} message SSL_Micro_GeometryData message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_Micro_GeometryData.encode = function encode(message, writer) {
    if (!writer)
      writer = $Writer.create();
    $root.SSL_Micro_GeometryFieldSize.encode(message.field, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
    if (message.calib != null && message.calib.length)
      for (var i = 0; i < message.calib.length; ++i)
        $root.SSL_Micro_GeometryCameraCalibration.encode(message.calib[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
    return writer;
  };

  /**
   * Encodes the specified SSL_Micro_GeometryData message, length delimited. Does not implicitly {@link SSL_Micro_GeometryData.verify|verify} messages.
   * @function encodeDelimited
   * @memberof SSL_Micro_GeometryData
   * @static
   * @param {ISSL_Micro_GeometryData} message SSL_Micro_GeometryData message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_Micro_GeometryData.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a SSL_Micro_GeometryData message from the specified reader or buffer.
   * @function decode
   * @memberof SSL_Micro_GeometryData
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {SSL_Micro_GeometryData} SSL_Micro_GeometryData
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_Micro_GeometryData.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader))
      reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SSL_Micro_GeometryData();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.field = $root.SSL_Micro_GeometryFieldSize.decode(reader, reader.uint32());
          break;
        case 2:
          if (!(message.calib && message.calib.length))
            message.calib = [];
          message.calib.push($root.SSL_Micro_GeometryCameraCalibration.decode(reader, reader.uint32()));
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
   * Decodes a SSL_Micro_GeometryData message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof SSL_Micro_GeometryData
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {SSL_Micro_GeometryData} SSL_Micro_GeometryData
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_Micro_GeometryData.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader))
      reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a SSL_Micro_GeometryData message.
   * @function verify
   * @memberof SSL_Micro_GeometryData
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  SSL_Micro_GeometryData.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
    {
      var error = $root.SSL_Micro_GeometryFieldSize.verify(message.field);
      if (error)
        return "field." + error;
    }
    if (message.calib != null && message.hasOwnProperty("calib")) {
      if (!Array.isArray(message.calib))
        return "calib: array expected";
      for (var i = 0; i < message.calib.length; ++i) {
        var error = $root.SSL_Micro_GeometryCameraCalibration.verify(message.calib[i]);
        if (error)
          return "calib." + error;
      }
    }
    return null;
  };

  /**
   * Creates a SSL_Micro_GeometryData message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof SSL_Micro_GeometryData
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {SSL_Micro_GeometryData} SSL_Micro_GeometryData
   */
  SSL_Micro_GeometryData.fromObject = function fromObject(object) {
    if (object instanceof $root.SSL_Micro_GeometryData)
      return object;
    var message = new $root.SSL_Micro_GeometryData();
    if (object.field != null) {
      if (typeof object.field !== "object")
        throw TypeError(".SSL_Micro_GeometryData.field: object expected");
      message.field = $root.SSL_Micro_GeometryFieldSize.fromObject(object.field);
    }
    if (object.calib) {
      if (!Array.isArray(object.calib))
        throw TypeError(".SSL_Micro_GeometryData.calib: array expected");
      message.calib = [];
      for (var i = 0; i < object.calib.length; ++i) {
        if (typeof object.calib[i] !== "object")
          throw TypeError(".SSL_Micro_GeometryData.calib: object expected");
        message.calib[i] = $root.SSL_Micro_GeometryCameraCalibration.fromObject(object.calib[i]);
      }
    }
    return message;
  };

  /**
   * Creates a plain object from a SSL_Micro_GeometryData message. Also converts values to other types if specified.
   * @function toObject
   * @memberof SSL_Micro_GeometryData
   * @static
   * @param {SSL_Micro_GeometryData} message SSL_Micro_GeometryData
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  SSL_Micro_GeometryData.toObject = function toObject(message, options) {
    if (!options)
      options = {};
    var object = {};
    if (options.arrays || options.defaults)
      object.calib = [];
    if (options.defaults)
      object.field = null;
    if (message.field != null && message.hasOwnProperty("field"))
      object.field = $root.SSL_Micro_GeometryFieldSize.toObject(message.field, options);
    if (message.calib && message.calib.length) {
      object.calib = [];
      for (var j = 0; j < message.calib.length; ++j)
        object.calib[j] = $root.SSL_Micro_GeometryCameraCalibration.toObject(message.calib[j], options);
    }
    return object;
  };

  /**
   * Converts this SSL_Micro_GeometryData to JSON.
   * @function toJSON
   * @memberof SSL_Micro_GeometryData
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  SSL_Micro_GeometryData.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return SSL_Micro_GeometryData;
})();

$root.SSL_Micro_WrapperPacket = (function () {

  /**
   * Properties of a SSL_Micro_WrapperPacket.
   * @exports ISSL_Micro_WrapperPacket
   * @interface ISSL_Micro_WrapperPacket
   * @property {ISSL_Micro_DetectionFrame|null} [detection] SSL_Micro_WrapperPacket detection
   * @property {ISSL_Micro_GeometryData|null} [geometry] SSL_Micro_WrapperPacket geometry
   */

  /**
   * Constructs a new SSL_Micro_WrapperPacket.
   * @exports SSL_Micro_WrapperPacket
   * @classdesc Represents a SSL_Micro_WrapperPacket.
   * @implements ISSL_Micro_WrapperPacket
   * @constructor
   * @param {ISSL_Micro_WrapperPacket=} [properties] Properties to set
   */
  function SSL_Micro_WrapperPacket(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null)
          this[keys[i]] = properties[keys[i]];
  }

  /**
   * SSL_Micro_WrapperPacket detection.
   * @member {ISSL_Micro_DetectionFrame|null|undefined} detection
   * @memberof SSL_Micro_WrapperPacket
   * @instance
   */
  SSL_Micro_WrapperPacket.prototype.detection = null;

  /**
   * SSL_Micro_WrapperPacket geometry.
   * @member {ISSL_Micro_GeometryData|null|undefined} geometry
   * @memberof SSL_Micro_WrapperPacket
   * @instance
   */
  SSL_Micro_WrapperPacket.prototype.geometry = null;

  /**
   * Creates a new SSL_Micro_WrapperPacket instance using the specified properties.
   * @function create
   * @memberof SSL_Micro_WrapperPacket
   * @static
   * @param {ISSL_Micro_WrapperPacket=} [properties] Properties to set
   * @returns {SSL_Micro_WrapperPacket} SSL_Micro_WrapperPacket instance
   */
  SSL_Micro_WrapperPacket.create = function create(properties) {
    return new SSL_Micro_WrapperPacket(properties);
  };

  /**
   * Encodes the specified SSL_Micro_WrapperPacket message. Does not implicitly {@link SSL_Micro_WrapperPacket.verify|verify} messages.
   * @function encode
   * @memberof SSL_Micro_WrapperPacket
   * @static
   * @param {ISSL_Micro_WrapperPacket} message SSL_Micro_WrapperPacket message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_Micro_WrapperPacket.encode = function encode(message, writer) {
    if (!writer)
      writer = $Writer.create();
    if (message.detection != null && message.hasOwnProperty("detection"))
      $root.SSL_Micro_DetectionFrame.encode(message.detection, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
    if (message.geometry != null && message.hasOwnProperty("geometry"))
      $root.SSL_Micro_GeometryData.encode(message.geometry, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
    return writer;
  };

  /**
   * Encodes the specified SSL_Micro_WrapperPacket message, length delimited. Does not implicitly {@link SSL_Micro_WrapperPacket.verify|verify} messages.
   * @function encodeDelimited
   * @memberof SSL_Micro_WrapperPacket
   * @static
   * @param {ISSL_Micro_WrapperPacket} message SSL_Micro_WrapperPacket message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  SSL_Micro_WrapperPacket.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a SSL_Micro_WrapperPacket message from the specified reader or buffer.
   * @function decode
   * @memberof SSL_Micro_WrapperPacket
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {SSL_Micro_WrapperPacket} SSL_Micro_WrapperPacket
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_Micro_WrapperPacket.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader))
      reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SSL_Micro_WrapperPacket();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.detection = $root.SSL_Micro_DetectionFrame.decode(reader, reader.uint32());
          break;
        case 2:
          message.geometry = $root.SSL_Micro_GeometryData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a SSL_Micro_WrapperPacket message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof SSL_Micro_WrapperPacket
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {SSL_Micro_WrapperPacket} SSL_Micro_WrapperPacket
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  SSL_Micro_WrapperPacket.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader))
      reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a SSL_Micro_WrapperPacket message.
   * @function verify
   * @memberof SSL_Micro_WrapperPacket
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  SSL_Micro_WrapperPacket.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
    if (message.detection != null && message.hasOwnProperty("detection")) {
      var error = $root.SSL_Micro_DetectionFrame.verify(message.detection);
      if (error)
        return "detection." + error;
    }
    if (message.geometry != null && message.hasOwnProperty("geometry")) {
      var error = $root.SSL_Micro_GeometryData.verify(message.geometry);
      if (error)
        return "geometry." + error;
    }
    return null;
  };

  /**
   * Creates a SSL_Micro_WrapperPacket message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof SSL_Micro_WrapperPacket
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {SSL_Micro_WrapperPacket} SSL_Micro_WrapperPacket
   */
  SSL_Micro_WrapperPacket.fromObject = function fromObject(object) {
    if (object instanceof $root.SSL_Micro_WrapperPacket)
      return object;
    var message = new $root.SSL_Micro_WrapperPacket();
    if (object.detection != null) {
      if (typeof object.detection !== "object")
        throw TypeError(".SSL_Micro_WrapperPacket.detection: object expected");
      message.detection = $root.SSL_Micro_DetectionFrame.fromObject(object.detection);
    }
    if (object.geometry != null) {
      if (typeof object.geometry !== "object")
        throw TypeError(".SSL_Micro_WrapperPacket.geometry: object expected");
      message.geometry = $root.SSL_Micro_GeometryData.fromObject(object.geometry);
    }
    return message;
  };

  /**
   * Creates a plain object from a SSL_Micro_WrapperPacket message. Also converts values to other types if specified.
   * @function toObject
   * @memberof SSL_Micro_WrapperPacket
   * @static
   * @param {SSL_Micro_WrapperPacket} message SSL_Micro_WrapperPacket
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  SSL_Micro_WrapperPacket.toObject = function toObject(message, options) {
    if (!options)
      options = {};
    var object = {};
    if (options.defaults) {
      object.detection = null;
      object.geometry = null;
    }
    if (message.detection != null && message.hasOwnProperty("detection"))
      object.detection = $root.SSL_Micro_DetectionFrame.toObject(message.detection, options);
    if (message.geometry != null && message.hasOwnProperty("geometry"))
      object.geometry = $root.SSL_Micro_GeometryData.toObject(message.geometry, options);
    return object;
  };

  /**
   * Converts this SSL_Micro_WrapperPacket to JSON.
   * @function toJSON
   * @memberof SSL_Micro_WrapperPacket
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  SSL_Micro_WrapperPacket.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return SSL_Micro_WrapperPacket;
})();

module.exports = $root;
