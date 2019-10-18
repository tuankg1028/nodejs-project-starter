import ValidationMiddleware from "./validation.midleware";

class Middleware {
  constructor() {
    this.Validation = new ValidationMiddleware();
  }
}

export default new Middleware();