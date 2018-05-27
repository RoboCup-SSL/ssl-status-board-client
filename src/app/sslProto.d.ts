import * as $protobuf from 'protobufjs';

/** Properties of a SSL_Micro_DetectionBall. */
export interface ISSL_Micro_DetectionBall {

  /** SSL_Micro_DetectionBall x */
  x: number;

  /** SSL_Micro_DetectionBall y */
  y: number;
}

/** Represents a SSL_Micro_DetectionBall. */
export class SSL_Micro_DetectionBall implements ISSL_Micro_DetectionBall {

  /** SSL_Micro_DetectionBall x. */
  public x: number;
  /** SSL_Micro_DetectionBall y. */
  public y: number;

  /**
   * Constructs a new SSL_Micro_DetectionBall.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISSL_Micro_DetectionBall);

  /**
   * Creates a new SSL_Micro_DetectionBall instance using the specified properties.
   * @param [properties] Properties to set
   * @returns SSL_Micro_DetectionBall instance
   */
  public static create(properties?: ISSL_Micro_DetectionBall): SSL_Micro_DetectionBall;

  /**
   * Encodes the specified SSL_Micro_DetectionBall message. Does not implicitly {@link SSL_Micro_DetectionBall.verify|verify} messages.
   * @param message SSL_Micro_DetectionBall message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: ISSL_Micro_DetectionBall, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified SSL_Micro_DetectionBall message, length delimited. Does not implicitly {@link SSL_Micro_DetectionBall.verify|verify} messages.
   * @param message SSL_Micro_DetectionBall message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: ISSL_Micro_DetectionBall, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a SSL_Micro_DetectionBall message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns SSL_Micro_DetectionBall
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): SSL_Micro_DetectionBall;

  /**
   * Decodes a SSL_Micro_DetectionBall message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns SSL_Micro_DetectionBall
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): SSL_Micro_DetectionBall;

  /**
   * Verifies a SSL_Micro_DetectionBall message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a SSL_Micro_DetectionBall message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns SSL_Micro_DetectionBall
   */
  public static fromObject(object: { [k: string]: any }): SSL_Micro_DetectionBall;

  /**
   * Creates a plain object from a SSL_Micro_DetectionBall message. Also converts values to other types if specified.
   * @param message SSL_Micro_DetectionBall
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: SSL_Micro_DetectionBall, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this SSL_Micro_DetectionBall to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a SSL_Micro_DetectionRobot. */
export interface ISSL_Micro_DetectionRobot {

  /** SSL_Micro_DetectionRobot robotId */
  robotId?: (number | null);

  /** SSL_Micro_DetectionRobot x */
  x: number;

  /** SSL_Micro_DetectionRobot y */
  y: number;

  /** SSL_Micro_DetectionRobot orientation */
  orientation?: (number | null);
}

/** Represents a SSL_Micro_DetectionRobot. */
export class SSL_Micro_DetectionRobot implements ISSL_Micro_DetectionRobot {

  /** SSL_Micro_DetectionRobot robotId. */
  public robotId: number;
  /** SSL_Micro_DetectionRobot x. */
  public x: number;
  /** SSL_Micro_DetectionRobot y. */
  public y: number;
  /** SSL_Micro_DetectionRobot orientation. */
  public orientation: number;

  /**
   * Constructs a new SSL_Micro_DetectionRobot.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISSL_Micro_DetectionRobot);

  /**
   * Creates a new SSL_Micro_DetectionRobot instance using the specified properties.
   * @param [properties] Properties to set
   * @returns SSL_Micro_DetectionRobot instance
   */
  public static create(properties?: ISSL_Micro_DetectionRobot): SSL_Micro_DetectionRobot;

  /**
   * Encodes the specified SSL_Micro_DetectionRobot message. Does not implicitly {@link SSL_Micro_DetectionRobot.verify|verify} messages.
   * @param message SSL_Micro_DetectionRobot message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: ISSL_Micro_DetectionRobot, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified SSL_Micro_DetectionRobot message, length delimited. Does not implicitly {@link SSL_Micro_DetectionRobot.verify|verify} messages.
   * @param message SSL_Micro_DetectionRobot message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: ISSL_Micro_DetectionRobot, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a SSL_Micro_DetectionRobot message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns SSL_Micro_DetectionRobot
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): SSL_Micro_DetectionRobot;

  /**
   * Decodes a SSL_Micro_DetectionRobot message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns SSL_Micro_DetectionRobot
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): SSL_Micro_DetectionRobot;

  /**
   * Verifies a SSL_Micro_DetectionRobot message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a SSL_Micro_DetectionRobot message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns SSL_Micro_DetectionRobot
   */
  public static fromObject(object: { [k: string]: any }): SSL_Micro_DetectionRobot;

