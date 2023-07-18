const {User, Thought, Reaction } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try{
            const thought = await Thought.find();
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    
    async getThoughtById(req, res) {
        try{
            const thoughtFound = await Thought.findById({ _id: req.params.thoughtId });
            if(!thoughtFound) {
                return res.status(404).json('No thoughts found with that ID.');
            }
            res.json(thoughtFound);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thought: thought._id}},
                { new: true }
                );
            
            if (!user) {
                return res.status(404).json({ message: 'thought created, but no users with this ID'});
            }

            res.json({ message: 'thought created'});
        } catch (err) {
            console.error(err);
        }
    },

    async updateThought(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate({_id: req.params.thoughtId});
            if (!thought) {
                return res.status(404).json({ message: "Could not find the thought!"});
            }
        }catch (err) {
            console.log(`Failed updating thought with id:${req.params.thoughtId}`, err);
        }
    },
    
    async deleteThought(req, res) {
        try{
            // Delete from DB first to avoid orphaned references in Users collection
            const deletedThought =  await Thought.deleteOne({ _id : req.params.thoughtId});
            if(deletedThought && !deletedThought.n){
                throw Error("Error deleting thought");
            }
        }catch (err) {
            console.log(`Failed Deleting thought ${req.params.thoughtId} `, err);
        }
    },

    /* async getReactions(req, res) {
        const thought = await Thought.findById({_id.params.thoughtId});
    } */
    
};