import BlogValidator from "./blog.validator";

class Validator {
  constructor() {
    this.Blog = new BlogValidator();
  }
}

export default new Validator();