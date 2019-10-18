import {
  check
} from "express-validator";

class BlogValidator {
  create() {
    return [
      check("title")
      .not()
      .isEmpty()
      .withMessage("Title is required")
    ];
  }
}

export default BlogValidator;