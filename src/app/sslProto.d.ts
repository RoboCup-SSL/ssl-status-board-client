import * as $protobuf from 'protobufjs';

/** Properties of a SSL_DetectionBall. */
export interface ISSL_DetectionBall {

  /** SSL_DetectionBall confidence */
  confidence: number;

  /** SSL_DetectionBall area */
  area?: (number | null);

  /** SSL_DetectionBall x */
  x: number;

  /** SSL_DetectionBall y */
  y: number;

  /** SSL_DetectionBall z */
  z?: (number | null);

  /** SSL_DetectionBall pixelX */
  pixelX: number;

  /** SSL_DetectionBall pixelY */
  pixelY: number;
}

/** Represents a SSL_DetectionBall. */
export class SSL_DetectionBall implements ISSL_DetectionBall {

  /** SSL_DetectionBall confidence. */
  public confidence: number;
  /** SSL_DetectionBall area. */
  public area: number;
  /** SSL_DetectionBall x. */
  public x: number;
  /** SSL_DetectionBall y. */
  public y: number;
  /** SSL_DetectionBall z. */
  public z: number;
  /** SSL_DetectionBall pixelX. */
  public pixelX: number;
  /** SSL_DetectionBall pixelY. */
  public pixelY: number;

  /**
   * Constructs a new SSL_DetectionBall.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISSL_DetectionBall);

  /**
   * Creates a new SSL_DetectionBall instance using the specified properties.
   * @param [properties] Properties to set
   * @returns SSL_DetectionBall instance
   */
  public static create(properties?: ISSL_DetectionBall): SSL_DetectionBall;

  /**
   * Encodes the specified SSL_DetectionBall message. Does not implicitly {@link SSL_DetectionBall.verify|verify} messages.
   * @param message SSL_DetectionBall message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: ISSL_DetectionBall, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified SSL_DetectionBall message, length delimited. Does not implicitly {@link SSL_DetectionBall.verify|verify} messages.
   * @param message SSL_DetectionBall message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: ISSL_DetectionBall, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a SSL_DetectionBall message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns SSL_DetectionBall
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): SSL_DetectionBall;

  /**
   * Decodes a SSL_DetectionBall message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns SSL_DetectionBall
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): SSL_DetectionBall;

  /**
   * Verifies a SSL_DetectionBall message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a SSL_DetectionBall message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns SSL_DetectionBall
   */
  public static fromObject(object: { [k: string]: any }): SSL_DetectionBall;

  /**
   * Creates a plain object from a SSL_DetectionBall message. Also converts values to other types if specified.
   * @param message SSL_DetectionBall
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: SSL_DetectionBall, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this SSL_DetectionBall to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a SSL_DetectionRobot. */
export interface ISSL_DetectionRobot {

  /** SSL_DetectionRobot confidence */
  confidence: number;

  /** SSL_DetectionRobot robotId */
  robotId?: (number | null);

  /** SSL_DetectionRobot x */
  x: number;

  /** SSL_DetectionRobot y */
  y: number;

  /** SSL_DetectionRobot orientation */
  orientation?: (number | null);

  /** SSL_DetectionRobot pixelX */
  pixelX: number;

  /** SSL_DetectionRobot pixelY */
  pixelY: number;

  /** SSL_DetectionRobot height */
  height?: (number | null);
}

/** Represents a SSL_DetectionRobot. */
export class SSL_DetectionRobot implements ISSL_DetectionRobot {

  /** SSL_DetectionRobot confidence. */
  public confidence: number;
  /** SSL_DetectionRobot robotId. */
  public robotId: number;
  /** SSL_DetectionRobot x. */
  public x: number;
  /** SSL_DetectionRobot y. */
  public y: number;
  /** SSL_DetectionRobot orientation. */
  public orientation: number;
  /** SSL_DetectionRobot pixelX. */
  public pixelX: number;
  /** SSL_DetectionRobot pixelY. */
  public pixelY: number;
  /** SSL_DetectionRobot height. */
  public height: number;

  /**
   * Constructs a new SSL_DetectionRobot.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISSL_DetectionRobot);

  /**
   * Creates a new SSL_DetectionRobot instance using the specified properties.
   * @param [properties] Properties to set
   * @returns SSL_DetectionRobot instance
   */
  public static create(properties?: ISSL_DetectionRobot): SSL_DetectionRobot;

