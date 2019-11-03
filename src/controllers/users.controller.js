const User = require('../models/users.model');
module.exports = {
    get: async (req, res) => {
        const users = await User.find({});
        res.send(users)
    }
};
