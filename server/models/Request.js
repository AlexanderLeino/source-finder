const { Schema, model } = require('mongoose')


const Request = new Schema ({
    requestUser: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    postContent: {
        type: String,
        required: true
    },
    portfolioLink: {
        type: String
    },
    requestOrigin: {
        type: Schema.Types.ObjectId,
        ref: 'Group',
    },
    skill: [{
        type: Schema.Types.ObjectId,
        ref: 'SkillSet'
    }]
})

const Requests = model('Requests', Request);
  
module.exports = Requests;
