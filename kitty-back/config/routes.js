
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//sanity check
router.get('/', (req, res) => {
  res.json('baby got backend!')
})


//post and comment routes
router.get('/api/posts');
router.get('/api/posts/:post_id');
router.get('/api/posts/:post_id/comments');
router.get('/api/posts/:post_id/comments/:comment_id');  
