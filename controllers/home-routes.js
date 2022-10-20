const router = require("express").Router();
const { Blogpost } = require('../models')

//Route for my home page, this is where posts will be shown
router.get('/', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
        return;
      } else {
            try {
                let postData = await Blogpost.findAll({
                    attributes:['id', 'title', 'body']
                })
                postData = postData.map(post => post.get({ plain: true }))
                console.log(postData);
                res.render('home', {postData})
            } catch (err) {
                console.log(err);
            }}
});


//route for the dashboard, AKA where new posts are made
router.get("/dashboard", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  } else {
    try {
      res.render("dashboard");
    } catch (err) {
      console.log(err);
    }
  }
});

//login to be able to view the posts and make new posts
router.get("/login", (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    console.log(err);
  }
});

//signup page for new users
router.get("/signup", (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
