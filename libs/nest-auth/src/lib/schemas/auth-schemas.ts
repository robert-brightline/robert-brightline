import * as External from '@robert-brightline/zod';
import z from 'zod';

export const LoginSchema = z.object({
  username: External.email(),
  password: External.password(),
});

export type Login = z.infer<typeof LoginSchema>;

export const LoginOtpSchema = z.object({
  username: External.email(),
  otp: External.str(),
});
export type LoginOtp = z.infer<typeof LoginOtpSchema>;

export const ForgotPasswordSchema = z.object({
  username: External.email(),
});
export type ForgotPassword = z.infer<typeof ForgotPasswordSchema>;

export const ResetPasswordSchema = z.object({
  username: External.email(),
  password: External.password(),
});

export type ResetPassword = z.infer<typeof ResetPasswordSchema>;
