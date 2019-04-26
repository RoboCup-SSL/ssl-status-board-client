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

/** Team enum. */
export enum Team {
  UNKNOWN = 0,
  YELLOW = 1,
  BLUE = 2
}

/** Properties of a BotId. */
export interface IBotId {

  /** BotId id */
  id?: (number | null);

  /** BotId team */
  team?: (Team | null);
}

/** Represents a BotId. */
export class BotId implements IBotId {

  /** BotId id. */
  public id: number;
  /** BotId team. */
  public team: Team;

  /**
   * Constructs a new BotId.
   * @param [properties] Properties to set
   */
  constructor(properties?: IBotId);

  /**
   * Creates a new BotId instance using the specified properties.
   * @param [properties] Properties to set
   * @returns BotId instance
   */
  public static create(properties?: IBotId): BotId;

  /**
   * Encodes the specified BotId message. Does not implicitly {@link BotId.verify|verify} messages.
   * @param message BotId message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: IBotId, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified BotId message, length delimited. Does not implicitly {@link BotId.verify|verify} messages.
   * @param message BotId message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: IBotId, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a BotId message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns BotId
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): BotId;

  /**
   * Decodes a BotId message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns BotId
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): BotId;

  /**
   * Verifies a BotId message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a BotId message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns BotId
   */
  public static fromObject(object: { [k: string]: any }): BotId;

  /**
   * Creates a plain object from a BotId message. Also converts values to other types if specified.
   * @param message BotId
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: BotId, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this BotId to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a Location. */
export interface ILocation {

  /** Location x */
  x: number;

  /** Location y */
  y: number;
}

/** Represents a Location. */
export class Location implements ILocation {

  /** Location x. */
  public x: number;
  /** Location y. */
  public y: number;

  /**
   * Constructs a new Location.
   * @param [properties] Properties to set
   */
  constructor(properties?: ILocation);

  /**
   * Creates a new Location instance using the specified properties.
   * @param [properties] Properties to set
   * @returns Location instance
   */
  public static create(properties?: ILocation): Location;

  /**
   * Encodes the specified Location message. Does not implicitly {@link Location.verify|verify} messages.
   * @param message Location message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified Location message, length delimited. Does not implicitly {@link Location.verify|verify} messages.
   * @param message Location message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a Location message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns Location
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): Location;

  /**
   * Decodes a Location message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns Location
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): Location;

  /**
   * Verifies a Location message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a Location message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns Location
   */
  public static fromObject(object: { [k: string]: any }): Location;

  /**
   * Creates a plain object from a Location message. Also converts values to other types if specified.
   * @param message Location
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this Location to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a ControllerReply. */
export interface IControllerReply {

  /** ControllerReply statusCode */
  statusCode?: (ControllerReply.StatusCode | null);

  /** ControllerReply reason */
  reason?: (string | null);

  /** ControllerReply nextToken */
  nextToken?: (string | null);

  /** ControllerReply verification */
  verification?: (ControllerReply.Verification | null);
}

/** Represents a ControllerReply. */
export class ControllerReply implements IControllerReply {

  /** ControllerReply statusCode. */
  public statusCode: ControllerReply.StatusCode;
  /** ControllerReply reason. */
  public reason: string;
  /** ControllerReply nextToken. */
  public nextToken: string;
  /** ControllerReply verification. */
  public verification: ControllerReply.Verification;

  /**
   * Constructs a new ControllerReply.
   * @param [properties] Properties to set
   */
  constructor(properties?: IControllerReply);

  /**
   * Creates a new ControllerReply instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ControllerReply instance
   */
  public static create(properties?: IControllerReply): ControllerReply;

  /**
   * Encodes the specified ControllerReply message. Does not implicitly {@link ControllerReply.verify|verify} messages.
   * @param message ControllerReply message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: IControllerReply, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified ControllerReply message, length delimited. Does not implicitly {@link ControllerReply.verify|verify} messages.
   * @param message ControllerReply message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: IControllerReply, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a ControllerReply message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ControllerReply
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): ControllerReply;

  /**
   * Decodes a ControllerReply message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ControllerReply
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): ControllerReply;

  /**
   * Verifies a ControllerReply message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a ControllerReply message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ControllerReply
   */
  public static fromObject(object: { [k: string]: any }): ControllerReply;

  /**
   * Creates a plain object from a ControllerReply message. Also converts values to other types if specified.
   * @param message ControllerReply
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: ControllerReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this ControllerReply to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

export namespace ControllerReply {

  /** StatusCode enum. */
  enum StatusCode {
    UNKNOWN_STATUS_CODE = 0,
    OK = 1,
    REJECTED = 2
  }

  /** Verification enum. */
  enum Verification {
    UNKNOWN_VERIFICATION = 0,
    VERIFIED = 1,
    UNVERIFIED = 2
  }
}

/** Properties of a Signature. */
export interface ISignature {

  /** Signature token */
  token: string;

  /** Signature pkcs1v15 */
  pkcs1v15: Uint8Array;
}

/** Represents a Signature. */
export class Signature implements ISignature {

  /** Signature token. */
  public token: string;
  /** Signature pkcs1v15. */
  public pkcs1v15: Uint8Array;

  /**
   * Constructs a new Signature.
   * @param [properties] Properties to set
   */
  constructor(properties?: ISignature);

  /**
   * Creates a new Signature instance using the specified properties.
   * @param [properties] Properties to set
   * @returns Signature instance
   */
  public static create(properties?: ISignature): Signature;

  /**
   * Encodes the specified Signature message. Does not implicitly {@link Signature.verify|verify} messages.
   * @param message Signature message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified Signature message, length delimited. Does not implicitly {@link Signature.verify|verify} messages.
   * @param message Signature message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a Signature message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns Signature
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): Signature;

  /**
   * Decodes a Signature message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns Signature
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): Signature;

  /**
   * Verifies a Signature message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a Signature message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns Signature
   */
  public static fromObject(object: { [k: string]: any }): Signature;

  /**
   * Creates a plain object from a Signature message. Also converts values to other types if specified.
   * @param message Signature
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: Signature, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this Signature to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a BallSpeedMeasurement. */
export interface IBallSpeedMeasurement {

  /** BallSpeedMeasurement timestamp */
  timestamp: (number | Long);

  /** BallSpeedMeasurement ballSpeed */
  ballSpeed: number;

  /** BallSpeedMeasurement initialBallSpeed */
  initialBallSpeed?: (number | null);
}

/** Represents a BallSpeedMeasurement. */
export class BallSpeedMeasurement implements IBallSpeedMeasurement {

  /** BallSpeedMeasurement timestamp. */
  public timestamp: (number | Long);
  /** BallSpeedMeasurement ballSpeed. */
  public ballSpeed: number;
  /** BallSpeedMeasurement initialBallSpeed. */
  public initialBallSpeed: number;

  /**
   * Constructs a new BallSpeedMeasurement.
   * @param [properties] Properties to set
   */
  constructor(properties?: IBallSpeedMeasurement);

  /**
   * Creates a new BallSpeedMeasurement instance using the specified properties.
   * @param [properties] Properties to set
   * @returns BallSpeedMeasurement instance
   */
  public static create(properties?: IBallSpeedMeasurement): BallSpeedMeasurement;

  /**
   * Encodes the specified BallSpeedMeasurement message. Does not implicitly {@link BallSpeedMeasurement.verify|verify} messages.
   * @param message BallSpeedMeasurement message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: IBallSpeedMeasurement, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified BallSpeedMeasurement message, length delimited. Does not implicitly {@link BallSpeedMeasurement.verify|verify} messages.
   * @param message BallSpeedMeasurement message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: IBallSpeedMeasurement, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a BallSpeedMeasurement message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns BallSpeedMeasurement
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): BallSpeedMeasurement;

  /**
   * Decodes a BallSpeedMeasurement message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns BallSpeedMeasurement
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): BallSpeedMeasurement;

  /**
   * Verifies a BallSpeedMeasurement message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a BallSpeedMeasurement message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns BallSpeedMeasurement
   */
  public static fromObject(object: { [k: string]: any }): BallSpeedMeasurement;

  /**
   * Creates a plain object from a BallSpeedMeasurement message. Also converts values to other types if specified.
   * @param message BallSpeedMeasurement
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: BallSpeedMeasurement, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this BallSpeedMeasurement to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

/** Properties of a GameEvent. */
export interface IGameEvent {

  /** GameEvent type */
  type: GameEventType;

  /** GameEvent origin */
  origin?: (string[] | null);

  /** GameEvent prepared */
  prepared?: (GameEvent.IPrepared | null);

  /** GameEvent noProgressInGame */
  noProgressInGame?: (GameEvent.INoProgressInGame | null);

  /** GameEvent placementFailed */
  placementFailed?: (GameEvent.IPlacementFailed | null);

  /** GameEvent placementSucceeded */
  placementSucceeded?: (GameEvent.IPlacementSucceeded | null);

  /** GameEvent botSubstitution */
  botSubstitution?: (GameEvent.IBotSubstitution | null);

  /** GameEvent tooManyRobots */
  tooManyRobots?: (GameEvent.ITooManyRobots | null);

  /** GameEvent ballLeftFieldTouchLine */
  ballLeftFieldTouchLine?: (GameEvent.IBallLeftField | null);

  /** GameEvent ballLeftFieldGoalLine */
  ballLeftFieldGoalLine?: (GameEvent.IBallLeftField | null);

  /** GameEvent possibleGoal */
  possibleGoal?: (GameEvent.IGoal | null);

  /** GameEvent goal */
  goal?: (GameEvent.IGoal | null);

  /** GameEvent indirectGoal */
  indirectGoal?: (GameEvent.IIndirectGoal | null);

  /** GameEvent chippedGoal */
  chippedGoal?: (GameEvent.IChippedGoal | null);

  /** GameEvent aimlessKick */
  aimlessKick?: (GameEvent.IAimlessKick | null);

  /** GameEvent kickTimeout */
  kickTimeout?: (GameEvent.IKickTimeout | null);

  /** GameEvent keeperHeldBall */
  keeperHeldBall?: (GameEvent.IKeeperHeldBall | null);

  /** GameEvent attackerDoubleTouchedBall */
  attackerDoubleTouchedBall?: (GameEvent.IAttackerDoubleTouchedBall | null);

  /** GameEvent attackerInDefenseArea */
  attackerInDefenseArea?: (GameEvent.IAttackerInDefenseArea | null);

  /** GameEvent attackerTouchedKeeper */
  attackerTouchedKeeper?: (GameEvent.IAttackerTouchedKeeper | null);

  /** GameEvent botDribbledBallTooFar */
  botDribbledBallTooFar?: (GameEvent.IBotDribbledBallTooFar | null);

  /** GameEvent botKickedBallTooFast */
  botKickedBallTooFast?: (GameEvent.IBotKickedBallTooFast | null);

  /** GameEvent attackerTooCloseToDefenseArea */
  attackerTooCloseToDefenseArea?: (GameEvent.IAttackerTooCloseToDefenseArea | null);

  /** GameEvent botInterferedPlacement */
  botInterferedPlacement?: (GameEvent.IBotInterferedPlacement | null);

  /** GameEvent botCrashDrawn */
  botCrashDrawn?: (GameEvent.IBotCrashDrawn | null);

  /** GameEvent botCrashUnique */
  botCrashUnique?: (GameEvent.IBotCrashUnique | null);

  /** GameEvent botCrashUniqueSkipped */
  botCrashUniqueSkipped?: (GameEvent.IBotCrashUnique | null);

  /** GameEvent botPushedBot */
  botPushedBot?: (GameEvent.IBotPushedBot | null);

  /** GameEvent botPushedBotSkipped */
  botPushedBotSkipped?: (GameEvent.IBotPushedBot | null);

  /** GameEvent botHeldBallDeliberately */
  botHeldBallDeliberately?: (GameEvent.IBotHeldBallDeliberately | null);

  /** GameEvent botTippedOver */
  botTippedOver?: (GameEvent.IBotTippedOver | null);

  /** GameEvent botTooFastInStop */
  botTooFastInStop?: (GameEvent.IBotTooFastInStop | null);

  /** GameEvent defenderTooCloseToKickPoint */
  defenderTooCloseToKickPoint?: (GameEvent.IDefenderTooCloseToKickPoint | null);

  /** GameEvent defenderInDefenseAreaPartially */
  defenderInDefenseAreaPartially?: (GameEvent.IDefenderInDefenseAreaPartially | null);

