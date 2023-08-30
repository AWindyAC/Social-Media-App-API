const { Schema, model, Types} = require('mongoose');
const reactionSchema = require('./reactions');

const thoughtSchema = new Schema(
    {
    text: { type:String, required: true},
    createdAt: {type:Date, default: Date.now()},
    username: {type: String, required: true},
    reactions: { type: [reactionSchema.schema]},
    thoughtId: { type: Schema.Types.ObjectId, default: new Types.ObjectId() },
},
{
    toJSON:{
        virtuals:true
    },
    id: false,
}
);

thoughtSchema.virtual('reactionCount').get(function () {
    return `${this.reactions.length}`;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;