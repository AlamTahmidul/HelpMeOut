const Request = require('../models/Request');
const User = require('../models/User');

exports.addRequest = async (req, res) => {
    const { content } = req.body;
    try {
        const author = User.findById(req.user);

        const newRequest = new Request({
            content,
            author,
            displayName: author.username
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
        const user = req.user;
        const request = Request.findById(req.params.id);

        // Check if request belongs to logged in user
        if (user !== request.author) {
            return res.status(401).json({ msg: 'Request does not belong to user' });
        }

        await request.findOneAndRemove(req.params.id);

        res.status(200).json({ msg: 'Request deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
}

exports.claimRequest = async (req, res) => {
    try {
        const user = req.user;
        const request = Request.findById(req.params.id);

        // Check if request belongs to logged in user
        if (user === request.author) {
            return res.status(401).json({ msg: 'Request cannot be claimed by user' });
        }

        const requestFields = {
            status: 'Claimed'
        };

        const updatedRequest = await Request.findByIdAndUpdate(req.params.id, {
            $set: requestFields
        });

        res.status(200).json({ updatedRequest });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
}