import {
  validationResult
} from "express-validator";


class Validation {
  validateInput(req, res, next) {

    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.formatter.badRequest(errors.array());
    } else {
      next();
    }
  }
}

export default Validation;