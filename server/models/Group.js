const { Schema, model} = require('mongoose')

const Group = new Schema({
    groupName: {
        type: String,
        required: true,
        unique: true
    },
    techNeeded: [{
        type: Schema.Types.ObjectId,
        ref:'SkillSet'
    }],
    aboutGroup: {
        type: String
    },
    category: {
        type: String,
        required:true
    },
    profilePic: {
        type: String
    },
    adminId: {
        type: String,
        required: true
    },
    groupMembers: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: null
    }]
})

const groupSchema = model('Group', Group);
  
  module.exports = groupSchema;