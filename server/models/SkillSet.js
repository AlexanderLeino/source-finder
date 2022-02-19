const { Schema, model} = require('mongoose')

const SkillsSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    discipline:[{
        type:'String',
        enum: ['Front End', 'Full Stack', 'Back End' ],
        required: true
    }]
})

const SkillSet = model('SkillSet', SkillsSchema)

module.exports = SkillSet