  /**
   * Creates a plain object from a SSL_Micro_DetectionRobot message. Also converts values to other types if specified.
   * @param message SSL_Micro_DetectionRobot
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: SSL_Micro_DetectionRobot, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this SSL_Micro_DetectionRobot to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a SSL_Micro_DetectionFrame. */
export interface ISSL_Micro_DetectionFrame {

  /** SSL_Micro_DetectionFrame balls */
  balls?: (ISSL_Micro_DetectionBall[] | null);

  /** SSL_Micro_DetectionFrame robotsYellow */
  robotsYellow?: (ISSL_Micro_DetectionRobot[] | null);

  /** SSL_Micro_DetectionFrame robotsBlue */
  robotsBlue?: (ISSL_Micro_DetectionRobot[] | null);
}

/** Represents a SSL_Micro_DetectionFrame. */
export class SSL_Micro_DetectionFrame implements ISSL_Micro_DetectionFrame {

  /** SSL_Micro_DetectionFrame balls. */
  public balls: ISSL_Micro_DetectionBall[];
  /** SSL_Micro_DetectionFrame robotsYellow. */
  public robotsYellow: ISSL_Micro_DetectionRobot[];
  /** SSL_Micro_DetectionFrame robotsBlue. */
  public robotsBlue: ISSL_Micro_DetectionRobot[];

  /**
   * Constructs a new SSL_Micro_DetectionFrame.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISSL_Micro_DetectionFrame);

  /**
   * Creates a new SSL_Micro_DetectionFrame instance using the specified properties.
   * @param [properties] Properties to set
   * @returns SSL_Micro_DetectionFrame instance
   */
  public static create(properties?: ISSL_Micro_DetectionFrame): SSL_Micro_DetectionFrame;

  /**
   * Encodes the specified SSL_Micro_DetectionFrame message. Does not implicitly {@link SSL_Micro_DetectionFrame.verify|verify} messages.
   * @param message SSL_Micro_DetectionFrame message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: ISSL_Micro_DetectionFrame, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified SSL_Micro_DetectionFrame message, length delimited. Does not implicitly {@link SSL_Micro_DetectionFrame.verify|verify} messages.
   * @param message SSL_Micro_DetectionFrame message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: ISSL_Micro_DetectionFrame, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a SSL_Micro_DetectionFrame message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns SSL_Micro_DetectionFrame
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): SSL_Micro_DetectionFrame;

  /**
   * Decodes a SSL_Micro_DetectionFrame message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns SSL_Micro_DetectionFrame
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): SSL_Micro_DetectionFrame;

  /**
   * Verifies a SSL_Micro_DetectionFrame message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a SSL_Micro_DetectionFrame message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns SSL_Micro_DetectionFrame
   */
  public static fromObject(object: { [k: string]: any }): SSL_Micro_DetectionFrame;

  /**
   * Creates a plain object from a SSL_Micro_DetectionFrame message. Also converts values to other types if specified.
   * @param message SSL_Micro_DetectionFrame
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: SSL_Micro_DetectionFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this SSL_Micro_DetectionFrame to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a Micro_Vector2f. */
export interface IMicro_Vector2f {

  /** Micro_Vector2f x */
  x: number;

  /** Micro_Vector2f y */
  y: number;
}

/** Represents a Micro_Vector2f. */
export class Micro_Vector2f implements IMicro_Vector2f {

  /** Micro_Vector2f x. */
  public x: number;
  /** Micro_Vector2f y. */
  public y: number;

  /**
   * Constructs a new Micro_Vector2f.
   * @param [properties] Properties to set
   */
  constructor(properties?: IMicro_Vector2f);

