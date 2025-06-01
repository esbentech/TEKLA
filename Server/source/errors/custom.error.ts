import { StatusCodes } from "http-status-codes";

export interface ValidationType {
  fields: string[];
  constraint: string;
}

interface AppErrorArgs {
  name?: string;
  statusCode: StatusCodes;
  message: string;
  isOperational?: boolean;
  validationErrors?: ValidationType[];
}

export class AppError extends Error {
  public readonly name: string;
  public readonly statusCode: StatusCodes;
  public readonly isOperational: boolean = true;
  public readonly validationErrors?: ValidationType[];

  constructor(args: AppErrorArgs) {
    const { message, name, statusCode, isOperational, validationErrors } = args;
    super(message);
    Object.setPrototypeOf(this, new.target.prototype); 
    this.name = name ?? "Error en la aplicacion";
    this.statusCode = statusCode;
    if (isOperational !== undefined) this.isOperational = isOperational;
    this.validationErrors = validationErrors;
    Error.captureStackTrace(this);
  }

  static badRequest( 
    message: string,
    validationErrors?: ValidationType[]
  ): AppError {
    return new AppError({
      name: "BadRequestError",
      message,
      statusCode: StatusCodes.BAD_REQUEST,
      validationErrors,
    });
  }

  static unauthorized(message: string): AppError {
    return new AppError({
      name: "UnauthorizedError",
      message,
      statusCode: StatusCodes.UNAUTHORIZED,
    });
  }

  static forbidden(message: string): AppError {
    return new AppError({
      name: "ForbiddenError",
      message,
      statusCode: StatusCodes.FORBIDDEN,
    });
  }

  static notFound(message: string): AppError {
    return new AppError({
      name: "NotFoundError",
      message,
      statusCode: StatusCodes.NOT_FOUND,
    });
  }

  static internalServer(message: string): AppError {
    return new AppError({
      name: "InternalServerError",
      message,
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
}