  /** GameEvent defenderInDefenseArea */
  defenderInDefenseArea?: (GameEvent.IDefenderInDefenseArea | null);

  /** GameEvent multipleCards */
  multipleCards?: (GameEvent.IMultipleCards | null);

  /** GameEvent multiplePlacementFailures */
  multiplePlacementFailures?: (GameEvent.IMultiplePlacementFailures | null);

  /** GameEvent multipleFouls */
  multipleFouls?: (GameEvent.IMultipleFouls | null);

  /** GameEvent unsportingBehaviorMinor */
  unsportingBehaviorMinor?: (GameEvent.IUnsportingBehaviorMinor | null);

  /** GameEvent unsportingBehaviorMajor */
  unsportingBehaviorMajor?: (GameEvent.IUnsportingBehaviorMajor | null);
}

/** Represents a GameEvent. */
export class GameEvent implements IGameEvent {

  /** GameEvent type. */
  public type: GameEventType;
  /** GameEvent origin. */
  public origin: string[];
  /** GameEvent prepared. */
  public prepared?: (GameEvent.IPrepared | null);
  /** GameEvent noProgressInGame. */
  public noProgressInGame?: (GameEvent.INoProgressInGame | null);
  /** GameEvent placementFailed. */
  public placementFailed?: (GameEvent.IPlacementFailed | null);
  /** GameEvent placementSucceeded. */
  public placementSucceeded?: (GameEvent.IPlacementSucceeded | null);
  /** GameEvent botSubstitution. */
  public botSubstitution?: (GameEvent.IBotSubstitution | null);
  /** GameEvent tooManyRobots. */
  public tooManyRobots?: (GameEvent.ITooManyRobots | null);
  /** GameEvent ballLeftFieldTouchLine. */
  public ballLeftFieldTouchLine?: (GameEvent.IBallLeftField | null);
  /** GameEvent ballLeftFieldGoalLine. */
  public ballLeftFieldGoalLine?: (GameEvent.IBallLeftField | null);
  /** GameEvent possibleGoal. */
  public possibleGoal?: (GameEvent.IGoal | null);
  /** GameEvent goal. */
  public goal?: (GameEvent.IGoal | null);
  /** GameEvent indirectGoal. */
  public indirectGoal?: (GameEvent.IIndirectGoal | null);
  /** GameEvent chippedGoal. */
  public chippedGoal?: (GameEvent.IChippedGoal | null);
  /** GameEvent aimlessKick. */
  public aimlessKick?: (GameEvent.IAimlessKick | null);
  /** GameEvent kickTimeout. */
  public kickTimeout?: (GameEvent.IKickTimeout | null);
  /** GameEvent keeperHeldBall. */
  public keeperHeldBall?: (GameEvent.IKeeperHeldBall | null);
  /** GameEvent attackerDoubleTouchedBall. */
  public attackerDoubleTouchedBall?: (GameEvent.IAttackerDoubleTouchedBall | null);
  /** GameEvent attackerInDefenseArea. */
  public attackerInDefenseArea?: (GameEvent.IAttackerInDefenseArea | null);
  /** GameEvent attackerTouchedKeeper. */
  public attackerTouchedKeeper?: (GameEvent.IAttackerTouchedKeeper | null);
  /** GameEvent botDribbledBallTooFar. */
  public botDribbledBallTooFar?: (GameEvent.IBotDribbledBallTooFar | null);
  /** GameEvent botKickedBallTooFast. */
  public botKickedBallTooFast?: (GameEvent.IBotKickedBallTooFast | null);
  /** GameEvent attackerTooCloseToDefenseArea. */
  public attackerTooCloseToDefenseArea?: (GameEvent.IAttackerTooCloseToDefenseArea | null);
  /** GameEvent botInterferedPlacement. */
  public botInterferedPlacement?: (GameEvent.IBotInterferedPlacement | null);
  /** GameEvent botCrashDrawn. */
  public botCrashDrawn?: (GameEvent.IBotCrashDrawn | null);
  /** GameEvent botCrashUnique. */
  public botCrashUnique?: (GameEvent.IBotCrashUnique | null);
  /** GameEvent botCrashUniqueSkipped. */
  public botCrashUniqueSkipped?: (GameEvent.IBotCrashUnique | null);
  /** GameEvent botPushedBot. */
  public botPushedBot?: (GameEvent.IBotPushedBot | null);
  /** GameEvent botPushedBotSkipped. */
  public botPushedBotSkipped?: (GameEvent.IBotPushedBot | null);
  /** GameEvent botHeldBallDeliberately. */
  public botHeldBallDeliberately?: (GameEvent.IBotHeldBallDeliberately | null);
  /** GameEvent botTippedOver. */
  public botTippedOver?: (GameEvent.IBotTippedOver | null);
  /** GameEvent botTooFastInStop. */
  public botTooFastInStop?: (GameEvent.IBotTooFastInStop | null);
  /** GameEvent defenderTooCloseToKickPoint. */
  public defenderTooCloseToKickPoint?: (GameEvent.IDefenderTooCloseToKickPoint | null);
  /** GameEvent defenderInDefenseAreaPartially. */
  public defenderInDefenseAreaPartially?: (GameEvent.IDefenderInDefenseAreaPartially | null);
  /** GameEvent defenderInDefenseArea. */
  public defenderInDefenseArea?: (GameEvent.IDefenderInDefenseArea | null);
  /** GameEvent multipleCards. */
  public multipleCards?: (GameEvent.IMultipleCards | null);
  /** GameEvent multiplePlacementFailures. */
  public multiplePlacementFailures?: (GameEvent.IMultiplePlacementFailures | null);
  /** GameEvent multipleFouls. */
  public multipleFouls?: (GameEvent.IMultipleFouls | null);
  /** GameEvent unsportingBehaviorMinor. */
  public unsportingBehaviorMinor?: (GameEvent.IUnsportingBehaviorMinor | null);
  /** GameEvent unsportingBehaviorMajor. */
  public unsportingBehaviorMajor?: (GameEvent.IUnsportingBehaviorMajor | null);
  /** GameEvent event. */
  public event?: ("prepared" | "noProgressInGame" | "placementFailed" | "placementSucceeded" | "botSubstitution" | "tooManyRobots" | "ballLeftFieldTouchLine" | "ballLeftFieldGoalLine" | "possibleGoal" | "goal" | "indirectGoal" | "chippedGoal" | "aimlessKick" | "kickTimeout" | "keeperHeldBall" | "attackerDoubleTouchedBall" | "attackerInDefenseArea" | "attackerTouchedKeeper" | "botDribbledBallTooFar" | "botKickedBallTooFast" | "attackerTooCloseToDefenseArea" | "botInterferedPlacement" | "botCrashDrawn" | "botCrashUnique" | "botCrashUniqueSkipped" | "botPushedBot" | "botPushedBotSkipped" | "botHeldBallDeliberately" | "botTippedOver" | "botTooFastInStop" | "defenderTooCloseToKickPoint" | "defenderInDefenseAreaPartially" | "defenderInDefenseArea" | "multipleCards" | "multiplePlacementFailures" | "multipleFouls" | "unsportingBehaviorMinor" | "unsportingBehaviorMajor");

  /**
   * Constructs a new GameEvent.
   * @param [properties] Properties to set
   */
  constructor(properties?: IGameEvent);

  /**
   * Creates a new GameEvent instance using the specified properties.
   * @param [properties] Properties to set
   * @returns GameEvent instance
   */
  public static create(properties?: IGameEvent): GameEvent;

  /**
   * Encodes the specified GameEvent message. Does not implicitly {@link GameEvent.verify|verify} messages.
   * @param message GameEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: IGameEvent, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified GameEvent message, length delimited. Does not implicitly {@link GameEvent.verify|verify} messages.
   * @param message GameEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: IGameEvent, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a GameEvent message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns GameEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent;

  /**
   * Decodes a GameEvent message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns GameEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent;

  /**
   * Verifies a GameEvent message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a GameEvent message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns GameEvent
   */
  public static fromObject(object: { [k: string]: any }): GameEvent;

  /**
   * Creates a plain object from a GameEvent message. Also converts values to other types if specified.
   * @param message GameEvent
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: GameEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this GameEvent to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

export namespace GameEvent {

  /** Properties of a BallLeftField. */
  interface IBallLeftField {

    /** BallLeftField byTeam */
    byTeam: Team;

    /** BallLeftField byBot */
    byBot?: (number | null);

    /** BallLeftField location */
    location?: (ILocation | null);
  }

  /** Represents a BallLeftField. */
  class BallLeftField implements IBallLeftField {

    /** BallLeftField byTeam. */
    public byTeam: Team;
    /** BallLeftField byBot. */
    public byBot: number;
    /** BallLeftField location. */
    public location?: (ILocation | null);

    /**
     * Constructs a new BallLeftField.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IBallLeftField);

    /**
     * Creates a new BallLeftField instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BallLeftField instance
     */
    public static create(properties?: GameEvent.IBallLeftField): GameEvent.BallLeftField;

    /**
     * Encodes the specified BallLeftField message. Does not implicitly {@link GameEvent.BallLeftField.verify|verify} messages.
     * @param message BallLeftField message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IBallLeftField, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BallLeftField message, length delimited. Does not implicitly {@link GameEvent.BallLeftField.verify|verify} messages.
     * @param message BallLeftField message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IBallLeftField, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BallLeftField message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BallLeftField
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.BallLeftField;

    /**
     * Decodes a BallLeftField message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BallLeftField
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.BallLeftField;

    /**
     * Verifies a BallLeftField message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a BallLeftField message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BallLeftField
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.BallLeftField;

    /**
     * Creates a plain object from a BallLeftField message. Also converts values to other types if specified.
     * @param message BallLeftField
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.BallLeftField, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BallLeftField to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an AimlessKick. */
  interface IAimlessKick {

    /** AimlessKick byTeam */
    byTeam: Team;

    /** AimlessKick byBot */
    byBot?: (number | null);

    /** AimlessKick location */
    location?: (ILocation | null);

    /** AimlessKick kickLocation */
    kickLocation?: (ILocation | null);
  }

  /** Represents an AimlessKick. */
  class AimlessKick implements IAimlessKick {

    /** AimlessKick byTeam. */
    public byTeam: Team;
    /** AimlessKick byBot. */
    public byBot: number;
    /** AimlessKick location. */
    public location?: (ILocation | null);
    /** AimlessKick kickLocation. */
    public kickLocation?: (ILocation | null);

    /**
     * Constructs a new AimlessKick.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IAimlessKick);

    /**
     * Creates a new AimlessKick instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AimlessKick instance
     */
    public static create(properties?: GameEvent.IAimlessKick): GameEvent.AimlessKick;

    /**
     * Encodes the specified AimlessKick message. Does not implicitly {@link GameEvent.AimlessKick.verify|verify} messages.
     * @param message AimlessKick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IAimlessKick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AimlessKick message, length delimited. Does not implicitly {@link GameEvent.AimlessKick.verify|verify} messages.
     * @param message AimlessKick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IAimlessKick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AimlessKick message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AimlessKick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.AimlessKick;

    /**
     * Decodes an AimlessKick message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AimlessKick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.AimlessKick;

    /**
     * Verifies an AimlessKick message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates an AimlessKick message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AimlessKick
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.AimlessKick;

    /**
     * Creates a plain object from an AimlessKick message. Also converts values to other types if specified.
     * @param message AimlessKick
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.AimlessKick, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AimlessKick to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a Goal. */
  interface IGoal {

    /** Goal byTeam */
    byTeam: Team;

    /** Goal kickingTeam */
    kickingTeam?: (Team | null);

    /** Goal kickingBot */
    kickingBot?: (number | null);

    /** Goal location */
    location?: (ILocation | null);

    /** Goal kickLocation */
    kickLocation?: (ILocation | null);
  }

  /** Represents a Goal. */
  class Goal implements IGoal {

    /** Goal byTeam. */
    public byTeam: Team;
    /** Goal kickingTeam. */
    public kickingTeam: Team;
    /** Goal kickingBot. */
    public kickingBot: number;
    /** Goal location. */
    public location?: (ILocation | null);
    /** Goal kickLocation. */
    public kickLocation?: (ILocation | null);

    /**
     * Constructs a new Goal.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IGoal);

    /**
     * Creates a new Goal instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Goal instance
     */
    public static create(properties?: GameEvent.IGoal): GameEvent.Goal;