  /**
   * Creates a new Micro_Vector2f instance using the specified properties.
   * @param [properties] Properties to set
   * @returns Micro_Vector2f instance
   */
  public static create(properties?: IMicro_Vector2f): Micro_Vector2f;

  /**
   * Encodes the specified Micro_Vector2f message. Does not implicitly {@link Micro_Vector2f.verify|verify} messages.
   * @param message Micro_Vector2f message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: IMicro_Vector2f, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified Micro_Vector2f message, length delimited. Does not implicitly {@link Micro_Vector2f.verify|verify} messages.
   * @param message Micro_Vector2f message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: IMicro_Vector2f, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a Micro_Vector2f message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns Micro_Vector2f
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): Micro_Vector2f;

  /**
   * Decodes a Micro_Vector2f message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns Micro_Vector2f
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): Micro_Vector2f;

  /**
   * Verifies a Micro_Vector2f message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a Micro_Vector2f message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns Micro_Vector2f
   */
  public static fromObject(object: { [k: string]: any }): Micro_Vector2f;

  /**
   * Creates a plain object from a Micro_Vector2f message. Also converts values to other types if specified.
   * @param message Micro_Vector2f
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: Micro_Vector2f, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this Micro_Vector2f to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a SSL_Micro_FieldLineSegment. */
export interface ISSL_Micro_FieldLineSegment {

  /** SSL_Micro_FieldLineSegment name */
  name?: (string | null);

  /** SSL_Micro_FieldLineSegment p1 */
  p1: IMicro_Vector2f;

  /** SSL_Micro_FieldLineSegment p2 */
  p2: IMicro_Vector2f;

  /** SSL_Micro_FieldLineSegment thickness */
  thickness?: (number | null);
}

/** Represents a SSL_Micro_FieldLineSegment. */
export class SSL_Micro_FieldLineSegment implements ISSL_Micro_FieldLineSegment {

  /** SSL_Micro_FieldLineSegment name. */
  public name: string;
  /** SSL_Micro_FieldLineSegment p1. */
  public p1: IMicro_Vector2f;
  /** SSL_Micro_FieldLineSegment p2. */
  public p2: IMicro_Vector2f;
  /** SSL_Micro_FieldLineSegment thickness. */
  public thickness: number;

  /**
   * Constructs a new SSL_Micro_FieldLineSegment.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISSL_Micro_FieldLineSegment);

  /**
   * Creates a new SSL_Micro_FieldLineSegment instance using the specified properties.
   * @param [properties] Properties to set
   * @returns SSL_Micro_FieldLineSegment instance
   */
  public static create(properties?: ISSL_Micro_FieldLineSegment): SSL_Micro_FieldLineSegment;

  /**
   * Encodes the specified SSL_Micro_FieldLineSegment message. Does not implicitly {@link SSL_Micro_FieldLineSegment.verify|verify} messages.
   * @param message SSL_Micro_FieldLineSegment message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: ISSL_Micro_FieldLineSegment, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified SSL_Micro_FieldLineSegment message, length delimited. Does not implicitly {@link SSL_Micro_FieldLineSegment.verify|verify} messages.
   * @param message SSL_Micro_FieldLineSegment message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: ISSL_Micro_FieldLineSegment, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a SSL_Micro_FieldLineSegment message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns SSL_Micro_FieldLineSegment
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): SSL_Micro_FieldLineSegment;

  /**
   * Decodes a SSL_Micro_FieldLineSegment message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns SSL_Micro_FieldLineSegment
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): SSL_Micro_FieldLineSegment;

  /**
   * Verifies a SSL_Micro_FieldLineSegment message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a SSL_Micro_FieldLineSegment message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns SSL_Micro_FieldLineSegment
   */
  public static fromObject(object: { [k: string]: any }): SSL_Micro_FieldLineSegment;

  /**
   * Creates a plain object from a SSL_Micro_FieldLineSegment message. Also converts values to other types if specified.
   * @param message SSL_Micro_FieldLineSegment
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: SSL_Micro_FieldLineSegment, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this SSL_Micro_FieldLineSegment to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a SSL_Micro_FieldCicularArc. */
export interface ISSL_Micro_FieldCicularArc {

  /** SSL_Micro_FieldCicularArc name */
  name?: (string | null);