  /**
   * Encodes the specified SSL_DetectionRobot message. Does not implicitly {@link SSL_DetectionRobot.verify|verify} messages.
   * @param message SSL_DetectionRobot message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: ISSL_DetectionRobot, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified SSL_DetectionRobot message, length delimited. Does not implicitly {@link SSL_DetectionRobot.verify|verify} messages.
   * @param message SSL_DetectionRobot message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: ISSL_DetectionRobot, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a SSL_DetectionRobot message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns SSL_DetectionRobot
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): SSL_DetectionRobot;

  /**
   * Decodes a SSL_DetectionRobot message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns SSL_DetectionRobot
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): SSL_DetectionRobot;

  /**
   * Verifies a SSL_DetectionRobot message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a SSL_DetectionRobot message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns SSL_DetectionRobot
   */
  public static fromObject(object: { [k: string]: any }): SSL_DetectionRobot;

  /**
   * Creates a plain object from a SSL_DetectionRobot message. Also converts values to other types if specified.
   * @param message SSL_DetectionRobot
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: SSL_DetectionRobot, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this SSL_DetectionRobot to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a SSL_DetectionFrame. */
export interface ISSL_DetectionFrame {

  /** SSL_DetectionFrame frameNumber */
  frameNumber: number;

  /** SSL_DetectionFrame tCapture */
  tCapture: number;

  /** SSL_DetectionFrame tSent */
  tSent: number;

  /** SSL_DetectionFrame cameraId */
  cameraId: number;

  /** SSL_DetectionFrame balls */
  balls?: (ISSL_DetectionBall[] | null);

  /** SSL_DetectionFrame robotsYellow */
  robotsYellow?: (ISSL_DetectionRobot[] | null);

  /** SSL_DetectionFrame robotsBlue */
  robotsBlue?: (ISSL_DetectionRobot[] | null);
}

/** Represents a SSL_DetectionFrame. */
export class SSL_DetectionFrame implements ISSL_DetectionFrame {

  /** SSL_DetectionFrame frameNumber. */
  public frameNumber: number;
  /** SSL_DetectionFrame tCapture. */
  public tCapture: number;
  /** SSL_DetectionFrame tSent. */
  public tSent: number;
  /** SSL_DetectionFrame cameraId. */
  public cameraId: number;
  /** SSL_DetectionFrame balls. */
  public balls: ISSL_DetectionBall[];
  /** SSL_DetectionFrame robotsYellow. */
  public robotsYellow: ISSL_DetectionRobot[];
  /** SSL_DetectionFrame robotsBlue. */
  public robotsBlue: ISSL_DetectionRobot[];

  /**
   * Constructs a new SSL_DetectionFrame.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISSL_DetectionFrame);

  /**
   * Creates a new SSL_DetectionFrame instance using the specified properties.
   * @param [properties] Properties to set
   * @returns SSL_DetectionFrame instance
   */
  public static create(properties?: ISSL_DetectionFrame): SSL_DetectionFrame;

  /**
   * Encodes the specified SSL_DetectionFrame message. Does not implicitly {@link SSL_DetectionFrame.verify|verify} messages.
   * @param message SSL_DetectionFrame message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: ISSL_DetectionFrame, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified SSL_DetectionFrame message, length delimited. Does not implicitly {@link SSL_DetectionFrame.verify|verify} messages.
   * @param message SSL_DetectionFrame message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: ISSL_DetectionFrame, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a SSL_DetectionFrame message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns SSL_DetectionFrame
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): SSL_DetectionFrame;

  /**
   * Decodes a SSL_DetectionFrame message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns SSL_DetectionFrame
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): SSL_DetectionFrame;

  /**
   * Verifies a SSL_DetectionFrame message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a SSL_DetectionFrame message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns SSL_DetectionFrame
   */
  public static fromObject(object: { [k: string]: any }): SSL_DetectionFrame;

  /**
   * Creates a plain object from a SSL_DetectionFrame message. Also converts values to other types if specified.
   * @param message SSL_DetectionFrame
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: SSL_DetectionFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this SSL_DetectionFrame to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a Vector2f. */
export interface IVector2f {

  /** Vector2f x */
  x: number;

  /** Vector2f y */
  y: number;
}

/** Represents a Vector2f. */
export class Vector2f implements IVector2f {

  /** Vector2f x. */
  public x: number;
  /** Vector2f y. */
  public y: number;

  /**
   * Constructs a new Vector2f.
   * @param [properties] Properties to set
   */
  constructor(properties?: IVector2f);

