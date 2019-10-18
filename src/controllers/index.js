import BlogController from "./blog.controller";


class Controller {
  constructor() {
    this.Blog = new BlogController();
  }
}

export default new Controller;