  /** SSL_Micro_FieldCicularArc center */
  center: IMicro_Vector2f;

  /** SSL_Micro_FieldCicularArc radius */
  radius: number;

  /** SSL_Micro_FieldCicularArc a1 */
  a1?: (number | null);

  /** SSL_Micro_FieldCicularArc a2 */
  a2?: (number | null);

  /** SSL_Micro_FieldCicularArc thickness */
  thickness?: (number | null);
}

/** Represents a SSL_Micro_FieldCicularArc. */
export class SSL_Micro_FieldCicularArc implements ISSL_Micro_FieldCicularArc {

  /** SSL_Micro_FieldCicularArc name. */
  public name: string;
  /** SSL_Micro_FieldCicularArc center. */
  public center: IMicro_Vector2f;
  /** SSL_Micro_FieldCicularArc radius. */
  public radius: number;
  /** SSL_Micro_FieldCicularArc a1. */
  public a1: number;
  /** SSL_Micro_FieldCicularArc a2. */
  public a2: number;
  /** SSL_Micro_FieldCicularArc thickness. */
  public thickness: number;

  /**
   * Constructs a new SSL_Micro_FieldCicularArc.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISSL_Micro_FieldCicularArc);

  /**
   * Creates a new SSL_Micro_FieldCicularArc instance using the specified properties.
   * @param [properties] Properties to set
   * @returns SSL_Micro_FieldCicularArc instance
   */
  public static create(properties?: ISSL_Micro_FieldCicularArc): SSL_Micro_FieldCicularArc;

  /**
   * Encodes the specified SSL_Micro_FieldCicularArc message. Does not implicitly {@link SSL_Micro_FieldCicularArc.verify|verify} messages.
   * @param message SSL_Micro_FieldCicularArc message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: ISSL_Micro_FieldCicularArc, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified SSL_Micro_FieldCicularArc message, length delimited. Does not implicitly {@link SSL_Micro_FieldCicularArc.verify|verify} messages.
   * @param message SSL_Micro_FieldCicularArc message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: ISSL_Micro_FieldCicularArc, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a SSL_Micro_FieldCicularArc message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns SSL_Micro_FieldCicularArc
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): SSL_Micro_FieldCicularArc;

  /**
   * Decodes a SSL_Micro_FieldCicularArc message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns SSL_Micro_FieldCicularArc
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): SSL_Micro_FieldCicularArc;

  /**
   * Verifies a SSL_Micro_FieldCicularArc message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a SSL_Micro_FieldCicularArc message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns SSL_Micro_FieldCicularArc
   */
  public static fromObject(object: { [k: string]: any }): SSL_Micro_FieldCicularArc;

  /**
   * Creates a plain object from a SSL_Micro_FieldCicularArc message. Also converts values to other types if specified.
   * @param message SSL_Micro_FieldCicularArc
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: SSL_Micro_FieldCicularArc, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this SSL_Micro_FieldCicularArc to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a SSL_Micro_GeometryFieldSize. */
export interface ISSL_Micro_GeometryFieldSize {

  /** SSL_Micro_GeometryFieldSize fieldLength */
  fieldLength?: (number | null);

  /** SSL_Micro_GeometryFieldSize fieldWidth */
  fieldWidth?: (number | null);

  /** SSL_Micro_GeometryFieldSize goalWidth */
  goalWidth?: (number | null);

  /** SSL_Micro_GeometryFieldSize goalDepth */
  goalDepth?: (number | null);

  /** SSL_Micro_GeometryFieldSize boundaryWidth */
  boundaryWidth?: (number | null);

  /** SSL_Micro_GeometryFieldSize fieldLines */
  fieldLines?: (ISSL_Micro_FieldLineSegment[] | null);

  /** SSL_Micro_GeometryFieldSize fieldArcs */
  fieldArcs?: (ISSL_Micro_FieldCicularArc[] | null);
}

/** Represents a SSL_Micro_GeometryFieldSize. */
export class SSL_Micro_GeometryFieldSize implements ISSL_Micro_GeometryFieldSize {

