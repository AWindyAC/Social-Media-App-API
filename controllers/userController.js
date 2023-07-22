const { User } = require('../models');

module.exports = {
    async getUsers(req, res) {
        try{
            const users = await User.find();
            res.json(users);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try{
            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
            });
            return res.status(201).json({'message': 'User created successfully', data })
        } 
        catch (error){ 
            console.log('Error creating new user:', error);
            throw err;
        }
    },
    async getUserById(req, res) {
        try{
            const user = await User.findOne({_id: req.params.userId});
            if (!user){
                return res.status(404).json({ message: "No such user found" });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
            console.log("Error getting the specified user:", err);
        }
    },
    async deleteUserById(req, res) {
        try {
            const user = await User.findByIdAndDelete({_id: req.params.userId});
            if(!user) {
                return res.status(404).json({ message: `Could not find a user` });
            }
            else {
                return res.sendStatus(204);
            }
        } catch (err) {
            console.log(`Failed to remove ${req.params.userId}:`, err);
        }
    },
    async updateUserById(req, res) {
        try {
            const user = await User.findByIdAndUpdate({_id: req.params.userId});
            if (!user) {
                return res.status(404).json({ message: "Could not find a user"});
            }
        }catch (err) {
            console.log(`Failed updating user with id:${req.params.userId}`, err);
        }
    },
    async getUserFriends(req, res) {
        const user = await User.findById({_id: req.params.userId});
        if (!user){
            return res.status(404).json({ message: "No such user found" });
        }
        const friends = user.friends.find({});
        res.json(friends);
    },
};