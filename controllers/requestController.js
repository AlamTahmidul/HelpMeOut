const Request = require('../models/Request');
const User = require('../models/User');

const { sendEmail } = require('../utils/sendMail');

exports.addRequest = async (req, res) => {
    const { content } = req.body;
    try {
        const user = await User.findById(req.user.id);

        const newRequest = new Request({
            content,
            displayName: user.username,
            author: user._id
        });

        await newRequest.save();

        res.status(200).json({ newRequest });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
}

exports.deleteRequest = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const request = await Request.findById(req.params.id);

        // Check if request belongs to logged in user
        if (user._id.toString() !== request.author.toString()) {
            return res.status(401).json({ msg: 'Request does not belong to user' });
        }

        await Request.findOneAndRemove(req.params.id);

        res.status(200).json({ msg: 'Request deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
}

exports.claimRequest = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const request = await Request.findById(req.params.id);

        // Check if request exists
        if (!request) {
            return res.status(404).json({ msg: 'Request does not exist' });
        }

        // Check if request is already claimed
        if (request.status === 'Claimed') {
            return res.status(401).json({ msg: 'Request already claimed' });
        }

        // Check if request belongs to logged in user
        if (user._id.toString() === request.author.toString()) {
            return res.status(401).json({ msg: 'Request cannot be claimed by user' });
        }

        const requestFields = {
            status: 'Claimed',
            claimedBy: user.username
        };

        const updatedRequest = await Request.findByIdAndUpdate(req.params.id, {
            $set: requestFields
        });

        const author = await User.findById(request.author);
        await sendEmail(author.email, user.username);

        res.status(200).json({ updatedRequest });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
}