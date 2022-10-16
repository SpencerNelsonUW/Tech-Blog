const router = require('express').Router();
const { Blogpost } = require('../../models')

//Create a blogpost
router.post('/api/blogpost', async (req, res) => {
    try {
        const dbBlogpostData = await Blogpost.create(req);
        req.session.save(() => {
            title = req.username,
            body = req.body
        });
    } catch (err) {
    console.log(err);
  }
  });

  module.exports = router;