const mongoose = require('mongoose');

const RequestSchema = mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    displayName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date().getDate()
    },
    content: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false,
        default: ''
    },
    incentive: {
        type: Number,
        required: false,
        default: 0
    },
    status: {
        type: String,
        default: 'Pending'
    },
    claimedBy: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('requests', RequestSchema);