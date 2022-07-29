export default class Currency {
  constructor(code, name) {
    // Create objects
    this._name = name;
    this.code = code;
  }

  // Methods
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }

  // Setters
  set name(newName) {
    this._name = newName;
  }

  set code(newCode) {
    this._code = newCode;
  }

  // Getters
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }
}