    /**
     * Encodes the specified Goal message. Does not implicitly {@link GameEvent.Goal.verify|verify} messages.
     * @param message Goal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IGoal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Goal message, length delimited. Does not implicitly {@link GameEvent.Goal.verify|verify} messages.
     * @param message Goal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IGoal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Goal message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Goal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.Goal;

    /**
     * Decodes a Goal message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Goal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.Goal;

    /**
     * Verifies a Goal message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a Goal message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Goal
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.Goal;

    /**
     * Creates a plain object from a Goal message. Also converts values to other types if specified.
     * @param message Goal
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.Goal, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Goal to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an IndirectGoal. */
  interface IIndirectGoal {

    /** IndirectGoal byTeam */
    byTeam: Team;

    /** IndirectGoal byBot */
    byBot?: (number | null);

    /** IndirectGoal location */
    location?: (ILocation | null);

    /** IndirectGoal kickLocation */
    kickLocation?: (ILocation | null);
  }

  /** Represents an IndirectGoal. */
  class IndirectGoal implements IIndirectGoal {

    /** IndirectGoal byTeam. */
    public byTeam: Team;
    /** IndirectGoal byBot. */
    public byBot: number;
    /** IndirectGoal location. */
    public location?: (ILocation | null);
    /** IndirectGoal kickLocation. */
    public kickLocation?: (ILocation | null);

    /**
     * Constructs a new IndirectGoal.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IIndirectGoal);

    /**
     * Creates a new IndirectGoal instance using the specified properties.
     * @param [properties] Properties to set
     * @returns IndirectGoal instance
     */
    public static create(properties?: GameEvent.IIndirectGoal): GameEvent.IndirectGoal;

    /**
     * Encodes the specified IndirectGoal message. Does not implicitly {@link GameEvent.IndirectGoal.verify|verify} messages.
     * @param message IndirectGoal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IIndirectGoal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified IndirectGoal message, length delimited. Does not implicitly {@link GameEvent.IndirectGoal.verify|verify} messages.
     * @param message IndirectGoal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IIndirectGoal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an IndirectGoal message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns IndirectGoal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.IndirectGoal;

    /**
     * Decodes an IndirectGoal message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns IndirectGoal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.IndirectGoal;

    /**
     * Verifies an IndirectGoal message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates an IndirectGoal message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns IndirectGoal
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.IndirectGoal;

    /**
     * Creates a plain object from an IndirectGoal message. Also converts values to other types if specified.
     * @param message IndirectGoal
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.IndirectGoal, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this IndirectGoal to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ChippedGoal. */
  interface IChippedGoal {

    /** ChippedGoal byTeam */
    byTeam: Team;

    /** ChippedGoal byBot */
    byBot?: (number | null);

    /** ChippedGoal location */
    location?: (ILocation | null);

    /** ChippedGoal kickLocation */
    kickLocation?: (ILocation | null);

    /** ChippedGoal maxBallHeight */
    maxBallHeight?: (number | null);
  }

  /** Represents a ChippedGoal. */
  class ChippedGoal implements IChippedGoal {

    /** ChippedGoal byTeam. */
    public byTeam: Team;
    /** ChippedGoal byBot. */
    public byBot: number;
    /** ChippedGoal location. */
    public location?: (ILocation | null);
    /** ChippedGoal kickLocation. */
    public kickLocation?: (ILocation | null);
    /** ChippedGoal maxBallHeight. */
    public maxBallHeight: number;

    /**
     * Constructs a new ChippedGoal.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IChippedGoal);

    /**
     * Creates a new ChippedGoal instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChippedGoal instance
     */
    public static create(properties?: GameEvent.IChippedGoal): GameEvent.ChippedGoal;

    /**
     * Encodes the specified ChippedGoal message. Does not implicitly {@link GameEvent.ChippedGoal.verify|verify} messages.
     * @param message ChippedGoal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IChippedGoal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChippedGoal message, length delimited. Does not implicitly {@link GameEvent.ChippedGoal.verify|verify} messages.
     * @param message ChippedGoal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IChippedGoal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChippedGoal message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChippedGoal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.ChippedGoal;

    /**
     * Decodes a ChippedGoal message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChippedGoal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.ChippedGoal;

    /**
     * Verifies a ChippedGoal message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a ChippedGoal message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChippedGoal
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.ChippedGoal;

    /**
     * Creates a plain object from a ChippedGoal message. Also converts values to other types if specified.
     * @param message ChippedGoal
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.ChippedGoal, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChippedGoal to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BotTooFastInStop. */
  interface IBotTooFastInStop {

    /** BotTooFastInStop byTeam */
    byTeam: Team;

    /** BotTooFastInStop byBot */
    byBot?: (number | null);

    /** BotTooFastInStop location */
    location?: (ILocation | null);

    /** BotTooFastInStop speed */
    speed?: (number | null);
  }

  /** Represents a BotTooFastInStop. */
  class BotTooFastInStop implements IBotTooFastInStop {

    /** BotTooFastInStop byTeam. */
    public byTeam: Team;
    /** BotTooFastInStop byBot. */
    public byBot: number;
    /** BotTooFastInStop location. */
    public location?: (ILocation | null);
    /** BotTooFastInStop speed. */
    public speed: number;

    /**
     * Constructs a new BotTooFastInStop.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IBotTooFastInStop);

    /**
     * Creates a new BotTooFastInStop instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BotTooFastInStop instance
     */
    public static create(properties?: GameEvent.IBotTooFastInStop): GameEvent.BotTooFastInStop;

    /**
     * Encodes the specified BotTooFastInStop message. Does not implicitly {@link GameEvent.BotTooFastInStop.verify|verify} messages.
     * @param message BotTooFastInStop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IBotTooFastInStop, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BotTooFastInStop message, length delimited. Does not implicitly {@link GameEvent.BotTooFastInStop.verify|verify} messages.
     * @param message BotTooFastInStop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IBotTooFastInStop, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BotTooFastInStop message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BotTooFastInStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.BotTooFastInStop;

    /**
     * Decodes a BotTooFastInStop message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BotTooFastInStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.BotTooFastInStop;

    /**
     * Verifies a BotTooFastInStop message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a BotTooFastInStop message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BotTooFastInStop
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.BotTooFastInStop;

    /**
     * Creates a plain object from a BotTooFastInStop message. Also converts values to other types if specified.
     * @param message BotTooFastInStop
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.BotTooFastInStop, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BotTooFastInStop to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a DefenderTooCloseToKickPoint. */
  interface IDefenderTooCloseToKickPoint {

    /** DefenderTooCloseToKickPoint byTeam */
    byTeam: Team;

    /** DefenderTooCloseToKickPoint byBot */
    byBot?: (number | null);

    /** DefenderTooCloseToKickPoint location */
    location?: (ILocation | null);

    /** DefenderTooCloseToKickPoint distance */
    distance?: (number | null);
  }

  /** Represents a DefenderTooCloseToKickPoint. */
  class DefenderTooCloseToKickPoint implements IDefenderTooCloseToKickPoint {

    /** DefenderTooCloseToKickPoint byTeam. */
    public byTeam: Team;
    /** DefenderTooCloseToKickPoint byBot. */
    public byBot: number;
    /** DefenderTooCloseToKickPoint location. */
    public location?: (ILocation | null);
    /** DefenderTooCloseToKickPoint distance. */
    public distance: number;

    /**
     * Constructs a new DefenderTooCloseToKickPoint.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IDefenderTooCloseToKickPoint);

    /**
     * Creates a new DefenderTooCloseToKickPoint instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DefenderTooCloseToKickPoint instance
     */
    public static create(properties?: GameEvent.IDefenderTooCloseToKickPoint): GameEvent.DefenderTooCloseToKickPoint;

    /**
     * Encodes the specified DefenderTooCloseToKickPoint message. Does not implicitly {@link GameEvent.DefenderTooCloseToKickPoint.verify|verify} messages.
     * @param message DefenderTooCloseToKickPoint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IDefenderTooCloseToKickPoint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DefenderTooCloseToKickPoint message, length delimited. Does not implicitly {@link GameEvent.DefenderTooCloseToKickPoint.verify|verify} messages.
     * @param message DefenderTooCloseToKickPoint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IDefenderTooCloseToKickPoint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DefenderTooCloseToKickPoint message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DefenderTooCloseToKickPoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.DefenderTooCloseToKickPoint;

    /**
     * Decodes a DefenderTooCloseToKickPoint message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DefenderTooCloseToKickPoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.DefenderTooCloseToKickPoint;

    /**
     * Verifies a DefenderTooCloseToKickPoint message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a DefenderTooCloseToKickPoint message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DefenderTooCloseToKickPoint
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.DefenderTooCloseToKickPoint;

    /**
     * Creates a plain object from a DefenderTooCloseToKickPoint message. Also converts values to other types if specified.
     * @param message DefenderTooCloseToKickPoint
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.DefenderTooCloseToKickPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DefenderTooCloseToKickPoint to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BotCrashDrawn. */
  interface IBotCrashDrawn {

    /** BotCrashDrawn botYellow */
    botYellow?: (number | null);

    /** BotCrashDrawn botBlue */
    botBlue?: (number | null);

    /** BotCrashDrawn location */
    location?: (ILocation | null);

    /** BotCrashDrawn crashSpeed */
    crashSpeed?: (number | null);

    /** BotCrashDrawn speedDiff */
    speedDiff?: (number | null);

    /** BotCrashDrawn crashAngle */
    crashAngle?: (number | null);
  }

  /** Represents a BotCrashDrawn. */
  class BotCrashDrawn implements IBotCrashDrawn {

    /** BotCrashDrawn botYellow. */
    public botYellow: number;
    /** BotCrashDrawn botBlue. */
    public botBlue: number;
    /** BotCrashDrawn location. */
    public location?: (ILocation | null);
    /** BotCrashDrawn crashSpeed. */
    public crashSpeed: number;
    /** BotCrashDrawn speedDiff. */
    public speedDiff: number;
    /** BotCrashDrawn crashAngle. */
    public crashAngle: number;

    /**
     * Constructs a new BotCrashDrawn.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IBotCrashDrawn);

    /**
     * Creates a new BotCrashDrawn instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BotCrashDrawn instance
     */
    public static create(properties?: GameEvent.IBotCrashDrawn): GameEvent.BotCrashDrawn;

    /**
     * Encodes the specified BotCrashDrawn message. Does not implicitly {@link GameEvent.BotCrashDrawn.verify|verify} messages.
     * @param message BotCrashDrawn message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IBotCrashDrawn, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BotCrashDrawn message, length delimited. Does not implicitly {@link GameEvent.BotCrashDrawn.verify|verify} messages.
     * @param message BotCrashDrawn message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IBotCrashDrawn, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BotCrashDrawn message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BotCrashDrawn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.BotCrashDrawn;

    /**
     * Decodes a BotCrashDrawn message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BotCrashDrawn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.BotCrashDrawn;

    /**
     * Verifies a BotCrashDrawn message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a BotCrashDrawn message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BotCrashDrawn
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.BotCrashDrawn;

    /**
     * Creates a plain object from a BotCrashDrawn message. Also converts values to other types if specified.
     * @param message BotCrashDrawn
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.BotCrashDrawn, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BotCrashDrawn to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BotCrashUnique. */
  interface IBotCrashUnique {

    /** BotCrashUnique byTeam */
    byTeam: Team;

    /** BotCrashUnique violator */
    violator?: (number | null);

    /** BotCrashUnique victim */
    victim?: (number | null);

    /** BotCrashUnique location */
    location?: (ILocation | null);

    /** BotCrashUnique crashSpeed */
    crashSpeed?: (number | null);

    /** BotCrashUnique speedDiff */
    speedDiff?: (number | null);

    /** BotCrashUnique crashAngle */
    crashAngle?: (number | null);
  }

  /** Represents a BotCrashUnique. */
  class BotCrashUnique implements IBotCrashUnique {

    /** BotCrashUnique byTeam. */
    public byTeam: Team;
    /** BotCrashUnique violator. */
    public violator: number;
    /** BotCrashUnique victim. */
    public victim: number;
    /** BotCrashUnique location. */
    public location?: (ILocation | null);
    /** BotCrashUnique crashSpeed. */
    public crashSpeed: number;
    /** BotCrashUnique speedDiff. */
    public speedDiff: number;
    /** BotCrashUnique crashAngle. */
    public crashAngle: number;

