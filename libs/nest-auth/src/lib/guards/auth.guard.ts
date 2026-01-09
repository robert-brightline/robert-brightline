import type { CanActivate } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import type { Reflector } from '@nestjs/core';
import type { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(protected readonly reflector: Reflector) {}

  canActivate(): boolean | Promise<boolean> | Observable<boolean> {
    return true;
  }
}
