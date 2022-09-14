//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const posts =[];
// const postBody =[];
const aboutContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


//Routes
//Home Route
app.get("/", function(req, res){
  res.render("home", {posts: posts});


});





//About route

app.get("/about", function(req, res){
  res.render("about", { aboutStartingContent : aboutContent});
});

//Contact route
app.get("/contact", function(req, res){
  res.render("contact", { contactStartingContent : aboutContent});
});
app.get("/compose", function(req, res){
  res.render("compose", { contactStartingContent : aboutContent});
});
app.post("/compose", function(req, res){
const post = {
  title:req.body.newPost,
  content:req.body.blogBody
};
posts.push(post);


  res.redirect("/");



});

app.get("/posts/:postName", function(req, res){
  var requestedTitle = _.lowerCase(req.params.postName);
  posts.forEach(function(post){
    var storedTitle = _.lowerCase(post.title);
    if (storedTitle === requestedTitle){
      res.render("post", {
        title: post.title,
        content: post.content

      })
    }else{
      console.log("No match found");
    }
  });
});














app.listen(3000, function() {
  console.log("Server started on port 3000");
});