    /**
     * Constructs a new BotCrashUnique.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IBotCrashUnique);

    /**
     * Creates a new BotCrashUnique instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BotCrashUnique instance
     */
    public static create(properties?: GameEvent.IBotCrashUnique): GameEvent.BotCrashUnique;

    /**
     * Encodes the specified BotCrashUnique message. Does not implicitly {@link GameEvent.BotCrashUnique.verify|verify} messages.
     * @param message BotCrashUnique message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IBotCrashUnique, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BotCrashUnique message, length delimited. Does not implicitly {@link GameEvent.BotCrashUnique.verify|verify} messages.
     * @param message BotCrashUnique message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IBotCrashUnique, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BotCrashUnique message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BotCrashUnique
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.BotCrashUnique;

    /**
     * Decodes a BotCrashUnique message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BotCrashUnique
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.BotCrashUnique;

    /**
     * Verifies a BotCrashUnique message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a BotCrashUnique message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BotCrashUnique
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.BotCrashUnique;

    /**
     * Creates a plain object from a BotCrashUnique message. Also converts values to other types if specified.
     * @param message BotCrashUnique
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.BotCrashUnique, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BotCrashUnique to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BotPushedBot. */
  interface IBotPushedBot {

    /** BotPushedBot byTeam */
    byTeam: Team;

    /** BotPushedBot violator */
    violator?: (number | null);

    /** BotPushedBot victim */
    victim?: (number | null);

    /** BotPushedBot location */
    location?: (ILocation | null);

    /** BotPushedBot pushedDistance */
    pushedDistance?: (number | null);
  }

  /** Represents a BotPushedBot. */
  class BotPushedBot implements IBotPushedBot {

    /** BotPushedBot byTeam. */
    public byTeam: Team;
    /** BotPushedBot violator. */
    public violator: number;
    /** BotPushedBot victim. */
    public victim: number;
    /** BotPushedBot location. */
    public location?: (ILocation | null);
    /** BotPushedBot pushedDistance. */
    public pushedDistance: number;

    /**
     * Constructs a new BotPushedBot.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IBotPushedBot);

    /**
     * Creates a new BotPushedBot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BotPushedBot instance
     */
    public static create(properties?: GameEvent.IBotPushedBot): GameEvent.BotPushedBot;

    /**
     * Encodes the specified BotPushedBot message. Does not implicitly {@link GameEvent.BotPushedBot.verify|verify} messages.
     * @param message BotPushedBot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IBotPushedBot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BotPushedBot message, length delimited. Does not implicitly {@link GameEvent.BotPushedBot.verify|verify} messages.
     * @param message BotPushedBot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IBotPushedBot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BotPushedBot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BotPushedBot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.BotPushedBot;

    /**
     * Decodes a BotPushedBot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BotPushedBot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.BotPushedBot;

    /**
     * Verifies a BotPushedBot message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a BotPushedBot message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BotPushedBot
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.BotPushedBot;

    /**
     * Creates a plain object from a BotPushedBot message. Also converts values to other types if specified.
     * @param message BotPushedBot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.BotPushedBot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BotPushedBot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BotTippedOver. */
  interface IBotTippedOver {

    /** BotTippedOver byTeam */
    byTeam: Team;

    /** BotTippedOver byBot */
    byBot?: (number | null);

    /** BotTippedOver location */
    location?: (ILocation | null);
  }

  /** Represents a BotTippedOver. */
  class BotTippedOver implements IBotTippedOver {

    /** BotTippedOver byTeam. */
    public byTeam: Team;
    /** BotTippedOver byBot. */
    public byBot: number;
    /** BotTippedOver location. */
    public location?: (ILocation | null);

    /**
     * Constructs a new BotTippedOver.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IBotTippedOver);

    /**
     * Creates a new BotTippedOver instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BotTippedOver instance
     */
    public static create(properties?: GameEvent.IBotTippedOver): GameEvent.BotTippedOver;

    /**
     * Encodes the specified BotTippedOver message. Does not implicitly {@link GameEvent.BotTippedOver.verify|verify} messages.
     * @param message BotTippedOver message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IBotTippedOver, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BotTippedOver message, length delimited. Does not implicitly {@link GameEvent.BotTippedOver.verify|verify} messages.
     * @param message BotTippedOver message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IBotTippedOver, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BotTippedOver message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BotTippedOver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.BotTippedOver;

    /**
     * Decodes a BotTippedOver message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BotTippedOver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.BotTippedOver;

    /**
     * Verifies a BotTippedOver message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a BotTippedOver message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BotTippedOver
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.BotTippedOver;

    /**
     * Creates a plain object from a BotTippedOver message. Also converts values to other types if specified.
     * @param message BotTippedOver
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.BotTippedOver, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BotTippedOver to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a DefenderInDefenseArea. */
  interface IDefenderInDefenseArea {

    /** DefenderInDefenseArea byTeam */
    byTeam: Team;

    /** DefenderInDefenseArea byBot */
    byBot?: (number | null);

    /** DefenderInDefenseArea location */
    location?: (ILocation | null);

    /** DefenderInDefenseArea distance */
    distance?: (number | null);
  }

  /** Represents a DefenderInDefenseArea. */
  class DefenderInDefenseArea implements IDefenderInDefenseArea {

    /** DefenderInDefenseArea byTeam. */
    public byTeam: Team;
    /** DefenderInDefenseArea byBot. */
    public byBot: number;
    /** DefenderInDefenseArea location. */
    public location?: (ILocation | null);
    /** DefenderInDefenseArea distance. */
    public distance: number;

    /**
     * Constructs a new DefenderInDefenseArea.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IDefenderInDefenseArea);

    /**
     * Creates a new DefenderInDefenseArea instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DefenderInDefenseArea instance
     */
    public static create(properties?: GameEvent.IDefenderInDefenseArea): GameEvent.DefenderInDefenseArea;

    /**
     * Encodes the specified DefenderInDefenseArea message. Does not implicitly {@link GameEvent.DefenderInDefenseArea.verify|verify} messages.
     * @param message DefenderInDefenseArea message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IDefenderInDefenseArea, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DefenderInDefenseArea message, length delimited. Does not implicitly {@link GameEvent.DefenderInDefenseArea.verify|verify} messages.
     * @param message DefenderInDefenseArea message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IDefenderInDefenseArea, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DefenderInDefenseArea message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DefenderInDefenseArea
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.DefenderInDefenseArea;

    /**
     * Decodes a DefenderInDefenseArea message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DefenderInDefenseArea
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.DefenderInDefenseArea;

    /**
     * Verifies a DefenderInDefenseArea message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a DefenderInDefenseArea message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DefenderInDefenseArea
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.DefenderInDefenseArea;

    /**
     * Creates a plain object from a DefenderInDefenseArea message. Also converts values to other types if specified.
     * @param message DefenderInDefenseArea
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.DefenderInDefenseArea, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DefenderInDefenseArea to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a DefenderInDefenseAreaPartially. */
  interface IDefenderInDefenseAreaPartially {

    /** DefenderInDefenseAreaPartially byTeam */
    byTeam: Team;

    /** DefenderInDefenseAreaPartially byBot */
    byBot?: (number | null);

    /** DefenderInDefenseAreaPartially location */
    location?: (ILocation | null);

    /** DefenderInDefenseAreaPartially distance */
    distance?: (number | null);
  }

  /** Represents a DefenderInDefenseAreaPartially. */
  class DefenderInDefenseAreaPartially implements IDefenderInDefenseAreaPartially {

    /** DefenderInDefenseAreaPartially byTeam. */
    public byTeam: Team;
    /** DefenderInDefenseAreaPartially byBot. */
    public byBot: number;
    /** DefenderInDefenseAreaPartially location. */
    public location?: (ILocation | null);
    /** DefenderInDefenseAreaPartially distance. */
    public distance: number;

    /**
     * Constructs a new DefenderInDefenseAreaPartially.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IDefenderInDefenseAreaPartially);

    /**
     * Creates a new DefenderInDefenseAreaPartially instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DefenderInDefenseAreaPartially instance
     */
    public static create(properties?: GameEvent.IDefenderInDefenseAreaPartially): GameEvent.DefenderInDefenseAreaPartially;

    /**
     * Encodes the specified DefenderInDefenseAreaPartially message. Does not implicitly {@link GameEvent.DefenderInDefenseAreaPartially.verify|verify} messages.
     * @param message DefenderInDefenseAreaPartially message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IDefenderInDefenseAreaPartially, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DefenderInDefenseAreaPartially message, length delimited. Does not implicitly {@link GameEvent.DefenderInDefenseAreaPartially.verify|verify} messages.
     * @param message DefenderInDefenseAreaPartially message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IDefenderInDefenseAreaPartially, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DefenderInDefenseAreaPartially message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DefenderInDefenseAreaPartially
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.DefenderInDefenseAreaPartially;

    /**
     * Decodes a DefenderInDefenseAreaPartially message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DefenderInDefenseAreaPartially
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.DefenderInDefenseAreaPartially;

    /**
     * Verifies a DefenderInDefenseAreaPartially message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a DefenderInDefenseAreaPartially message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DefenderInDefenseAreaPartially
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.DefenderInDefenseAreaPartially;

    /**
     * Creates a plain object from a DefenderInDefenseAreaPartially message. Also converts values to other types if specified.
     * @param message DefenderInDefenseAreaPartially
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.DefenderInDefenseAreaPartially, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DefenderInDefenseAreaPartially to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an AttackerInDefenseArea. */
  interface IAttackerInDefenseArea {

    /** AttackerInDefenseArea byTeam */
    byTeam: Team;

    /** AttackerInDefenseArea byBot */
    byBot?: (number | null);

    /** AttackerInDefenseArea location */
    location?: (ILocation | null);

    /** AttackerInDefenseArea distance */
    distance?: (number | null);
  }

  /** Represents an AttackerInDefenseArea. */
  class AttackerInDefenseArea implements IAttackerInDefenseArea {

    /** AttackerInDefenseArea byTeam. */
    public byTeam: Team;
    /** AttackerInDefenseArea byBot. */
    public byBot: number;
    /** AttackerInDefenseArea location. */
    public location?: (ILocation | null);
    /** AttackerInDefenseArea distance. */
    public distance: number;

    /**
     * Constructs a new AttackerInDefenseArea.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IAttackerInDefenseArea);

    /**
     * Creates a new AttackerInDefenseArea instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AttackerInDefenseArea instance
     */
    public static create(properties?: GameEvent.IAttackerInDefenseArea): GameEvent.AttackerInDefenseArea;

    /**
     * Encodes the specified AttackerInDefenseArea message. Does not implicitly {@link GameEvent.AttackerInDefenseArea.verify|verify} messages.
     * @param message AttackerInDefenseArea message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IAttackerInDefenseArea, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AttackerInDefenseArea message, length delimited. Does not implicitly {@link GameEvent.AttackerInDefenseArea.verify|verify} messages.
     * @param message AttackerInDefenseArea message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IAttackerInDefenseArea, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AttackerInDefenseArea message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AttackerInDefenseArea
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.AttackerInDefenseArea;

    /**
     * Decodes an AttackerInDefenseArea message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AttackerInDefenseArea
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.AttackerInDefenseArea;

    /**
     * Verifies an AttackerInDefenseArea message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates an AttackerInDefenseArea message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AttackerInDefenseArea
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.AttackerInDefenseArea;

    /**
     * Creates a plain object from an AttackerInDefenseArea message. Also converts values to other types if specified.
     * @param message AttackerInDefenseArea
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.AttackerInDefenseArea, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AttackerInDefenseArea to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BotKickedBallTooFast. */
  interface IBotKickedBallTooFast {

    /** BotKickedBallTooFast byTeam */
    byTeam: Team;

    /** BotKickedBallTooFast byBot */
    byBot?: (number | null);

    /** BotKickedBallTooFast location */
    location?: (ILocation | null);

    /** BotKickedBallTooFast initialBallSpeed */
    initialBallSpeed?: (number | null);

    /** BotKickedBallTooFast chipped */
    chipped?: (boolean | null);
  }

  /** Represents a BotKickedBallTooFast. */
  class BotKickedBallTooFast implements IBotKickedBallTooFast {

