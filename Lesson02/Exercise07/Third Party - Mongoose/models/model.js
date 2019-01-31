//	Load mongoose module
const mongoose = require("mongoose");

//	Declare schema and assign Schema class 
const Schema = mongoose.Schema;

//	Create Schema Instance and add schema properties(assuming we're creating for a simple blog)
const BlogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: String,
  createdOn: {
    type: Date,
    default: Date.now
  }
});

//	Call mongoose on model() function to use the default mongoose connection 
//mongoose.model();

//	Pass in the model name(ArticleModel) as the first argument 
//mongoose.model("ArticleModel");

//	Pass in the Schema name(BlogSchema) as the second argument
//mongoose.model("ArticleModel", BlogSchema);

//	Make model exportable model
module.exports = mongoose.model("ArticleModel", BlogSchema);
