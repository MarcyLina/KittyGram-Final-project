//controls the CRUD functionality

var models = require('../models');
var Post = models.Post;

//index page....displays post upon opening app
const index = (req, res) => { //request/respond from index page
  Post.find({}, (err, posts) => { //finds the posts, or error
    if (err) {
      res.send(err); //if theres an error, send error msg
    }
    res.json(posts);//else display the posts
  });
}

//creates post with NEW. in form of the predefined model
//sends error OR new model info
const create = (req, res) => {
  Post.create(req.body, function(err, post){
    if (err) res.end(err);
    else res.json(post);
  });
}

//displays post on clicking with the unique ID created for it
//post.find the ID, with the req. parameters "post id"
//if error, send error
const read = (req, res) => {
  Post.find({_id: req.params.post_id}, (err, post) => {
    if (err) {
      res.send(err);
    }
    res.json(post);
  })
}

//functionality to edit post...super lost on this one...Lily helped
const update = (req, res) => {
  //grabs post by ID, like the above "read" function
  Post.findOne({_id: req.params.post_id}, (err, post) => {
    //allows access to post fields
    post.title = req.body.title;
    post.content = req.body.content;
    post.likes = req.body.likes;
    //save new info. display error or newly edited post
    post.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  })
}

//remove the post by ID. Finds the id, like the above functions and
//permanently deletes from db
const deletes = (req, res) => {
  Post.findByIdAndRemove(req.params.post_id, (err, post) => {
    if (err) res.send(err);
   else res.send("Your post was deleted, right MEOW");
  });
}

module.exports.index = index;
module.exports.create = create;
module.exports.read = read;
module.exports.update = update;
module.exports.deletes = deletes;