    /** BotKickedBallTooFast byTeam. */
    public byTeam: Team;
    /** BotKickedBallTooFast byBot. */
    public byBot: number;
    /** BotKickedBallTooFast location. */
    public location?: (ILocation | null);
    /** BotKickedBallTooFast initialBallSpeed. */
    public initialBallSpeed: number;
    /** BotKickedBallTooFast chipped. */
    public chipped: boolean;

    /**
     * Constructs a new BotKickedBallTooFast.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IBotKickedBallTooFast);

    /**
     * Creates a new BotKickedBallTooFast instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BotKickedBallTooFast instance
     */
    public static create(properties?: GameEvent.IBotKickedBallTooFast): GameEvent.BotKickedBallTooFast;

    /**
     * Encodes the specified BotKickedBallTooFast message. Does not implicitly {@link GameEvent.BotKickedBallTooFast.verify|verify} messages.
     * @param message BotKickedBallTooFast message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IBotKickedBallTooFast, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BotKickedBallTooFast message, length delimited. Does not implicitly {@link GameEvent.BotKickedBallTooFast.verify|verify} messages.
     * @param message BotKickedBallTooFast message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IBotKickedBallTooFast, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BotKickedBallTooFast message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BotKickedBallTooFast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.BotKickedBallTooFast;

    /**
     * Decodes a BotKickedBallTooFast message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BotKickedBallTooFast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.BotKickedBallTooFast;

    /**
     * Verifies a BotKickedBallTooFast message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a BotKickedBallTooFast message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BotKickedBallTooFast
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.BotKickedBallTooFast;

    /**
     * Creates a plain object from a BotKickedBallTooFast message. Also converts values to other types if specified.
     * @param message BotKickedBallTooFast
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.BotKickedBallTooFast, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BotKickedBallTooFast to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BotDribbledBallTooFar. */
  interface IBotDribbledBallTooFar {

    /** BotDribbledBallTooFar byTeam */
    byTeam: Team;

    /** BotDribbledBallTooFar byBot */
    byBot?: (number | null);

    /** BotDribbledBallTooFar start */
    start?: (ILocation | null);

    /** BotDribbledBallTooFar end */
    end?: (ILocation | null);
  }

  /** Represents a BotDribbledBallTooFar. */
  class BotDribbledBallTooFar implements IBotDribbledBallTooFar {

    /** BotDribbledBallTooFar byTeam. */
    public byTeam: Team;
    /** BotDribbledBallTooFar byBot. */
    public byBot: number;
    /** BotDribbledBallTooFar start. */
    public start?: (ILocation | null);
    /** BotDribbledBallTooFar end. */
    public end?: (ILocation | null);

    /**
     * Constructs a new BotDribbledBallTooFar.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IBotDribbledBallTooFar);

    /**
     * Creates a new BotDribbledBallTooFar instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BotDribbledBallTooFar instance
     */
    public static create(properties?: GameEvent.IBotDribbledBallTooFar): GameEvent.BotDribbledBallTooFar;

    /**
     * Encodes the specified BotDribbledBallTooFar message. Does not implicitly {@link GameEvent.BotDribbledBallTooFar.verify|verify} messages.
     * @param message BotDribbledBallTooFar message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IBotDribbledBallTooFar, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BotDribbledBallTooFar message, length delimited. Does not implicitly {@link GameEvent.BotDribbledBallTooFar.verify|verify} messages.
     * @param message BotDribbledBallTooFar message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IBotDribbledBallTooFar, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BotDribbledBallTooFar message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BotDribbledBallTooFar
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.BotDribbledBallTooFar;

    /**
     * Decodes a BotDribbledBallTooFar message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BotDribbledBallTooFar
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.BotDribbledBallTooFar;

    /**
     * Verifies a BotDribbledBallTooFar message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a BotDribbledBallTooFar message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BotDribbledBallTooFar
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.BotDribbledBallTooFar;

    /**
     * Creates a plain object from a BotDribbledBallTooFar message. Also converts values to other types if specified.
     * @param message BotDribbledBallTooFar
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.BotDribbledBallTooFar, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BotDribbledBallTooFar to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an AttackerTouchedKeeper. */
  interface IAttackerTouchedKeeper {

    /** AttackerTouchedKeeper byTeam */
    byTeam: Team;

    /** AttackerTouchedKeeper byBot */
    byBot?: (number | null);

    /** AttackerTouchedKeeper location */
    location?: (ILocation | null);
  }

  /** Represents an AttackerTouchedKeeper. */
  class AttackerTouchedKeeper implements IAttackerTouchedKeeper {

    /** AttackerTouchedKeeper byTeam. */
    public byTeam: Team;
    /** AttackerTouchedKeeper byBot. */
    public byBot: number;
    /** AttackerTouchedKeeper location. */
    public location?: (ILocation | null);

    /**
     * Constructs a new AttackerTouchedKeeper.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IAttackerTouchedKeeper);

    /**
     * Creates a new AttackerTouchedKeeper instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AttackerTouchedKeeper instance
     */
    public static create(properties?: GameEvent.IAttackerTouchedKeeper): GameEvent.AttackerTouchedKeeper;

    /**
     * Encodes the specified AttackerTouchedKeeper message. Does not implicitly {@link GameEvent.AttackerTouchedKeeper.verify|verify} messages.
     * @param message AttackerTouchedKeeper message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IAttackerTouchedKeeper, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AttackerTouchedKeeper message, length delimited. Does not implicitly {@link GameEvent.AttackerTouchedKeeper.verify|verify} messages.
     * @param message AttackerTouchedKeeper message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IAttackerTouchedKeeper, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AttackerTouchedKeeper message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AttackerTouchedKeeper
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.AttackerTouchedKeeper;

    /**
     * Decodes an AttackerTouchedKeeper message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AttackerTouchedKeeper
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.AttackerTouchedKeeper;

    /**
     * Verifies an AttackerTouchedKeeper message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates an AttackerTouchedKeeper message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AttackerTouchedKeeper
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.AttackerTouchedKeeper;

    /**
     * Creates a plain object from an AttackerTouchedKeeper message. Also converts values to other types if specified.
     * @param message AttackerTouchedKeeper
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.AttackerTouchedKeeper, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AttackerTouchedKeeper to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an AttackerDoubleTouchedBall. */
  interface IAttackerDoubleTouchedBall {

    /** AttackerDoubleTouchedBall byTeam */
    byTeam: Team;

    /** AttackerDoubleTouchedBall byBot */
    byBot?: (number | null);

    /** AttackerDoubleTouchedBall location */
    location?: (ILocation | null);
  }

  /** Represents an AttackerDoubleTouchedBall. */
  class AttackerDoubleTouchedBall implements IAttackerDoubleTouchedBall {

    /** AttackerDoubleTouchedBall byTeam. */
    public byTeam: Team;
    /** AttackerDoubleTouchedBall byBot. */
    public byBot: number;
    /** AttackerDoubleTouchedBall location. */
    public location?: (ILocation | null);

    /**
     * Constructs a new AttackerDoubleTouchedBall.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IAttackerDoubleTouchedBall);

    /**
     * Creates a new AttackerDoubleTouchedBall instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AttackerDoubleTouchedBall instance
     */
    public static create(properties?: GameEvent.IAttackerDoubleTouchedBall): GameEvent.AttackerDoubleTouchedBall;

    /**
     * Encodes the specified AttackerDoubleTouchedBall message. Does not implicitly {@link GameEvent.AttackerDoubleTouchedBall.verify|verify} messages.
     * @param message AttackerDoubleTouchedBall message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IAttackerDoubleTouchedBall, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AttackerDoubleTouchedBall message, length delimited. Does not implicitly {@link GameEvent.AttackerDoubleTouchedBall.verify|verify} messages.
     * @param message AttackerDoubleTouchedBall message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IAttackerDoubleTouchedBall, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AttackerDoubleTouchedBall message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AttackerDoubleTouchedBall
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.AttackerDoubleTouchedBall;

    /**
     * Decodes an AttackerDoubleTouchedBall message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AttackerDoubleTouchedBall
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.AttackerDoubleTouchedBall;

    /**
     * Verifies an AttackerDoubleTouchedBall message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates an AttackerDoubleTouchedBall message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AttackerDoubleTouchedBall
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.AttackerDoubleTouchedBall;

    /**
     * Creates a plain object from an AttackerDoubleTouchedBall message. Also converts values to other types if specified.
     * @param message AttackerDoubleTouchedBall
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.AttackerDoubleTouchedBall, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AttackerDoubleTouchedBall to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an AttackerTooCloseToDefenseArea. */
  interface IAttackerTooCloseToDefenseArea {

    /** AttackerTooCloseToDefenseArea byTeam */
    byTeam: Team;

    /** AttackerTooCloseToDefenseArea byBot */
    byBot?: (number | null);

    /** AttackerTooCloseToDefenseArea location */
    location?: (ILocation | null);

    /** AttackerTooCloseToDefenseArea distance */
    distance?: (number | null);
  }

  /** Represents an AttackerTooCloseToDefenseArea. */
  class AttackerTooCloseToDefenseArea implements IAttackerTooCloseToDefenseArea {

    /** AttackerTooCloseToDefenseArea byTeam. */
    public byTeam: Team;
    /** AttackerTooCloseToDefenseArea byBot. */
    public byBot: number;
    /** AttackerTooCloseToDefenseArea location. */
    public location?: (ILocation | null);
    /** AttackerTooCloseToDefenseArea distance. */
    public distance: number;

    /**
     * Constructs a new AttackerTooCloseToDefenseArea.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IAttackerTooCloseToDefenseArea);

    /**
     * Creates a new AttackerTooCloseToDefenseArea instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AttackerTooCloseToDefenseArea instance
     */
    public static create(properties?: GameEvent.IAttackerTooCloseToDefenseArea): GameEvent.AttackerTooCloseToDefenseArea;

    /**
     * Encodes the specified AttackerTooCloseToDefenseArea message. Does not implicitly {@link GameEvent.AttackerTooCloseToDefenseArea.verify|verify} messages.
     * @param message AttackerTooCloseToDefenseArea message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IAttackerTooCloseToDefenseArea, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AttackerTooCloseToDefenseArea message, length delimited. Does not implicitly {@link GameEvent.AttackerTooCloseToDefenseArea.verify|verify} messages.
     * @param message AttackerTooCloseToDefenseArea message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IAttackerTooCloseToDefenseArea, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AttackerTooCloseToDefenseArea message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AttackerTooCloseToDefenseArea
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.AttackerTooCloseToDefenseArea;

    /**
     * Decodes an AttackerTooCloseToDefenseArea message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AttackerTooCloseToDefenseArea
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.AttackerTooCloseToDefenseArea;

    /**
     * Verifies an AttackerTooCloseToDefenseArea message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates an AttackerTooCloseToDefenseArea message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AttackerTooCloseToDefenseArea
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.AttackerTooCloseToDefenseArea;

    /**
     * Creates a plain object from an AttackerTooCloseToDefenseArea message. Also converts values to other types if specified.
     * @param message AttackerTooCloseToDefenseArea
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.AttackerTooCloseToDefenseArea, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AttackerTooCloseToDefenseArea to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BotHeldBallDeliberately. */
  interface IBotHeldBallDeliberately {

    /** BotHeldBallDeliberately byTeam */
    byTeam: Team;

    /** BotHeldBallDeliberately byBot */
    byBot?: (number | null);

    /** BotHeldBallDeliberately location */
    location?: (ILocation | null);

    /** BotHeldBallDeliberately duration */
    duration?: (number | null);
  }

  /** Represents a BotHeldBallDeliberately. */
  class BotHeldBallDeliberately implements IBotHeldBallDeliberately {

    /** BotHeldBallDeliberately byTeam. */
    public byTeam: Team;
    /** BotHeldBallDeliberately byBot. */
    public byBot: number;
    /** BotHeldBallDeliberately location. */
    public location?: (ILocation | null);
    /** BotHeldBallDeliberately duration. */
    public duration: number;

    /**
     * Constructs a new BotHeldBallDeliberately.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IBotHeldBallDeliberately);

    /**
     * Creates a new BotHeldBallDeliberately instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BotHeldBallDeliberately instance
     */
    public static create(properties?: GameEvent.IBotHeldBallDeliberately): GameEvent.BotHeldBallDeliberately;

