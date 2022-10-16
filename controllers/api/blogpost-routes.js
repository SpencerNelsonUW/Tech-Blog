const router = require('express').Router();
const { Blogpost } = require('../../models')

//Create a blogpost
router.post('/', async (req, res) => {
    try {
        const dbBlogpostData = await Blogpost.create(req.body);
        req.session.save(() => {
            title = req.body.username,
            body = req.body.body
        });
    } catch (err) {
    console.log(err);
  }
  });

  module.exports = router;