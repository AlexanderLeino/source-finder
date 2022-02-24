const { Schema, model } = require('mongoose')


const Request = new Schema ({
    requestUser: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    requestUserName: {
        type: String
    },
    postContent: {
        type: String,
        required: true
    },
    portfolioLink: {
        type: String
    },
    requestOrigin: {
        type: String

    },
    skill: {
        type: String
    
    }
})

const Requests = model('Requests', Request);
  
module.exports = Requests;