  /** SSL_Micro_GeometryFieldSize fieldLength. */
  public fieldLength: number;
  /** SSL_Micro_GeometryFieldSize fieldWidth. */
  public fieldWidth: number;
  /** SSL_Micro_GeometryFieldSize goalWidth. */
  public goalWidth: number;
  /** SSL_Micro_GeometryFieldSize goalDepth. */
  public goalDepth: number;
  /** SSL_Micro_GeometryFieldSize boundaryWidth. */
  public boundaryWidth: number;
  /** SSL_Micro_GeometryFieldSize fieldLines. */
  public fieldLines: ISSL_Micro_FieldLineSegment[];
  /** SSL_Micro_GeometryFieldSize fieldArcs. */
  public fieldArcs: ISSL_Micro_FieldCicularArc[];

  /**
   * Constructs a new SSL_Micro_GeometryFieldSize.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISSL_Micro_GeometryFieldSize);

  /**
   * Creates a new SSL_Micro_GeometryFieldSize instance using the specified properties.
   * @param [properties] Properties to set
   * @returns SSL_Micro_GeometryFieldSize instance
   */
  public static create(properties?: ISSL_Micro_GeometryFieldSize): SSL_Micro_GeometryFieldSize;

  /**
   * Encodes the specified SSL_Micro_GeometryFieldSize message. Does not implicitly {@link SSL_Micro_GeometryFieldSize.verify|verify} messages.
   * @param message SSL_Micro_GeometryFieldSize message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: ISSL_Micro_GeometryFieldSize, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified SSL_Micro_GeometryFieldSize message, length delimited. Does not implicitly {@link SSL_Micro_GeometryFieldSize.verify|verify} messages.
   * @param message SSL_Micro_GeometryFieldSize message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: ISSL_Micro_GeometryFieldSize, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a SSL_Micro_GeometryFieldSize message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns SSL_Micro_GeometryFieldSize
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): SSL_Micro_GeometryFieldSize;

  /**
   * Decodes a SSL_Micro_GeometryFieldSize message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns SSL_Micro_GeometryFieldSize
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): SSL_Micro_GeometryFieldSize;

  /**
   * Verifies a SSL_Micro_GeometryFieldSize message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a SSL_Micro_GeometryFieldSize message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns SSL_Micro_GeometryFieldSize
   */
  public static fromObject(object: { [k: string]: any }): SSL_Micro_GeometryFieldSize;

  /**
   * Creates a plain object from a SSL_Micro_GeometryFieldSize message. Also converts values to other types if specified.
   * @param message SSL_Micro_GeometryFieldSize
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: SSL_Micro_GeometryFieldSize, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this SSL_Micro_GeometryFieldSize to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a SSL_Micro_GeometryCameraCalibration. */
export interface ISSL_Micro_GeometryCameraCalibration {

  /** SSL_Micro_GeometryCameraCalibration cameraId */
  cameraId: number;

  /** SSL_Micro_GeometryCameraCalibration focalLength */
  focalLength?: (number | null);

  /** SSL_Micro_GeometryCameraCalibration principalPointX */
  principalPointX?: (number | null);

  /** SSL_Micro_GeometryCameraCalibration principalPointY */
  principalPointY?: (number | null);

  /** SSL_Micro_GeometryCameraCalibration distortion */
  distortion?: (number | null);

  /** SSL_Micro_GeometryCameraCalibration q0 */
  q0?: (number | null);

  /** SSL_Micro_GeometryCameraCalibration q1 */
  q1?: (number | null);

  /** SSL_Micro_GeometryCameraCalibration q2 */
  q2?: (number | null);

  /** SSL_Micro_GeometryCameraCalibration q3 */
  q3?: (number | null);

  /** SSL_Micro_GeometryCameraCalibration tx */
  tx?: (number | null);

  /** SSL_Micro_GeometryCameraCalibration ty */
  ty?: (number | null);

  /** SSL_Micro_GeometryCameraCalibration tz */
  tz?: (number | null);

  /** SSL_Micro_GeometryCameraCalibration derivedCameraWorldTx */
  derivedCameraWorldTx?: (number | null);

  /** SSL_Micro_GeometryCameraCalibration derivedCameraWorldTy */
  derivedCameraWorldTy?: (number | null);

  /** SSL_Micro_GeometryCameraCalibration derivedCameraWorldTz */
  derivedCameraWorldTz?: (number | null);
}

/** Represents a SSL_Micro_GeometryCameraCalibration. */
export class SSL_Micro_GeometryCameraCalibration implements ISSL_Micro_GeometryCameraCalibration {

