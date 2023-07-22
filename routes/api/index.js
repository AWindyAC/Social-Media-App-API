const router = require('express').Router();
const usersRoutes = require('./usersRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');


router.use('/users', usersRoutes);
router.use('/thought', thoughtsRoutes);


module.exports = router;