  /**
   * Creates a new Vector2f instance using the specified properties.
   * @param [properties] Properties to set
   * @returns Vector2f instance
   */
  public static create(properties?: IVector2f): Vector2f;

  /**
   * Encodes the specified Vector2f message. Does not implicitly {@link Vector2f.verify|verify} messages.
   * @param message Vector2f message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: IVector2f, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified Vector2f message, length delimited. Does not implicitly {@link Vector2f.verify|verify} messages.
   * @param message Vector2f message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: IVector2f, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a Vector2f message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns Vector2f
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): Vector2f;

  /**
   * Decodes a Vector2f message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns Vector2f
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): Vector2f;

  /**
   * Verifies a Vector2f message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a Vector2f message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns Vector2f
   */
  public static fromObject(object: { [k: string]: any }): Vector2f;

  /**
   * Creates a plain object from a Vector2f message. Also converts values to other types if specified.
   * @param message Vector2f
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: Vector2f, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this Vector2f to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a SSL_FieldLineSegment. */
export interface ISSL_FieldLineSegment {

  /** SSL_FieldLineSegment name */
  name: string;

  /** SSL_FieldLineSegment p1 */
  p1: IVector2f;

  /** SSL_FieldLineSegment p2 */
  p2: IVector2f;

  /** SSL_FieldLineSegment thickness */
  thickness: number;
}

/** Represents a SSL_FieldLineSegment. */
export class SSL_FieldLineSegment implements ISSL_FieldLineSegment {

  /** SSL_FieldLineSegment name. */
  public name: string;
  /** SSL_FieldLineSegment p1. */
  public p1: IVector2f;
  /** SSL_FieldLineSegment p2. */
  public p2: IVector2f;
  /** SSL_FieldLineSegment thickness. */
  public thickness: number;

  /**
   * Constructs a new SSL_FieldLineSegment.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISSL_FieldLineSegment);

  /**
   * Creates a new SSL_FieldLineSegment instance using the specified properties.
   * @param [properties] Properties to set
   * @returns SSL_FieldLineSegment instance
   */
  public static create(properties?: ISSL_FieldLineSegment): SSL_FieldLineSegment;

  /**
   * Encodes the specified SSL_FieldLineSegment message. Does not implicitly {@link SSL_FieldLineSegment.verify|verify} messages.
   * @param message SSL_FieldLineSegment message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: ISSL_FieldLineSegment, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified SSL_FieldLineSegment message, length delimited. Does not implicitly {@link SSL_FieldLineSegment.verify|verify} messages.
   * @param message SSL_FieldLineSegment message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: ISSL_FieldLineSegment, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a SSL_FieldLineSegment message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns SSL_FieldLineSegment
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): SSL_FieldLineSegment;

  /**
   * Decodes a SSL_FieldLineSegment message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns SSL_FieldLineSegment
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): SSL_FieldLineSegment;

  /**
   * Verifies a SSL_FieldLineSegment message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a SSL_FieldLineSegment message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns SSL_FieldLineSegment
   */
  public static fromObject(object: { [k: string]: any }): SSL_FieldLineSegment;

  /**
   * Creates a plain object from a SSL_FieldLineSegment message. Also converts values to other types if specified.
   * @param message SSL_FieldLineSegment
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: SSL_FieldLineSegment, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this SSL_FieldLineSegment to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a SSL_FieldCicularArc. */
export interface ISSL_FieldCicularArc {

  /** SSL_FieldCicularArc name */
  name: string;

  /** SSL_FieldCicularArc center */
  center: IVector2f;

  /** SSL_FieldCicularArc radius */
  radius: number;

  /** SSL_FieldCicularArc a1 */
  a1: number;

  /** SSL_FieldCicularArc a2 */
  a2: number;

  /** SSL_FieldCicularArc thickness */
  thickness: number;
}

/** Represents a SSL_FieldCicularArc. */
export class SSL_FieldCicularArc implements ISSL_FieldCicularArc {

  /** SSL_FieldCicularArc name. */
  public name: string;
  /** SSL_FieldCicularArc center. */
  public center: IVector2f;
  /** SSL_FieldCicularArc radius. */
  public radius: number;
  /** SSL_FieldCicularArc a1. */
  public a1: number;
  /** SSL_FieldCicularArc a2. */
  public a2: number;
  /** SSL_FieldCicularArc thickness. */
  public thickness: number;

