import blogModel from "./blog.model";


class Model {
  constructor() {
    this.blog = new blogModel();
  }
}

export default new Model();