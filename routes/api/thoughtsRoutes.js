const express = require('express');
const router = express.Router();
const { getThoughts, getThoughtById, createThought, updateThought, deleteThought} = require('../../controllers/thoughtsController');
const { getReactions, getReactionById, createReaction, deleteReaction} = require('../../controllers/reactionController');

//GET and POST routes
router.route('/thoughts').get(getThoughts).post(createThought);

//GET user by ID
router.route('/:thoughtId').get(getThoughtById);

//PUT
router.route('/:userId/updateThought').put(updateThought);

//DELETE
router.route('/:thoughtId/deleteThought').get(deleteThought);

//Add reaction
router.route('/:reactionId').get(createReaction);

//Delete Reaction
router.route('/:thoughtId/reactions/:reactionId').get(deleteReaction);

module.exports = router;