const router = require('express').Router();

const userRoutes = require('./user-routes');
const blogpostRoutes = require('./blogpost-routes.js')

router.use('/users', userRoutes);
router.use('/blogposts', blogpostRoutes)

module.exports = router;
