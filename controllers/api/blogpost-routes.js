const router = require('express').Router();
const { Blogpost } = require('../../models')

//Create a blogpost
router.post('/', async (req, res) => {
    try {
        const dbBlogpostData = await Blogpost.create({
            title : req.body.title,
            body : req.body.body
        })
        res.status(200).json(dbBlogpostData);
    } catch (err) {
    console.log(err);
  }
  });

  //GET blogposts
  router.get('/', async (req, res) => {
    try {
    // Search the database for all blogposts
    const postData = await Blogpost.findAll()
    // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
    // const Blogpost = postData.get({ plain: true });
    // Then, the 'dish' template is rendered and Blogpost is passed into the template.
    res.json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
  });

  module.exports = router;