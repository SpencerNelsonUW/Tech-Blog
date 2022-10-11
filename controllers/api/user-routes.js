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

module.exports = router;
