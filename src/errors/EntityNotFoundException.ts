export class EntityNotFoundException extends Error {
  constructor(entityName: string) {
    const msg = `${entityName} was not found`;
    super(msg);

    Object.setPrototypeOf(this, EntityNotFoundException.prototype);
  }
}
