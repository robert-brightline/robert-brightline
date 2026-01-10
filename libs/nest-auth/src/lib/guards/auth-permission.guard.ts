import type { CanActivate, ExecutionContext } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import type { Request } from 'express';
import type { Observable } from 'rxjs';
import type { JwtPayload } from '../common/jwt-payload.js';

@Injectable()
export class AuthPermissionGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest<Request>();
    const user = req?.user as JwtPayload | undefined;

    throw user;
  }
}
