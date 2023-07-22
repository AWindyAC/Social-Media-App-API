const express = require('express');
const router = express.Router();
const { getUsers, getUserById, createUser, deleteUserById, updateUserById, getUserFriends} = require('../../controllers/userController');

//GET
router.route('/').get(getUsers)

//POST route
router.route('/newUser').post(createUser);

//GET , PUT, DELETE user by ID
router.route('/:userId').get(getUserById).put(updateUserById).get(deleteUserById);

//PUT
//router.route('/updateUser/:userId');

//DELETE
//router.route('/deleteUser/:userId');

//GET friends
router.route('/:userId/friends').get(getUserFriends);

module.exports = router;