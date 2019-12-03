import Models from "../models";

class BlogController {

  // get list of posts
  async getAll(req, res) {
    res.json({
      message: "aaa"
    });
  }

  // create a post
  async create(req, res) {
    const {
      title
    } = req.bodo;

    await Models.blog.create({
      title
    });

    res.json({
      msg: "Created successfully"
    });
  }

}

export default BlogController;