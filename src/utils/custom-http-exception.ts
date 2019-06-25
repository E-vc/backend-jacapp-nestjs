import { HttpStatus, HttpException } from '@nestjs/common';

export class CustomHttpException {

  public static serverError(err) {
    if (err) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: err,
      }, 500);
    }
  }

  public static saveException(err) {
    if (err.name) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: err,
      }, 403);
    }
  }

  public static internalError(err): HttpException {
    return new HttpException({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      error: err,
    }, 500);
  }

  public static unauthorizedException(err: string) {
    return new HttpException({
      status: HttpStatus.UNAUTHORIZED,
      error: err,
    }, 401);
  }

  public static notFound(message: string): HttpException {
    return new HttpException({
      status: HttpStatus.NOT_FOUND,
      error: message,
    }, 404);
  }
}