  /**
   * Constructs a new SSL_FieldCicularArc.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISSL_FieldCicularArc);

  /**
   * Creates a new SSL_FieldCicularArc instance using the specified properties.
   * @param [properties] Properties to set
   * @returns SSL_FieldCicularArc instance
   */
  public static create(properties?: ISSL_FieldCicularArc): SSL_FieldCicularArc;

  /**
   * Encodes the specified SSL_FieldCicularArc message. Does not implicitly {@link SSL_FieldCicularArc.verify|verify} messages.
   * @param message SSL_FieldCicularArc message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: ISSL_FieldCicularArc, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified SSL_FieldCicularArc message, length delimited. Does not implicitly {@link SSL_FieldCicularArc.verify|verify} messages.
   * @param message SSL_FieldCicularArc message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: ISSL_FieldCicularArc, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a SSL_FieldCicularArc message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns SSL_FieldCicularArc
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): SSL_FieldCicularArc;

  /**
   * Decodes a SSL_FieldCicularArc message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns SSL_FieldCicularArc
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): SSL_FieldCicularArc;

  /**
   * Verifies a SSL_FieldCicularArc message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a SSL_FieldCicularArc message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns SSL_FieldCicularArc
   */
  public static fromObject(object: { [k: string]: any }): SSL_FieldCicularArc;

  /**
   * Creates a plain object from a SSL_FieldCicularArc message. Also converts values to other types if specified.
   * @param message SSL_FieldCicularArc
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: SSL_FieldCicularArc, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this SSL_FieldCicularArc to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a SSL_GeometryFieldSize. */
export interface ISSL_GeometryFieldSize {

  /** SSL_GeometryFieldSize fieldLength */
  fieldLength: number;

  /** SSL_GeometryFieldSize fieldWidth */
  fieldWidth: number;

  /** SSL_GeometryFieldSize goalWidth */
  goalWidth: number;

  /** SSL_GeometryFieldSize goalDepth */
  goalDepth: number;

  /** SSL_GeometryFieldSize boundaryWidth */
  boundaryWidth: number;

  /** SSL_GeometryFieldSize fieldLines */
  fieldLines?: (ISSL_FieldLineSegment[] | null);

  /** SSL_GeometryFieldSize fieldArcs */
  fieldArcs?: (ISSL_FieldCicularArc[] | null);
}

/** Represents a SSL_GeometryFieldSize. */
export class SSL_GeometryFieldSize implements ISSL_GeometryFieldSize {

  /** SSL_GeometryFieldSize fieldLength. */
  public fieldLength: number;
  /** SSL_GeometryFieldSize fieldWidth. */
  public fieldWidth: number;
  /** SSL_GeometryFieldSize goalWidth. */
  public goalWidth: number;
  /** SSL_GeometryFieldSize goalDepth. */
  public goalDepth: number;
  /** SSL_GeometryFieldSize boundaryWidth. */
  public boundaryWidth: number;
  /** SSL_GeometryFieldSize fieldLines. */
  public fieldLines: ISSL_FieldLineSegment[];
  /** SSL_GeometryFieldSize fieldArcs. */
  public fieldArcs: ISSL_FieldCicularArc[];

  /**
   * Constructs a new SSL_GeometryFieldSize.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISSL_GeometryFieldSize);

  /**
   * Creates a new SSL_GeometryFieldSize instance using the specified properties.
   * @param [properties] Properties to set
   * @returns SSL_GeometryFieldSize instance
   */
  public static create(properties?: ISSL_GeometryFieldSize): SSL_GeometryFieldSize;

  /**
   * Encodes the specified SSL_GeometryFieldSize message. Does not implicitly {@link SSL_GeometryFieldSize.verify|verify} messages.
   * @param message SSL_GeometryFieldSize message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: ISSL_GeometryFieldSize, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified SSL_GeometryFieldSize message, length delimited. Does not implicitly {@link SSL_GeometryFieldSize.verify|verify} messages.
   * @param message SSL_GeometryFieldSize message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: ISSL_GeometryFieldSize, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a SSL_GeometryFieldSize message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns SSL_GeometryFieldSize
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): SSL_GeometryFieldSize;

  /**
   * Decodes a SSL_GeometryFieldSize message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns SSL_GeometryFieldSize
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): SSL_GeometryFieldSize;

  /**
   * Verifies a SSL_GeometryFieldSize message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a SSL_GeometryFieldSize message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns SSL_GeometryFieldSize
   */
  public static fromObject(object: { [k: string]: any }): SSL_GeometryFieldSize;