    /**
     * Encodes the specified BotHeldBallDeliberately message. Does not implicitly {@link GameEvent.BotHeldBallDeliberately.verify|verify} messages.
     * @param message BotHeldBallDeliberately message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IBotHeldBallDeliberately, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BotHeldBallDeliberately message, length delimited. Does not implicitly {@link GameEvent.BotHeldBallDeliberately.verify|verify} messages.
     * @param message BotHeldBallDeliberately message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IBotHeldBallDeliberately, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BotHeldBallDeliberately message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BotHeldBallDeliberately
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.BotHeldBallDeliberately;

    /**
     * Decodes a BotHeldBallDeliberately message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BotHeldBallDeliberately
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.BotHeldBallDeliberately;

    /**
     * Verifies a BotHeldBallDeliberately message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a BotHeldBallDeliberately message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BotHeldBallDeliberately
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.BotHeldBallDeliberately;

    /**
     * Creates a plain object from a BotHeldBallDeliberately message. Also converts values to other types if specified.
     * @param message BotHeldBallDeliberately
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.BotHeldBallDeliberately, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BotHeldBallDeliberately to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BotInterferedPlacement. */
  interface IBotInterferedPlacement {

    /** BotInterferedPlacement byTeam */
    byTeam: Team;

    /** BotInterferedPlacement byBot */
    byBot?: (number | null);

    /** BotInterferedPlacement location */
    location?: (ILocation | null);
  }

  /** Represents a BotInterferedPlacement. */
  class BotInterferedPlacement implements IBotInterferedPlacement {

    /** BotInterferedPlacement byTeam. */
    public byTeam: Team;
    /** BotInterferedPlacement byBot. */
    public byBot: number;
    /** BotInterferedPlacement location. */
    public location?: (ILocation | null);

    /**
     * Constructs a new BotInterferedPlacement.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IBotInterferedPlacement);

    /**
     * Creates a new BotInterferedPlacement instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BotInterferedPlacement instance
     */
    public static create(properties?: GameEvent.IBotInterferedPlacement): GameEvent.BotInterferedPlacement;

    /**
     * Encodes the specified BotInterferedPlacement message. Does not implicitly {@link GameEvent.BotInterferedPlacement.verify|verify} messages.
     * @param message BotInterferedPlacement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IBotInterferedPlacement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BotInterferedPlacement message, length delimited. Does not implicitly {@link GameEvent.BotInterferedPlacement.verify|verify} messages.
     * @param message BotInterferedPlacement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IBotInterferedPlacement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BotInterferedPlacement message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BotInterferedPlacement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.BotInterferedPlacement;

    /**
     * Decodes a BotInterferedPlacement message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BotInterferedPlacement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.BotInterferedPlacement;

    /**
     * Verifies a BotInterferedPlacement message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a BotInterferedPlacement message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BotInterferedPlacement
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.BotInterferedPlacement;

    /**
     * Creates a plain object from a BotInterferedPlacement message. Also converts values to other types if specified.
     * @param message BotInterferedPlacement
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.BotInterferedPlacement, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BotInterferedPlacement to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a MultipleCards. */
  interface IMultipleCards {

    /** MultipleCards byTeam */
    byTeam: Team;
  }

  /** Represents a MultipleCards. */
  class MultipleCards implements IMultipleCards {

    /** MultipleCards byTeam. */
    public byTeam: Team;

    /**
     * Constructs a new MultipleCards.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IMultipleCards);

    /**
     * Creates a new MultipleCards instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MultipleCards instance
     */
    public static create(properties?: GameEvent.IMultipleCards): GameEvent.MultipleCards;

    /**
     * Encodes the specified MultipleCards message. Does not implicitly {@link GameEvent.MultipleCards.verify|verify} messages.
     * @param message MultipleCards message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IMultipleCards, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MultipleCards message, length delimited. Does not implicitly {@link GameEvent.MultipleCards.verify|verify} messages.
     * @param message MultipleCards message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IMultipleCards, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MultipleCards message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MultipleCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.MultipleCards;

    /**
     * Decodes a MultipleCards message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MultipleCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.MultipleCards;

    /**
     * Verifies a MultipleCards message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a MultipleCards message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MultipleCards
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.MultipleCards;

    /**
     * Creates a plain object from a MultipleCards message. Also converts values to other types if specified.
     * @param message MultipleCards
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.MultipleCards, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MultipleCards to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a MultipleFouls. */
  interface IMultipleFouls {

    /** MultipleFouls byTeam */
    byTeam: Team;
  }

  /** Represents a MultipleFouls. */
  class MultipleFouls implements IMultipleFouls {

    /** MultipleFouls byTeam. */
    public byTeam: Team;

    /**
     * Constructs a new MultipleFouls.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IMultipleFouls);

    /**
     * Creates a new MultipleFouls instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MultipleFouls instance
     */
    public static create(properties?: GameEvent.IMultipleFouls): GameEvent.MultipleFouls;

    /**
     * Encodes the specified MultipleFouls message. Does not implicitly {@link GameEvent.MultipleFouls.verify|verify} messages.
     * @param message MultipleFouls message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IMultipleFouls, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MultipleFouls message, length delimited. Does not implicitly {@link GameEvent.MultipleFouls.verify|verify} messages.
     * @param message MultipleFouls message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IMultipleFouls, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MultipleFouls message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MultipleFouls
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.MultipleFouls;

    /**
     * Decodes a MultipleFouls message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MultipleFouls
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.MultipleFouls;

    /**
     * Verifies a MultipleFouls message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a MultipleFouls message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MultipleFouls
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.MultipleFouls;

    /**
     * Creates a plain object from a MultipleFouls message. Also converts values to other types if specified.
     * @param message MultipleFouls
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.MultipleFouls, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MultipleFouls to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a MultiplePlacementFailures. */
  interface IMultiplePlacementFailures {

    /** MultiplePlacementFailures byTeam */
    byTeam: Team;
  }

  /** Represents a MultiplePlacementFailures. */
  class MultiplePlacementFailures implements IMultiplePlacementFailures {

    /** MultiplePlacementFailures byTeam. */
    public byTeam: Team;

    /**
     * Constructs a new MultiplePlacementFailures.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IMultiplePlacementFailures);

    /**
     * Creates a new MultiplePlacementFailures instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MultiplePlacementFailures instance
     */
    public static create(properties?: GameEvent.IMultiplePlacementFailures): GameEvent.MultiplePlacementFailures;

    /**
     * Encodes the specified MultiplePlacementFailures message. Does not implicitly {@link GameEvent.MultiplePlacementFailures.verify|verify} messages.
     * @param message MultiplePlacementFailures message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IMultiplePlacementFailures, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MultiplePlacementFailures message, length delimited. Does not implicitly {@link GameEvent.MultiplePlacementFailures.verify|verify} messages.
     * @param message MultiplePlacementFailures message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IMultiplePlacementFailures, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MultiplePlacementFailures message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MultiplePlacementFailures
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.MultiplePlacementFailures;

    /**
     * Decodes a MultiplePlacementFailures message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MultiplePlacementFailures
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.MultiplePlacementFailures;

    /**
     * Verifies a MultiplePlacementFailures message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a MultiplePlacementFailures message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MultiplePlacementFailures
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.MultiplePlacementFailures;

    /**
     * Creates a plain object from a MultiplePlacementFailures message. Also converts values to other types if specified.
     * @param message MultiplePlacementFailures
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.MultiplePlacementFailures, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MultiplePlacementFailures to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a KickTimeout. */
  interface IKickTimeout {

    /** KickTimeout byTeam */
    byTeam: Team;

    /** KickTimeout location */
    location?: (ILocation | null);

    /** KickTimeout time */
    time?: (number | null);
  }

  /** Represents a KickTimeout. */
  class KickTimeout implements IKickTimeout {

    /** KickTimeout byTeam. */
    public byTeam: Team;
    /** KickTimeout location. */
    public location?: (ILocation | null);
    /** KickTimeout time. */
    public time: number;

    /**
     * Constructs a new KickTimeout.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IKickTimeout);

    /**
     * Creates a new KickTimeout instance using the specified properties.
     * @param [properties] Properties to set
     * @returns KickTimeout instance
     */
    public static create(properties?: GameEvent.IKickTimeout): GameEvent.KickTimeout;

    /**
     * Encodes the specified KickTimeout message. Does not implicitly {@link GameEvent.KickTimeout.verify|verify} messages.
     * @param message KickTimeout message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IKickTimeout, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified KickTimeout message, length delimited. Does not implicitly {@link GameEvent.KickTimeout.verify|verify} messages.
     * @param message KickTimeout message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IKickTimeout, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a KickTimeout message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns KickTimeout
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.KickTimeout;

    /**
     * Decodes a KickTimeout message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns KickTimeout
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.KickTimeout;

    /**
     * Verifies a KickTimeout message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a KickTimeout message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns KickTimeout
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.KickTimeout;

    /**
     * Creates a plain object from a KickTimeout message. Also converts values to other types if specified.
     * @param message KickTimeout
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.KickTimeout, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this KickTimeout to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a NoProgressInGame. */
  interface INoProgressInGame {

    /** NoProgressInGame location */
    location?: (ILocation | null);

    /** NoProgressInGame time */
    time?: (number | null);
  }

  /** Represents a NoProgressInGame. */
  class NoProgressInGame implements INoProgressInGame {

    /** NoProgressInGame location. */
    public location?: (ILocation | null);
    /** NoProgressInGame time. */
    public time: number;

    /**
     * Constructs a new NoProgressInGame.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.INoProgressInGame);

    /**
     * Creates a new NoProgressInGame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NoProgressInGame instance
     */
    public static create(properties?: GameEvent.INoProgressInGame): GameEvent.NoProgressInGame;

    /**
     * Encodes the specified NoProgressInGame message. Does not implicitly {@link GameEvent.NoProgressInGame.verify|verify} messages.
     * @param message NoProgressInGame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.INoProgressInGame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NoProgressInGame message, length delimited. Does not implicitly {@link GameEvent.NoProgressInGame.verify|verify} messages.
     * @param message NoProgressInGame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.INoProgressInGame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NoProgressInGame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NoProgressInGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.NoProgressInGame;

    /**
     * Decodes a NoProgressInGame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NoProgressInGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.NoProgressInGame;

    /**
     * Verifies a NoProgressInGame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a NoProgressInGame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NoProgressInGame
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.NoProgressInGame;

    /**
     * Creates a plain object from a NoProgressInGame message. Also converts values to other types if specified.
     * @param message NoProgressInGame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.NoProgressInGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NoProgressInGame to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a PlacementFailed. */
  interface IPlacementFailed {

    /** PlacementFailed byTeam */
    byTeam: Team;

    /** PlacementFailed remainingDistance */
    remainingDistance?: (number | null);
  }

  /** Represents a PlacementFailed. */
  class PlacementFailed implements IPlacementFailed {

    /** PlacementFailed byTeam. */
    public byTeam: Team;
    /** PlacementFailed remainingDistance. */
    public remainingDistance: number;

    /**
     * Constructs a new PlacementFailed.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IPlacementFailed);

    /**
     * Creates a new PlacementFailed instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlacementFailed instance
     */
    public static create(properties?: GameEvent.IPlacementFailed): GameEvent.PlacementFailed;

    /**
     * Encodes the specified PlacementFailed message. Does not implicitly {@link GameEvent.PlacementFailed.verify|verify} messages.
     * @param message PlacementFailed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IPlacementFailed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlacementFailed message, length delimited. Does not implicitly {@link GameEvent.PlacementFailed.verify|verify} messages.
     * @param message PlacementFailed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IPlacementFailed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlacementFailed message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlacementFailed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.PlacementFailed;

    /**
     * Decodes a PlacementFailed message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlacementFailed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.PlacementFailed;

    /**
     * Verifies a PlacementFailed message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a PlacementFailed message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlacementFailed
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.PlacementFailed;

    /**
     * Creates a plain object from a PlacementFailed message. Also converts values to other types if specified.
     * @param message PlacementFailed
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.PlacementFailed, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlacementFailed to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an UnsportingBehaviorMinor. */
  interface IUnsportingBehaviorMinor {

    /** UnsportingBehaviorMinor byTeam */
    byTeam: Team;

    /** UnsportingBehaviorMinor reason */
    reason: string;
  }

  /** Represents an UnsportingBehaviorMinor. */
  class UnsportingBehaviorMinor implements IUnsportingBehaviorMinor {

    /** UnsportingBehaviorMinor byTeam. */
    public byTeam: Team;
    /** UnsportingBehaviorMinor reason. */
    public reason: string;

