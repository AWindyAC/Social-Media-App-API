const { Schema, model } = require('mongoose');
const thoughtSchema = require('./thoughts');



const userSchema = new Schema(
    {
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true  // remove any leading or trailing whitespace from the input string before validating it as
    },
    email: {
        type: String,
        required: true,
        unique: true, // to ensure that each account has a unique e-mail address
        match: /^\S+@\S+\.\S+$/  // regular expression for validating
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref:'User'
    }], 
    friends: [{
        type: Schema.Types.ObjectId,
        ref:'User'
    }]
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
}
);

userSchema.virtual('friendCount').get(function () {
    return `${this.friends.length}`;
})

const User = model('User', userSchema);

module.exports = User;