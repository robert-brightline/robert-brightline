
import { BaseError } from './base-error.js';

export class TypeError extends BaseError {
   constructor(message = '') {
       super(`TypeError: ${message}`, 'TypeError');
   }
}
export class InvalidFormatError extends BaseError {
   constructor(message = '') {
       super(`InvalidFormatError: ${message}`, 'InvalidFormatError');
   }
}
export class PatternMismatchError extends BaseError {
   constructor(message = '') {
       super(`PatternMismatchError: ${message}`, 'PatternMismatchError');
   }
}
export class NotNumberError extends BaseError {
   constructor(message = '') {
       super(`NotNumberError: ${message}`, 'NotNumberError');
   }
}
export class NotDateError extends BaseError {
   constructor(message = '') {
       super(`NotDateError: ${message}`, 'NotDateError');
   }
}
export class NotFutureDateError extends BaseError {
   constructor(message = '') {
       super(`NotFutureDateError: ${message}`, 'NotFutureDateError');
   }
}
export class NotPastDateError extends BaseError {
   constructor(message = '') {
       super(`NotPastDateError: ${message}`, 'NotPastDateError');
   }
}
export class NotAfternoonError extends BaseError {
   constructor(message = '') {
       super(`NotAfternoonError: ${message}`, 'NotAfternoonError');
   }
}
export class NotMorgningError extends BaseError {
   constructor(message = '') {
       super(`NotMorgningError: ${message}`, 'NotMorgningError');
   }
}
export class NotEveningError extends BaseError {
   constructor(message = '') {
       super(`NotEveningError: ${message}`, 'NotEveningError');
   }
}
export class NotNightError extends BaseError {
   constructor(message = '') {
       super(`NotNightError: ${message}`, 'NotNightError');
   }
}
export class NotEvenNumberError extends BaseError {
   constructor(message = '') {
       super(`NotEvenNumberError: ${message}`, 'NotEvenNumberError');
   }
}
export class NotOddNumberError extends BaseError {
   constructor(message = '') {
       super(`NotOddNumberError: ${message}`, 'NotOddNumberError');
   }
}
export class NotIntegerError extends BaseError {
   constructor(message = '') {
       super(`NotIntegerError: ${message}`, 'NotIntegerError');
   }
}
export class NonNumericError extends BaseError {
   constructor(message = '') {
       super(`NonNumericError: ${message}`, 'NonNumericError');
   }
}
export class NotStringError extends BaseError {
   constructor(message = '') {
       super(`NotStringError: ${message}`, 'NotStringError');
   }
}
export class NotArrayError extends BaseError {
   constructor(message = '') {
       super(`NotArrayError: ${message}`, 'NotArrayError');
   }
}
export class InvalidCharacterError extends BaseError {
   constructor(message = '') {
       super(`InvalidCharacterError: ${message}`, 'InvalidCharacterError');
   }
}
export class EncodingError extends BaseError {
   constructor(message = '') {
       super(`EncodingError: ${message}`, 'EncodingError');
   }
}
export class MalformedJSONError extends BaseError {
   constructor(message = '') {
       super(`MalformedJSONError: ${message}`, 'MalformedJSONError');
   }
}
export class InvalidDateError extends BaseError {
   constructor(message = '') {
       super(`InvalidDateError: ${message}`, 'InvalidDateError');
   }
}
export class InvalidEncriptedDataError extends BaseError {
   constructor(message = '') {
       super(`InvalidEncriptedDataError: ${message}`, 'InvalidEncriptedDataError');
   }
}
export class InvalidJsonError extends BaseError {
   constructor(message = '') {
       super(`InvalidJsonError: ${message}`, 'InvalidJsonError');
   }
}
export class UndefinedError extends BaseError {
   constructor(message = '') {
       super(`UndefinedError: ${message}`, 'UndefinedError');
   }
}
export class MissingError extends BaseError {
   constructor(message = '') {
       super(`MissingError: ${message}`, 'MissingError');
   }
}
export class RequiredError extends BaseError {
   constructor(message = '') {
       super(`RequiredError: ${message}`, 'RequiredError');
   }
}
export class NullValueError extends BaseError {
   constructor(message = '') {
       super(`NullValueError: ${message}`, 'NullValueError');
   }
}
export class EmptyStringError extends BaseError {
   constructor(message = '') {
       super(`EmptyStringError: ${message}`, 'EmptyStringError');
   }
}
export class InvalidPrefixError extends BaseError {
   constructor(message = '') {
       super(`InvalidPrefixError: ${message}`, 'InvalidPrefixError');
   }
}
export class InvalidBarcodeError extends BaseError {
   constructor(message = '') {
       super(`InvalidBarcodeError: ${message}`, 'InvalidBarcodeError');
   }
}
export class EmptyArrayError extends BaseError {
   constructor(message = '') {
       super(`EmptyArrayError: ${message}`, 'EmptyArrayError');
   }
}
export class EmptyCollectionError extends BaseError {
   constructor(message = '') {
       super(`EmptyCollectionError: ${message}`, 'EmptyCollectionError');
   }
}
export class NoSelectionError extends BaseError {
   constructor(message = '') {
       super(`NoSelectionError: ${message}`, 'NoSelectionError');
   }
}
export class TooFewError extends BaseError {
   constructor(message = '') {
       super(`TooFewError: ${message}`, 'TooFewError');
   }
}
export class TooManyError extends BaseError {
   constructor(message = '') {
       super(`TooManyError: ${message}`, 'TooManyError');
   }
}
export class MinLengthError extends BaseError {
   constructor(message = '') {
       super(`MinLengthError: ${message}`, 'MinLengthError');
   }
}
export class MaxLengthError extends BaseError {
   constructor(message = '') {
       super(`MaxLengthError: ${message}`, 'MaxLengthError');
   }
}
export class LengthError extends BaseError {
   constructor(message = '') {
       super(`LengthError: ${message}`, 'LengthError');
   }
}
export class MinimumError extends BaseError {
   constructor(message = '') {
       super(`MinimumError: ${message}`, 'MinimumError');
   }
}
export class MaximumError extends BaseError {
   constructor(message = '') {
       super(`MaximumError: ${message}`, 'MaximumError');
   }
}
export class RangeError extends BaseError {
   constructor(message = '') {
       super(`RangeError: ${message}`, 'RangeError');
   }
}
export class NegativeError extends BaseError {
   constructor(message = '') {
       super(`NegativeError: ${message}`, 'NegativeError');
   }
}
export class PositiveError extends BaseError {
   constructor(message = '') {
       super(`PositiveError: ${message}`, 'PositiveError');
   }
}
export class PrecisionError extends BaseError {
   constructor(message = '') {
       super(`PrecisionError: ${message}`, 'PrecisionError');
   }
}
export class TooSmallError extends BaseError {
   constructor(message = '') {
       super(`TooSmallError: ${message}`, 'TooSmallError');
   }
}
export class TooLargeError extends BaseError {
   constructor(message = '') {
       super(`TooLargeError: ${message}`, 'TooLargeError');
   }
}
export class UniqueError extends BaseError {
   constructor(message = '') {
       super(`UniqueError: ${message}`, 'UniqueError');
   }
}
export class DuplicateEntryError extends BaseError {
   constructor(message = '') {
       super(`DuplicateEntryError: ${message}`, 'DuplicateEntryError');
   }
}
export class ForbiddenNameError extends BaseError {
   constructor(message = '') {
       super(`ForbiddenNameError: ${message}`, 'ForbiddenNameError');
   }
}
export class InvalidNameError extends BaseError {
   constructor(message = '') {
       super(`InvalidNameError: ${message}`, 'InvalidNameError');
   }
}
export class ForbiddenValueError extends BaseError {
   constructor(message = '') {
       super(`ForbiddenValueError: ${message}`, 'ForbiddenValueError');
   }
}
export class MismatchError extends BaseError {
   constructor(message = '') {
       super(`MismatchError: ${message}`, 'MismatchError');
   }
}
export class NotAllowedError extends BaseError {
   constructor(message = '') {
       super(`NotAllowedError: ${message}`, 'NotAllowedError');
   }
}
export class CircularReferenceError extends BaseError {
   constructor(message = '') {
       super(`CircularReferenceError: ${message}`, 'CircularReferenceError');
   }
}
export class ConstraintViolationError extends BaseError {
   constructor(message = '') {
       super(`ConstraintViolationError: ${message}`, 'ConstraintViolationError');
   }
}
export class ReadOnlyError extends BaseError {
   constructor(message = '') {
       super(`ReadOnlyError: ${message}`, 'ReadOnlyError');
   }
}
export class UnauthorizedError extends BaseError {
   constructor(message = '') {
       super(`UnauthorizedError: ${message}`, 'UnauthorizedError');
   }
}
export class ForbiddenError extends BaseError {
   constructor(message = '') {
       super(`ForbiddenError: ${message}`, 'ForbiddenError');
   }
}
export class InvalidCredentialsError extends BaseError {
   constructor(message = '') {
       super(`InvalidCredentialsError: ${message}`, 'InvalidCredentialsError');
   }
}
export class AccountLockedError extends BaseError {
   constructor(message = '') {
       super(`AccountLockedError: ${message}`, 'AccountLockedError');
   }
}
export class SessionExpiredError extends BaseError {
   constructor(message = '') {
       super(`SessionExpiredError: ${message}`, 'SessionExpiredError');
   }
}
export class AccountDisabledError extends BaseError {
   constructor(message = '') {
       super(`AccountDisabledError: ${message}`, 'AccountDisabledError');
   }
}
export class InvalidStateError extends BaseError {
   constructor(message = '') {
       super(`InvalidStateError: ${message}`, 'InvalidStateError');
   }
}
export class InUseError extends BaseError {
   constructor(message = '') {
       super(`InUseError: ${message}`, 'InUseError');
   }
}
export class NotImplementedError extends BaseError {
   constructor(message = '') {
       super(`NotImplementedError: ${message}`, 'NotImplementedError');
   }
}
export class SystemError extends BaseError {
   constructor(message = '') {
       super(`SystemError: ${message}`, 'SystemError');
   }
}
export class TimeoutError extends BaseError {
   constructor(message = '') {
       super(`TimeoutError: ${message}`, 'TimeoutError');
   }
}
export class NotFoundError extends BaseError {
   constructor(message = '') {
       super(`NotFoundError: ${message}`, 'NotFoundError');
   }
}
export class ResourceExhaustedError extends BaseError {
   constructor(message = '') {
       super(`ResourceExhaustedError: ${message}`, 'ResourceExhaustedError');
   }
}
export class IOErrorError extends BaseError {
   constructor(message = '') {
       super(`IOErrorError: ${message}`, 'IOErrorError');
   }
}
export class NetworkError extends BaseError {
   constructor(message = '') {
       super(`NetworkError: ${message}`, 'NetworkError');
   }
}
export class PermissionDeniedError extends BaseError {
   constructor(message = '') {
       super(`PermissionDeniedError: ${message}`, 'PermissionDeniedError');
   }
}
export class DiskFullError extends BaseError {
   constructor(message = '') {
       super(`DiskFullError: ${message}`, 'DiskFullError');
   }
}
export class ConfigurationError extends BaseError {
   constructor(message = '') {
       super(`ConfigurationError: ${message}`, 'ConfigurationError');
   }
}
export class DependencyError extends BaseError {
   constructor(message = '') {
       super(`DependencyError: ${message}`, 'DependencyError');
   }
}
export class SyntaxErrorError extends BaseError {
   constructor(message = '') {
       super(`SyntaxErrorError: ${message}`, 'SyntaxErrorError');
   }
}
export class ReferenceError extends BaseError {
   constructor(message = '') {
       super(`ReferenceError: ${message}`, 'ReferenceError');
   }
}
export class ArithmeticError extends BaseError {
   constructor(message = '') {
       super(`ArithmeticError: ${message}`, 'ArithmeticError');
   }
}
export class IndexErrorError extends BaseError {
   constructor(message = '') {
       super(`IndexErrorError: ${message}`, 'IndexErrorError');
   }
}
export class KeyErrorError extends BaseError {
   constructor(message = '') {
       super(`KeyErrorError: ${message}`, 'KeyErrorError');
   }
}
export class NotCallableError extends BaseError {
   constructor(message = '') {
       super(`NotCallableError: ${message}`, 'NotCallableError');
   }
}
export class AssertionError extends BaseError {
   constructor(message = '') {
       super(`AssertionError: ${message}`, 'AssertionError');
   }
}
export class UnsupportedError extends BaseError {
   constructor(message = '') {
       super(`UnsupportedError: ${message}`, 'UnsupportedError');
   }
}
export class AccessDeniedError extends BaseError {
   constructor(message = '') {
       super(`AccessDeniedError: ${message}`, 'AccessDeniedError');
   }
}