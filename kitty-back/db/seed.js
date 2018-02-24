const db = require ('../models');


const commentsTest = [
  {
    content: 'commentzzz1!!!'
  },
  {
    content: 'commentzz 2'
  }
];

const postsTest = [
  {
    title: 'test title 1',
    content: 'wordzzz!',
    thumbnail_image_url: 'http://www.petsworld.in/blog/wp-content/uploads/2014/09/cat.jpg'
  },
  {
    title: 'test  title 2',
    content: 'wordzzz 2',
    thumbnail_image_url: 'http://i0.kym-cdn.com/photos/images/original/000/012/445/lime-cat.jpg'
  }
  ];

db.Post.remove({}, (err, posts) => {
  db.Post.create(testPostsList, (err, posts) => {
    if (err) {
      return console.log('ERROR ' + err);
    }
    console.log("all posts: " + posts);
    console.log("created " + posts.length + " posts");
    process.exit();
  })
})
