const router = require('express').Router();


//Route for my home page, this is where posts will be shown
router.get('/', (req, res) => {
    try {
        res.render('home')
    } catch (err) {
        console.log(err);
    }
});

//route for the dashboard, AKA where new posts are made
router.get('/dashboard', (req, res) => {
    try {
        res.render('dashboard')
    } catch (err) {
        console.log(err);
    }
});

//login to be able to view the posts and make new posts
router.get('/login', (req, res) => {
    try {
        res.render('login')
    } catch (err) {
        console.log(err);
    }
});

//signup page for new users
router.get('/signup', (req, res) => {
    try {
        res.render('signup')
    } catch (err) {
        console.log(err);
    }
});





module.exports = router;