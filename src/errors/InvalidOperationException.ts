export class InvalidOperationException extends Error {
  constructor(msg: string) {
    super(msg);

    Object.setPrototypeOf(this, InvalidOperationException.prototype);
  }
}
