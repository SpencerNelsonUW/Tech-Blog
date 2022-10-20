const router = require('express').Router();
const { User } = require('../../models');


// CREATE new user
router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create(req.body);
        req.session.save(() => {
            username = req.body.username,
            email = req.body.email,
            password = req.body.password
        });
    } catch (err) {
    console.log(err);
  }
});

// Login
router.post('/login', async (req, res) => {
    try {
      const dbUserData = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect email. Please try again!' });
        return;
      }
  
      const validPassword = await dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect password. Please try again!' });
        return;
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


router.get("/", async (req, res) => {

    try {
      // Search the database for all blogposts
      const userData = await User.findAll();
      // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need.
      // Then, the 'home' template is rendered and Blogpost is passed into the template.
      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
});




module.exports = router;
