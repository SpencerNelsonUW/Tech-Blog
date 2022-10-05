const router = require('express').Router();

router.get('/', (req, res) => {
    try {
        res.render('home')
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;