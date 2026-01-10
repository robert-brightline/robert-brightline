import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalOtpGuard extends AuthGuard('local-otp') {}
