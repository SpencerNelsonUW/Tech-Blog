const router = require('express').Router();

const userRoutes = require('./user-routes');
const blogpostRoutes = require('./blogpost-routes.js')

router.use('/users', userRoutes);
router.use('/blogpost', blogpostRoutes)

module.exports = router;
