const express = require('express');
const router = express.Router();
const { getUsers, getUserById, createUser, deleteUserById, updateUserById, getUserFriends} = require('../../controllers/userController');

//GET
router.route('/users').get(getUsers)

//POST route
router.route('/users/newUser').post(createUser);

//GET user by ID
router.route('/:userId').get(getUserById);

//PUT
router.route('/updateUser/:userId').put(updateUserById);

//DELETE
router.route('/deleteUser/:userId').get(deleteUserById);

//GET friends
router.route('/user/:userId/friends').get(getUserFriends);

module.exports = router;