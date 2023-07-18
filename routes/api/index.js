const router = require('express').Router();
const usersRoutes = require('./usersRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');


router.use('/api', usersRoutes);
router.use('/api', thoughtsRoutes);

router.use((req, res) => {
    return res.send('Wrong route!');
});

module.exports = router;