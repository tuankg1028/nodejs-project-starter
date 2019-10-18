 var mongoose = require("mongoose");
 var Schema = mongoose.Schema;

 var blogSchema = new Schema({
   title: String,
   author: String,
   body: String,
 });

 export default mongoose.model("blog", blogSchema);