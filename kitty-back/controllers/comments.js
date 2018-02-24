//basically the same stuff as the  Post controller, but pertaining to the comments
var models = require('../models');
var Comment = models.Comment;
var Post = models.Post;


//this was tricky, referenced back to the reddit lab we did
const create = (req, res) => {
  Comment.create(req.body, function(err, comment){
    if (err) res.end(err);
    else {
      Post.findById(req.params.post_id, function(err, post) {
        if (err) res.send(err);
        else {
          post.comments.push(comment);
          post.save();
          res.json(comment);
        }
      })
    }
  });
}

const update = (req, res) => {
  Comment.findByIdAndUpdate(req.params.comment_id,
    {$set: req.body}, function(err, comment){
    if (err) res.send(err);
    else res.json(comment);
  });
}

// This DELETE does not work yet...I will get back to it later, as it is not essential to my // MVP right now
// const deletes = (req, res) => {
//   Comment.remove({_id: req.params.comment_id}, (err, comment) => {
//     if (err) {
//       console.log('error removing comment from db');
//       res.status(500).send(err);
//     }
//    })
// module.exports.deletes = deletes;
module.exports.create = create;
module.exports.update = update