  /**
   * Creates a plain object from a SSL_GeometryFieldSize message. Also converts values to other types if specified.
   * @param message SSL_GeometryFieldSize
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: SSL_GeometryFieldSize, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this SSL_GeometryFieldSize to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a SSL_GeometryCameraCalibration. */
export interface ISSL_GeometryCameraCalibration {

  /** SSL_GeometryCameraCalibration cameraId */
  cameraId: number;

  /** SSL_GeometryCameraCalibration focalLength */
  focalLength: number;

  /** SSL_GeometryCameraCalibration principalPointX */
  principalPointX: number;

  /** SSL_GeometryCameraCalibration principalPointY */
  principalPointY: number;

  /** SSL_GeometryCameraCalibration distortion */
  distortion: number;

  /** SSL_GeometryCameraCalibration q0 */
  q0: number;

  /** SSL_GeometryCameraCalibration q1 */
  q1: number;

  /** SSL_GeometryCameraCalibration q2 */
  q2: number;

  /** SSL_GeometryCameraCalibration q3 */
  q3: number;

  /** SSL_GeometryCameraCalibration tx */
  tx: number;

  /** SSL_GeometryCameraCalibration ty */
  ty: number;

  /** SSL_GeometryCameraCalibration tz */
  tz: number;

  /** SSL_GeometryCameraCalibration derivedCameraWorldTx */
  derivedCameraWorldTx?: (number | null);

  /** SSL_GeometryCameraCalibration derivedCameraWorldTy */
  derivedCameraWorldTy?: (number | null);

  /** SSL_GeometryCameraCalibration derivedCameraWorldTz */
  derivedCameraWorldTz?: (number | null);
}

/** Represents a SSL_GeometryCameraCalibration. */
export class SSL_GeometryCameraCalibration implements ISSL_GeometryCameraCalibration {

  /** SSL_GeometryCameraCalibration cameraId. */
  public cameraId: number;
  /** SSL_GeometryCameraCalibration focalLength. */
  public focalLength: number;
  /** SSL_GeometryCameraCalibration principalPointX. */
  public principalPointX: number;
  /** SSL_GeometryCameraCalibration principalPointY. */
  public principalPointY: number;
  /** SSL_GeometryCameraCalibration distortion. */
  public distortion: number;
  /** SSL_GeometryCameraCalibration q0. */
  public q0: number;
  /** SSL_GeometryCameraCalibration q1. */
  public q1: number;
  /** SSL_GeometryCameraCalibration q2. */
  public q2: number;
  /** SSL_GeometryCameraCalibration q3. */
  public q3: number;
  /** SSL_GeometryCameraCalibration tx. */
  public tx: number;
  /** SSL_GeometryCameraCalibration ty. */
  public ty: number;
  /** SSL_GeometryCameraCalibration tz. */
  public tz: number;
  /** SSL_GeometryCameraCalibration derivedCameraWorldTx. */
  public derivedCameraWorldTx: number;
  /** SSL_GeometryCameraCalibration derivedCameraWorldTy. */
  public derivedCameraWorldTy: number;
  /** SSL_GeometryCameraCalibration derivedCameraWorldTz. */
  public derivedCameraWorldTz: number;

  /**
   * Constructs a new SSL_GeometryCameraCalibration.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISSL_GeometryCameraCalibration);

  /**
   * Creates a new SSL_GeometryCameraCalibration instance using the specified properties.
   * @param [properties] Properties to set
   * @returns SSL_GeometryCameraCalibration instance
   */
  public static create(properties?: ISSL_GeometryCameraCalibration): SSL_GeometryCameraCalibration;

  /**
   * Encodes the specified SSL_GeometryCameraCalibration message. Does not implicitly {@link SSL_GeometryCameraCalibration.verify|verify} messages.
   * @param message SSL_GeometryCameraCalibration message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: ISSL_GeometryCameraCalibration, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified SSL_GeometryCameraCalibration message, length delimited. Does not implicitly {@link SSL_GeometryCameraCalibration.verify|verify} messages.
   * @param message SSL_GeometryCameraCalibration message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: ISSL_GeometryCameraCalibration, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a SSL_GeometryCameraCalibration message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns SSL_GeometryCameraCalibration
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): SSL_GeometryCameraCalibration;

  /**
   * Decodes a SSL_GeometryCameraCalibration message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns SSL_GeometryCameraCalibration
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): SSL_GeometryCameraCalibration;

  /**
   * Verifies a SSL_GeometryCameraCalibration message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a SSL_GeometryCameraCalibration message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns SSL_GeometryCameraCalibration
   */
  public static fromObject(object: { [k: string]: any }): SSL_GeometryCameraCalibration;

