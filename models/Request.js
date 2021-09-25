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
    status: {
        type: String,
        default: 'Pending'
    }
});

module.exports = mongoose.model('requests', RequestSchema);