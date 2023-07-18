const { Schema, Types, model } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {type: Schema.Types.ObjectId, default: new Types.ObjectId()},
    body: { type: String,required:true},
    createdAt:{ type: Date, default: Date.now()},
    username: {type: String, required: true}
});

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;