  /**
   * Creates a plain object from a SSL_GeometryCameraCalibration message. Also converts values to other types if specified.
   * @param message SSL_GeometryCameraCalibration
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: SSL_GeometryCameraCalibration, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this SSL_GeometryCameraCalibration to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a SSL_GeometryData. */
export interface ISSL_GeometryData {

  /** SSL_GeometryData field */
  field: ISSL_GeometryFieldSize;

  /** SSL_GeometryData calib */
  calib?: (ISSL_GeometryCameraCalibration[] | null);
}

/** Represents a SSL_GeometryData. */
export class SSL_GeometryData implements ISSL_GeometryData {

  /** SSL_GeometryData field. */
  public field: ISSL_GeometryFieldSize;
  /** SSL_GeometryData calib. */
  public calib: ISSL_GeometryCameraCalibration[];

  /**
   * Constructs a new SSL_GeometryData.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISSL_GeometryData);

  /**
   * Creates a new SSL_GeometryData instance using the specified properties.
   * @param [properties] Properties to set
   * @returns SSL_GeometryData instance
   */
  public static create(properties?: ISSL_GeometryData): SSL_GeometryData;

  /**
   * Encodes the specified SSL_GeometryData message. Does not implicitly {@link SSL_GeometryData.verify|verify} messages.
   * @param message SSL_GeometryData message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: ISSL_GeometryData, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified SSL_GeometryData message, length delimited. Does not implicitly {@link SSL_GeometryData.verify|verify} messages.
   * @param message SSL_GeometryData message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: ISSL_GeometryData, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a SSL_GeometryData message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns SSL_GeometryData
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): SSL_GeometryData;

  /**
   * Decodes a SSL_GeometryData message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns SSL_GeometryData
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): SSL_GeometryData;

  /**
   * Verifies a SSL_GeometryData message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a SSL_GeometryData message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns SSL_GeometryData
   */
  public static fromObject(object: { [k: string]: any }): SSL_GeometryData;

  /**
   * Creates a plain object from a SSL_GeometryData message. Also converts values to other types if specified.
   * @param message SSL_GeometryData
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: SSL_GeometryData, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this SSL_GeometryData to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a SSL_WrapperPacket. */
export interface ISSL_WrapperPacket {

  /** SSL_WrapperPacket detection */
  detection?: (ISSL_DetectionFrame | null);

  /** SSL_WrapperPacket geometry */
  geometry?: (ISSL_GeometryData | null);
}

/** Represents a SSL_WrapperPacket. */
export class SSL_WrapperPacket implements ISSL_WrapperPacket {

  /** SSL_WrapperPacket detection. */
  public detection?: (ISSL_DetectionFrame | null);
  /** SSL_WrapperPacket geometry. */
  public geometry?: (ISSL_GeometryData | null);

  /**
   * Constructs a new SSL_WrapperPacket.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISSL_WrapperPacket);

  /**
   * Creates a new SSL_WrapperPacket instance using the specified properties.
   * @param [properties] Properties to set
   * @returns SSL_WrapperPacket instance
   */
  public static create(properties?: ISSL_WrapperPacket): SSL_WrapperPacket;

  /**
   * Encodes the specified SSL_WrapperPacket message. Does not implicitly {@link SSL_WrapperPacket.verify|verify} messages.
   * @param message SSL_WrapperPacket message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: ISSL_WrapperPacket, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified SSL_WrapperPacket message, length delimited. Does not implicitly {@link SSL_WrapperPacket.verify|verify} messages.
   * @param message SSL_WrapperPacket message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: ISSL_WrapperPacket, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a SSL_WrapperPacket message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns SSL_WrapperPacket
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): SSL_WrapperPacket;

  /**
   * Decodes a SSL_WrapperPacket message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns SSL_WrapperPacket
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): SSL_WrapperPacket;

  /**
   * Verifies a SSL_WrapperPacket message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a SSL_WrapperPacket message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns SSL_WrapperPacket
   */
  public static fromObject(object: { [k: string]: any }): SSL_WrapperPacket;

  /**
   * Creates a plain object from a SSL_WrapperPacket message. Also converts values to other types if specified.
   * @param message SSL_WrapperPacket
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: SSL_WrapperPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this SSL_WrapperPacket to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}
