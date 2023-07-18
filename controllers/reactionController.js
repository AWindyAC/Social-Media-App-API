const { Thought, Reaction } = require('../models');

module.exports = {
    async getReactions(req, res) {
        try{
            const reaction = await Reaction.find();
            res.json(reaction);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    
    async getReactionById(req, res) {
        try{
            const reactionFound = await Reaction.findById({ _id: req.params.reactionId });
            if(!reactionFound) {
                return res.status(404).json('No Reactions found with that ID.');
            }
            res.json(reactionFound);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createReaction(req, res) {
        try {
            const reaction = await Reaction.create(req.body);
            const thought = await Thought.findOneAndUpdate(
                { _id: req.body.thoughtId },
                { $push: { reaction: reaction._id}},
                { new: true }
                );
            
            if (!thought) {
                return res.status(404).json({ message: 'thought created, but no thought with this ID'});
            }

            res.json({ message: 'reaction added'});
        } catch (err) {
            console.error(err);
        }
    },

    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reaction: reaction._id}},
                { new: true }
                );
            
            if (!thought) {
                return res.status(404).json({ message: 'thought created, but no thought with this ID'});
            }

            res.json({ message: 'reaction added'});
        } catch (err) {
            console.error(err);
        }
    },
};