  /** SSL_Micro_GeometryCameraCalibration cameraId. */
  public cameraId: number;
  /** SSL_Micro_GeometryCameraCalibration focalLength. */
  public focalLength: number;
  /** SSL_Micro_GeometryCameraCalibration principalPointX. */
  public principalPointX: number;
  /** SSL_Micro_GeometryCameraCalibration principalPointY. */
  public principalPointY: number;
  /** SSL_Micro_GeometryCameraCalibration distortion. */
  public distortion: number;
  /** SSL_Micro_GeometryCameraCalibration q0. */
  public q0: number;
  /** SSL_Micro_GeometryCameraCalibration q1. */
  public q1: number;
  /** SSL_Micro_GeometryCameraCalibration q2. */
  public q2: number;
  /** SSL_Micro_GeometryCameraCalibration q3. */
  public q3: number;
  /** SSL_Micro_GeometryCameraCalibration tx. */
  public tx: number;
  /** SSL_Micro_GeometryCameraCalibration ty. */
  public ty: number;
  /** SSL_Micro_GeometryCameraCalibration tz. */
  public tz: number;
  /** SSL_Micro_GeometryCameraCalibration derivedCameraWorldTx. */
  public derivedCameraWorldTx: number;
  /** SSL_Micro_GeometryCameraCalibration derivedCameraWorldTy. */
  public derivedCameraWorldTy: number;
  /** SSL_Micro_GeometryCameraCalibration derivedCameraWorldTz. */
  public derivedCameraWorldTz: number;

  /**
   * Constructs a new SSL_Micro_GeometryCameraCalibration.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISSL_Micro_GeometryCameraCalibration);

  /**
   * Creates a new SSL_Micro_GeometryCameraCalibration instance using the specified properties.
   * @param [properties] Properties to set
   * @returns SSL_Micro_GeometryCameraCalibration instance
   */
  public static create(properties?: ISSL_Micro_GeometryCameraCalibration): SSL_Micro_GeometryCameraCalibration;

  /**
   * Encodes the specified SSL_Micro_GeometryCameraCalibration message. Does not implicitly {@link SSL_Micro_GeometryCameraCalibration.verify|verify} messages.
   * @param message SSL_Micro_GeometryCameraCalibration message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: ISSL_Micro_GeometryCameraCalibration, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified SSL_Micro_GeometryCameraCalibration message, length delimited. Does not implicitly {@link SSL_Micro_GeometryCameraCalibration.verify|verify} messages.
   * @param message SSL_Micro_GeometryCameraCalibration message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: ISSL_Micro_GeometryCameraCalibration, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a SSL_Micro_GeometryCameraCalibration message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns SSL_Micro_GeometryCameraCalibration
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): SSL_Micro_GeometryCameraCalibration;

  /**
   * Decodes a SSL_Micro_GeometryCameraCalibration message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns SSL_Micro_GeometryCameraCalibration
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): SSL_Micro_GeometryCameraCalibration;

  /**
   * Verifies a SSL_Micro_GeometryCameraCalibration message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a SSL_Micro_GeometryCameraCalibration message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns SSL_Micro_GeometryCameraCalibration
   */
  public static fromObject(object: { [k: string]: any }): SSL_Micro_GeometryCameraCalibration;

  /**
   * Creates a plain object from a SSL_Micro_GeometryCameraCalibration message. Also converts values to other types if specified.
   * @param message SSL_Micro_GeometryCameraCalibration
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: SSL_Micro_GeometryCameraCalibration, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this SSL_Micro_GeometryCameraCalibration to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a SSL_Micro_GeometryData. */
export interface ISSL_Micro_GeometryData {

  /** SSL_Micro_GeometryData field */
  field: ISSL_Micro_GeometryFieldSize;

  /** SSL_Micro_GeometryData calib */
  calib?: (ISSL_Micro_GeometryCameraCalibration[] | null);
}

/** Represents a SSL_Micro_GeometryData. */
export class SSL_Micro_GeometryData implements ISSL_Micro_GeometryData {

  /** SSL_Micro_GeometryData field. */
  public field: ISSL_Micro_GeometryFieldSize;
  /** SSL_Micro_GeometryData calib. */
  public calib: ISSL_Micro_GeometryCameraCalibration[];