    /**
     * Constructs a new UnsportingBehaviorMinor.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IUnsportingBehaviorMinor);

    /**
     * Creates a new UnsportingBehaviorMinor instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UnsportingBehaviorMinor instance
     */
    public static create(properties?: GameEvent.IUnsportingBehaviorMinor): GameEvent.UnsportingBehaviorMinor;

    /**
     * Encodes the specified UnsportingBehaviorMinor message. Does not implicitly {@link GameEvent.UnsportingBehaviorMinor.verify|verify} messages.
     * @param message UnsportingBehaviorMinor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IUnsportingBehaviorMinor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UnsportingBehaviorMinor message, length delimited. Does not implicitly {@link GameEvent.UnsportingBehaviorMinor.verify|verify} messages.
     * @param message UnsportingBehaviorMinor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IUnsportingBehaviorMinor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UnsportingBehaviorMinor message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UnsportingBehaviorMinor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.UnsportingBehaviorMinor;

    /**
     * Decodes an UnsportingBehaviorMinor message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UnsportingBehaviorMinor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.UnsportingBehaviorMinor;

    /**
     * Verifies an UnsportingBehaviorMinor message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates an UnsportingBehaviorMinor message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UnsportingBehaviorMinor
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.UnsportingBehaviorMinor;

    /**
     * Creates a plain object from an UnsportingBehaviorMinor message. Also converts values to other types if specified.
     * @param message UnsportingBehaviorMinor
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.UnsportingBehaviorMinor, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UnsportingBehaviorMinor to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an UnsportingBehaviorMajor. */
  interface IUnsportingBehaviorMajor {

    /** UnsportingBehaviorMajor byTeam */
    byTeam: Team;

    /** UnsportingBehaviorMajor reason */
    reason: string;
  }

  /** Represents an UnsportingBehaviorMajor. */
  class UnsportingBehaviorMajor implements IUnsportingBehaviorMajor {

    /** UnsportingBehaviorMajor byTeam. */
    public byTeam: Team;
    /** UnsportingBehaviorMajor reason. */
    public reason: string;

    /**
     * Constructs a new UnsportingBehaviorMajor.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IUnsportingBehaviorMajor);

    /**
     * Creates a new UnsportingBehaviorMajor instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UnsportingBehaviorMajor instance
     */
    public static create(properties?: GameEvent.IUnsportingBehaviorMajor): GameEvent.UnsportingBehaviorMajor;

    /**
     * Encodes the specified UnsportingBehaviorMajor message. Does not implicitly {@link GameEvent.UnsportingBehaviorMajor.verify|verify} messages.
     * @param message UnsportingBehaviorMajor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IUnsportingBehaviorMajor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UnsportingBehaviorMajor message, length delimited. Does not implicitly {@link GameEvent.UnsportingBehaviorMajor.verify|verify} messages.
     * @param message UnsportingBehaviorMajor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IUnsportingBehaviorMajor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UnsportingBehaviorMajor message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UnsportingBehaviorMajor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.UnsportingBehaviorMajor;

    /**
     * Decodes an UnsportingBehaviorMajor message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UnsportingBehaviorMajor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.UnsportingBehaviorMajor;

    /**
     * Verifies an UnsportingBehaviorMajor message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates an UnsportingBehaviorMajor message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UnsportingBehaviorMajor
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.UnsportingBehaviorMajor;

    /**
     * Creates a plain object from an UnsportingBehaviorMajor message. Also converts values to other types if specified.
     * @param message UnsportingBehaviorMajor
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.UnsportingBehaviorMajor, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UnsportingBehaviorMajor to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a KeeperHeldBall. */
  interface IKeeperHeldBall {

    /** KeeperHeldBall byTeam */
    byTeam: Team;

    /** KeeperHeldBall location */
    location?: (ILocation | null);

    /** KeeperHeldBall duration */
    duration?: (number | null);
  }

  /** Represents a KeeperHeldBall. */
  class KeeperHeldBall implements IKeeperHeldBall {

    /** KeeperHeldBall byTeam. */
    public byTeam: Team;
    /** KeeperHeldBall location. */
    public location?: (ILocation | null);
    /** KeeperHeldBall duration. */
    public duration: number;

    /**
     * Constructs a new KeeperHeldBall.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IKeeperHeldBall);

    /**
     * Creates a new KeeperHeldBall instance using the specified properties.
     * @param [properties] Properties to set
     * @returns KeeperHeldBall instance
     */
    public static create(properties?: GameEvent.IKeeperHeldBall): GameEvent.KeeperHeldBall;

    /**
     * Encodes the specified KeeperHeldBall message. Does not implicitly {@link GameEvent.KeeperHeldBall.verify|verify} messages.
     * @param message KeeperHeldBall message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IKeeperHeldBall, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified KeeperHeldBall message, length delimited. Does not implicitly {@link GameEvent.KeeperHeldBall.verify|verify} messages.
     * @param message KeeperHeldBall message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IKeeperHeldBall, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a KeeperHeldBall message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns KeeperHeldBall
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.KeeperHeldBall;

    /**
     * Decodes a KeeperHeldBall message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns KeeperHeldBall
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.KeeperHeldBall;

    /**
     * Verifies a KeeperHeldBall message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a KeeperHeldBall message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns KeeperHeldBall
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.KeeperHeldBall;

    /**
     * Creates a plain object from a KeeperHeldBall message. Also converts values to other types if specified.
     * @param message KeeperHeldBall
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.KeeperHeldBall, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this KeeperHeldBall to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a PlacementSucceeded. */
  interface IPlacementSucceeded {

    /** PlacementSucceeded byTeam */
    byTeam: Team;

    /** PlacementSucceeded timeTaken */
    timeTaken?: (number | null);

    /** PlacementSucceeded precision */
    precision?: (number | null);

    /** PlacementSucceeded distance */
    distance?: (number | null);
  }

  /** Represents a PlacementSucceeded. */
  class PlacementSucceeded implements IPlacementSucceeded {

    /** PlacementSucceeded byTeam. */
    public byTeam: Team;
    /** PlacementSucceeded timeTaken. */
    public timeTaken: number;
    /** PlacementSucceeded precision. */
    public precision: number;
    /** PlacementSucceeded distance. */
    public distance: number;

    /**
     * Constructs a new PlacementSucceeded.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IPlacementSucceeded);

    /**
     * Creates a new PlacementSucceeded instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlacementSucceeded instance
     */
    public static create(properties?: GameEvent.IPlacementSucceeded): GameEvent.PlacementSucceeded;

    /**
     * Encodes the specified PlacementSucceeded message. Does not implicitly {@link GameEvent.PlacementSucceeded.verify|verify} messages.
     * @param message PlacementSucceeded message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IPlacementSucceeded, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlacementSucceeded message, length delimited. Does not implicitly {@link GameEvent.PlacementSucceeded.verify|verify} messages.
     * @param message PlacementSucceeded message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IPlacementSucceeded, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlacementSucceeded message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlacementSucceeded
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.PlacementSucceeded;

    /**
     * Decodes a PlacementSucceeded message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlacementSucceeded
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.PlacementSucceeded;

    /**
     * Verifies a PlacementSucceeded message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a PlacementSucceeded message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlacementSucceeded
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.PlacementSucceeded;

    /**
     * Creates a plain object from a PlacementSucceeded message. Also converts values to other types if specified.
     * @param message PlacementSucceeded
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.PlacementSucceeded, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlacementSucceeded to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a Prepared. */
  interface IPrepared {

    /** Prepared timeTaken */
    timeTaken?: (number | null);
  }

  /** Represents a Prepared. */
  class Prepared implements IPrepared {

    /** Prepared timeTaken. */
    public timeTaken: number;

    /**
     * Constructs a new Prepared.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IPrepared);

    /**
     * Creates a new Prepared instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Prepared instance
     */
    public static create(properties?: GameEvent.IPrepared): GameEvent.Prepared;

    /**
     * Encodes the specified Prepared message. Does not implicitly {@link GameEvent.Prepared.verify|verify} messages.
     * @param message Prepared message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IPrepared, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Prepared message, length delimited. Does not implicitly {@link GameEvent.Prepared.verify|verify} messages.
     * @param message Prepared message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IPrepared, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Prepared message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Prepared
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.Prepared;

    /**
     * Decodes a Prepared message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Prepared
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.Prepared;

    /**
     * Verifies a Prepared message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a Prepared message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Prepared
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.Prepared;

    /**
     * Creates a plain object from a Prepared message. Also converts values to other types if specified.
     * @param message Prepared
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.Prepared, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Prepared to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a BotSubstitution. */
  interface IBotSubstitution {

    /** BotSubstitution byTeam */
    byTeam: Team;
  }

  /** Represents a BotSubstitution. */
  class BotSubstitution implements IBotSubstitution {

    /** BotSubstitution byTeam. */
    public byTeam: Team;

    /**
     * Constructs a new BotSubstitution.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.IBotSubstitution);

    /**
     * Creates a new BotSubstitution instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BotSubstitution instance
     */
    public static create(properties?: GameEvent.IBotSubstitution): GameEvent.BotSubstitution;

    /**
     * Encodes the specified BotSubstitution message. Does not implicitly {@link GameEvent.BotSubstitution.verify|verify} messages.
     * @param message BotSubstitution message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.IBotSubstitution, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BotSubstitution message, length delimited. Does not implicitly {@link GameEvent.BotSubstitution.verify|verify} messages.
     * @param message BotSubstitution message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.IBotSubstitution, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BotSubstitution message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BotSubstitution
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.BotSubstitution;

    /**
     * Decodes a BotSubstitution message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BotSubstitution
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.BotSubstitution;

    /**
     * Verifies a BotSubstitution message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a BotSubstitution message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BotSubstitution
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.BotSubstitution;

    /**
     * Creates a plain object from a BotSubstitution message. Also converts values to other types if specified.
     * @param message BotSubstitution
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.BotSubstitution, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BotSubstitution to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a TooManyRobots. */
  interface ITooManyRobots {

    /** TooManyRobots byTeam */
    byTeam: Team;
  }

  /** Represents a TooManyRobots. */
  class TooManyRobots implements ITooManyRobots {

    /** TooManyRobots byTeam. */
    public byTeam: Team;

    /**
     * Constructs a new TooManyRobots.
     * @param [properties] Properties to set
     */
    constructor(properties?: GameEvent.ITooManyRobots);

    /**
     * Creates a new TooManyRobots instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TooManyRobots instance
     */
    public static create(properties?: GameEvent.ITooManyRobots): GameEvent.TooManyRobots;

    /**
     * Encodes the specified TooManyRobots message. Does not implicitly {@link GameEvent.TooManyRobots.verify|verify} messages.
     * @param message TooManyRobots message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: GameEvent.ITooManyRobots, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TooManyRobots message, length delimited. Does not implicitly {@link GameEvent.TooManyRobots.verify|verify} messages.
     * @param message TooManyRobots message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: GameEvent.ITooManyRobots, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TooManyRobots message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TooManyRobots
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): GameEvent.TooManyRobots;

    /**
     * Decodes a TooManyRobots message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TooManyRobots
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): GameEvent.TooManyRobots;

    /**
     * Verifies a TooManyRobots message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a TooManyRobots message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TooManyRobots
     */
    public static fromObject(object: { [k: string]: any }): GameEvent.TooManyRobots;

