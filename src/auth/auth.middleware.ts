import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  
  use(req: Request, res: Response, next: NextFunction) {
    const username = req.headers['x-username'];
    const password = req.headers['x-password'];

    if (!username || !password) {
      throw new HttpException('Username or password is undefined', HttpStatus.UNAUTHORIZED);
    }

    if (username !== 'admin' && password !== 'password123') {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    next();
  }
}