  /**
   * Constructs a new SSL_Micro_GeometryData.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISSL_Micro_GeometryData);

  /**
   * Creates a new SSL_Micro_GeometryData instance using the specified properties.
   * @param [properties] Properties to set
   * @returns SSL_Micro_GeometryData instance
   */
  public static create(properties?: ISSL_Micro_GeometryData): SSL_Micro_GeometryData;

  /**
   * Encodes the specified SSL_Micro_GeometryData message. Does not implicitly {@link SSL_Micro_GeometryData.verify|verify} messages.
   * @param message SSL_Micro_GeometryData message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: ISSL_Micro_GeometryData, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified SSL_Micro_GeometryData message, length delimited. Does not implicitly {@link SSL_Micro_GeometryData.verify|verify} messages.
   * @param message SSL_Micro_GeometryData message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: ISSL_Micro_GeometryData, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a SSL_Micro_GeometryData message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns SSL_Micro_GeometryData
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): SSL_Micro_GeometryData;

  /**
   * Decodes a SSL_Micro_GeometryData message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns SSL_Micro_GeometryData
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): SSL_Micro_GeometryData;

  /**
   * Verifies a SSL_Micro_GeometryData message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a SSL_Micro_GeometryData message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns SSL_Micro_GeometryData
   */
  public static fromObject(object: { [k: string]: any }): SSL_Micro_GeometryData;

  /**
   * Creates a plain object from a SSL_Micro_GeometryData message. Also converts values to other types if specified.
   * @param message SSL_Micro_GeometryData
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: SSL_Micro_GeometryData, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this SSL_Micro_GeometryData to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a SSL_Micro_WrapperPacket. */
export interface ISSL_Micro_WrapperPacket {

  /** SSL_Micro_WrapperPacket detection */
  detection?: (ISSL_Micro_DetectionFrame | null);

  /** SSL_Micro_WrapperPacket geometry */
  geometry?: (ISSL_Micro_GeometryData | null);
}

/** Represents a SSL_Micro_WrapperPacket. */
export class SSL_Micro_WrapperPacket implements ISSL_Micro_WrapperPacket {

  /** SSL_Micro_WrapperPacket detection. */
  public detection?: (ISSL_Micro_DetectionFrame | null);
  /** SSL_Micro_WrapperPacket geometry. */
  public geometry?: (ISSL_Micro_GeometryData | null);

  /**
   * Constructs a new SSL_Micro_WrapperPacket.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISSL_Micro_WrapperPacket);

  /**
   * Creates a new SSL_Micro_WrapperPacket instance using the specified properties.
   * @param [properties] Properties to set
   * @returns SSL_Micro_WrapperPacket instance
   */
  public static create(properties?: ISSL_Micro_WrapperPacket): SSL_Micro_WrapperPacket;

  /**
   * Encodes the specified SSL_Micro_WrapperPacket message. Does not implicitly {@link SSL_Micro_WrapperPacket.verify|verify} messages.
   * @param message SSL_Micro_WrapperPacket message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: ISSL_Micro_WrapperPacket, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified SSL_Micro_WrapperPacket message, length delimited. Does not implicitly {@link SSL_Micro_WrapperPacket.verify|verify} messages.
   * @param message SSL_Micro_WrapperPacket message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: ISSL_Micro_WrapperPacket, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a SSL_Micro_WrapperPacket message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns SSL_Micro_WrapperPacket
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): SSL_Micro_WrapperPacket;

  /**
   * Decodes a SSL_Micro_WrapperPacket message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns SSL_Micro_WrapperPacket
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): SSL_Micro_WrapperPacket;

  /**
   * Verifies a SSL_Micro_WrapperPacket message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a SSL_Micro_WrapperPacket message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns SSL_Micro_WrapperPacket
   */
  public static fromObject(object: { [k: string]: any }): SSL_Micro_WrapperPacket;

  /**
   * Creates a plain object from a SSL_Micro_WrapperPacket message. Also converts values to other types if specified.
   * @param message SSL_Micro_WrapperPacket
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: SSL_Micro_WrapperPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this SSL_Micro_WrapperPacket to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}