    /**
     * Creates a plain object from a TooManyRobots message. Also converts values to other types if specified.
     * @param message TooManyRobots
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEvent.TooManyRobots, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TooManyRobots to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }
}

/** GameEventType enum. */
export enum GameEventType {
  UNKNOWN_GAME_EVENT_TYPE = 0,
  PREPARED = 1,
  NO_PROGRESS_IN_GAME = 2,
  PLACEMENT_FAILED = 3,
  PLACEMENT_SUCCEEDED = 5,
  BOT_SUBSTITUTION = 37,
  TOO_MANY_ROBOTS = 38,
  BALL_LEFT_FIELD_TOUCH_LINE = 6,
  BALL_LEFT_FIELD_GOAL_LINE = 7,
  POSSIBLE_GOAL = 39,
  GOAL = 8,
  INDIRECT_GOAL = 9,
  CHIPPED_GOAL = 10,
  AIMLESS_KICK = 11,
  KICK_TIMEOUT = 12,
  KEEPER_HELD_BALL = 13,
  ATTACKER_DOUBLE_TOUCHED_BALL = 14,
  ATTACKER_IN_DEFENSE_AREA = 15,
  ATTACKER_TOUCHED_KEEPER = 16,
  BOT_DRIBBLED_BALL_TOO_FAR = 17,
  BOT_KICKED_BALL_TOO_FAST = 18,
  ATTACKER_TOO_CLOSE_TO_DEFENSE_AREA = 19,
  BOT_INTERFERED_PLACEMENT = 20,
  BOT_CRASH_DRAWN = 21,
  BOT_CRASH_UNIQUE = 22,
  BOT_CRASH_UNIQUE_SKIPPED = 23,
  BOT_PUSHED_BOT = 24,
  BOT_PUSHED_BOT_SKIPPED = 25,
  BOT_HELD_BALL_DELIBERATELY = 26,
  BOT_TIPPED_OVER = 27,
  BOT_TOO_FAST_IN_STOP = 28,
  DEFENDER_TOO_CLOSE_TO_KICK_POINT = 29,
  DEFENDER_IN_DEFENSE_AREA_PARTIALLY = 30,
  DEFENDER_IN_DEFENSE_AREA = 31,
  MULTIPLE_CARDS = 32,
  MULTIPLE_PLACEMENT_FAILURES = 33,
  MULTIPLE_FOULS = 34,
  UNSPORTING_BEHAVIOR_MINOR = 35,
  UNSPORTING_BEHAVIOR_MAJOR = 36
}

/** Properties of a Referee. */
export interface IReferee {

  /** Referee packetTimestamp */
  packetTimestamp: (number | Long);

  /** Referee stage */
  stage: Referee.Stage;

  /** Referee stageTimeLeft */
  stageTimeLeft?: (number | null);

  /** Referee command */
  command: Referee.Command;

  /** Referee commandCounter */
  commandCounter: number;

  /** Referee commandTimestamp */
  commandTimestamp: (number | Long);

  /** Referee yellow */
  yellow: Referee.ITeamInfo;

  /** Referee blue */
  blue: Referee.ITeamInfo;

  /** Referee designatedPosition */
  designatedPosition?: (Referee.IPoint | null);

  /** Referee blueTeamOnPositiveHalf */
  blueTeamOnPositiveHalf?: (boolean | null);

  /** Referee nextCommand */
  nextCommand?: (Referee.Command | null);

  /** Referee gameEvents */
  gameEvents?: (IGameEvent[] | null);

  /** Referee proposedGameEvents */
  proposedGameEvents?: (IProposedGameEvent[] | null);

  /** Referee currentActionTimeRemaining */
  currentActionTimeRemaining?: (number | null);
}

/** Represents a Referee. */
export class Referee implements IReferee {

  /** Referee packetTimestamp. */
  public packetTimestamp: (number | Long);
  /** Referee stage. */
  public stage: Referee.Stage;
  /** Referee stageTimeLeft. */
  public stageTimeLeft: number;
  /** Referee command. */
  public command: Referee.Command;
  /** Referee commandCounter. */
  public commandCounter: number;
  /** Referee commandTimestamp. */
  public commandTimestamp: (number | Long);
  /** Referee yellow. */
  public yellow: Referee.ITeamInfo;
  /** Referee blue. */
  public blue: Referee.ITeamInfo;
  /** Referee designatedPosition. */
  public designatedPosition?: (Referee.IPoint | null);
  /** Referee blueTeamOnPositiveHalf. */
  public blueTeamOnPositiveHalf: boolean;
  /** Referee nextCommand. */
  public nextCommand: Referee.Command;
  /** Referee gameEvents. */
  public gameEvents: IGameEvent[];
  /** Referee proposedGameEvents. */
  public proposedGameEvents: IProposedGameEvent[];
  /** Referee currentActionTimeRemaining. */
  public currentActionTimeRemaining: number;

  /**
   * Constructs a new Referee.
   * @param [properties] Properties to set
   */
  constructor(properties?: IReferee);

  /**
   * Creates a new Referee instance using the specified properties.
   * @param [properties] Properties to set
   * @returns Referee instance
   */
  public static create(properties?: IReferee): Referee;

  /**
   * Encodes the specified Referee message. Does not implicitly {@link Referee.verify|verify} messages.
   * @param message Referee message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: IReferee, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified Referee message, length delimited. Does not implicitly {@link Referee.verify|verify} messages.
   * @param message Referee message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: IReferee, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a Referee message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns Referee
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): Referee;

  /**
   * Decodes a Referee message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns Referee
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): Referee;

  /**
   * Verifies a Referee message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a Referee message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns Referee
   */
  public static fromObject(object: { [k: string]: any }): Referee;

  /**
   * Creates a plain object from a Referee message. Also converts values to other types if specified.
   * @param message Referee
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: Referee, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this Referee to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}

export namespace Referee {

  /** Stage enum. */
  enum Stage {
    NORMAL_FIRST_HALF_PRE = 0,
    NORMAL_FIRST_HALF = 1,
    NORMAL_HALF_TIME = 2,
    NORMAL_SECOND_HALF_PRE = 3,
    NORMAL_SECOND_HALF = 4,
    EXTRA_TIME_BREAK = 5,
    EXTRA_FIRST_HALF_PRE = 6,
    EXTRA_FIRST_HALF = 7,
    EXTRA_HALF_TIME = 8,
    EXTRA_SECOND_HALF_PRE = 9,
    EXTRA_SECOND_HALF = 10,
    PENALTY_SHOOTOUT_BREAK = 11,
    PENALTY_SHOOTOUT = 12,
    POST_GAME = 13
  }

  /** Command enum. */
  enum Command {
    HALT = 0,
    STOP = 1,
    NORMAL_START = 2,
    FORCE_START = 3,
    PREPARE_KICKOFF_YELLOW = 4,
    PREPARE_KICKOFF_BLUE = 5,
    PREPARE_PENALTY_YELLOW = 6,
    PREPARE_PENALTY_BLUE = 7,
    DIRECT_FREE_YELLOW = 8,
    DIRECT_FREE_BLUE = 9,
    INDIRECT_FREE_YELLOW = 10,
    INDIRECT_FREE_BLUE = 11,
    TIMEOUT_YELLOW = 12,
    TIMEOUT_BLUE = 13,
    GOAL_YELLOW = 14,
    GOAL_BLUE = 15,
    BALL_PLACEMENT_YELLOW = 16,
    BALL_PLACEMENT_BLUE = 17
  }

  /** Properties of a TeamInfo. */
  interface ITeamInfo {

    /** TeamInfo name */
    name: string;

    /** TeamInfo score */
    score: number;

    /** TeamInfo redCards */
    redCards: number;

    /** TeamInfo yellowCardTimes */
    yellowCardTimes?: (number[] | null);

    /** TeamInfo yellowCards */
    yellowCards: number;

    /** TeamInfo timeouts */
    timeouts: number;

    /** TeamInfo timeoutTime */
    timeoutTime: number;

    /** TeamInfo goalkeeper */
    goalkeeper: number;

    /** TeamInfo foulCounter */
    foulCounter?: (number | null);

    /** TeamInfo ballPlacementFailures */
    ballPlacementFailures?: (number | null);

    /** TeamInfo canPlaceBall */
    canPlaceBall?: (boolean | null);

    /** TeamInfo maxAllowedBots */
    maxAllowedBots?: (number | null);
  }

  /** Represents a TeamInfo. */
  class TeamInfo implements ITeamInfo {

    /** TeamInfo name. */
    public name: string;
    /** TeamInfo score. */
    public score: number;
    /** TeamInfo redCards. */
    public redCards: number;
    /** TeamInfo yellowCardTimes. */
    public yellowCardTimes: number[];
    /** TeamInfo yellowCards. */
    public yellowCards: number;
    /** TeamInfo timeouts. */
    public timeouts: number;
    /** TeamInfo timeoutTime. */
    public timeoutTime: number;
    /** TeamInfo goalkeeper. */
    public goalkeeper: number;
    /** TeamInfo foulCounter. */
    public foulCounter: number;
    /** TeamInfo ballPlacementFailures. */
    public ballPlacementFailures: number;
    /** TeamInfo canPlaceBall. */
    public canPlaceBall: boolean;
    /** TeamInfo maxAllowedBots. */
    public maxAllowedBots: number;

    /**
     * Constructs a new TeamInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: Referee.ITeamInfo);

    /**
     * Creates a new TeamInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TeamInfo instance
     */
    public static create(properties?: Referee.ITeamInfo): Referee.TeamInfo;

    /**
     * Encodes the specified TeamInfo message. Does not implicitly {@link Referee.TeamInfo.verify|verify} messages.
     * @param message TeamInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Referee.ITeamInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TeamInfo message, length delimited. Does not implicitly {@link Referee.TeamInfo.verify|verify} messages.
     * @param message TeamInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Referee.ITeamInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TeamInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TeamInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): Referee.TeamInfo;

    /**
     * Decodes a TeamInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TeamInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): Referee.TeamInfo;

    /**
     * Verifies a TeamInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a TeamInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TeamInfo
     */
    public static fromObject(object: { [k: string]: any }): Referee.TeamInfo;

    /**
     * Creates a plain object from a TeamInfo message. Also converts values to other types if specified.
     * @param message TeamInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Referee.TeamInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TeamInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a Point. */
  interface IPoint {

    /** Point x */
    x: number;

    /** Point y */
    y: number;
  }

  /** Represents a Point. */
  class Point implements IPoint {

    /** Point x. */
    public x: number;
    /** Point y. */
    public y: number;

    /**
     * Constructs a new Point.
     * @param [properties] Properties to set
     */
    constructor(properties?: Referee.IPoint);

    /**
     * Creates a new Point instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Point instance
     */
    public static create(properties?: Referee.IPoint): Referee.Point;

    /**
     * Encodes the specified Point message. Does not implicitly {@link Referee.Point.verify|verify} messages.
     * @param message Point message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Referee.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Point message, length delimited. Does not implicitly {@link Referee.Point.verify|verify} messages.
     * @param message Point message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Referee.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Point message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Point
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): Referee.Point;

    /**
     * Decodes a Point message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Point
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): Referee.Point;

    /**
     * Verifies a Point message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a Point message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Point
     */
    public static fromObject(object: { [k: string]: any }): Referee.Point;

    /**
     * Creates a plain object from a Point message. Also converts values to other types if specified.
     * @param message Point
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Referee.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Point to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }
}

/** Properties of a ProposedGameEvent. */
export interface IProposedGameEvent {

  /** ProposedGameEvent validUntil */
  validUntil: (number | Long);

  /** ProposedGameEvent proposerId */
  proposerId: string;

  /** ProposedGameEvent gameEvent */
  gameEvent: IGameEvent;
}

/** Represents a ProposedGameEvent. */
export class ProposedGameEvent implements IProposedGameEvent {

  /** ProposedGameEvent validUntil. */
  public validUntil: (number | Long);
  /** ProposedGameEvent proposerId. */
  public proposerId: string;
  /** ProposedGameEvent gameEvent. */
  public gameEvent: IGameEvent;

  /**
   * Constructs a new ProposedGameEvent.
   * @param [properties] Properties to set
   */
  constructor(properties?: IProposedGameEvent);

  /**
   * Creates a new ProposedGameEvent instance using the specified properties.
   * @param [properties] Properties to set
   * @returns ProposedGameEvent instance
   */
  public static create(properties?: IProposedGameEvent): ProposedGameEvent;

  /**
   * Encodes the specified ProposedGameEvent message. Does not implicitly {@link ProposedGameEvent.verify|verify} messages.
   * @param message ProposedGameEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(message: IProposedGameEvent, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Encodes the specified ProposedGameEvent message, length delimited. Does not implicitly {@link ProposedGameEvent.verify|verify} messages.
   * @param message ProposedGameEvent message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(message: IProposedGameEvent, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
   * Decodes a ProposedGameEvent message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns ProposedGameEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): ProposedGameEvent;

  /**
   * Decodes a ProposedGameEvent message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns ProposedGameEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): ProposedGameEvent;

  /**
   * Verifies a ProposedGameEvent message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): (string | null);

  /**
   * Creates a ProposedGameEvent message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns ProposedGameEvent
   */
  public static fromObject(object: { [k: string]: any }): ProposedGameEvent;

  /**
   * Creates a plain object from a ProposedGameEvent message. Also converts values to other types if specified.
   * @param message ProposedGameEvent
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(message: ProposedGameEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
   * Converts this ProposedGameEvent to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };
}
