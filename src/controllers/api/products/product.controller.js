const Products = require('../../../models/products.model');
module.exports = {
    get: async (req, res) => {
        // const get =  require('./methods/get.method');
        // return get(Products,req,res);
        return helpers.apiRequest.get(Products,req,res);
    },
    find: async (req, res) => {
        return helpers.apiRequest.find(Products,req,res);

    },
    post: async (req, res) => {
        const post =  require('./methods/post.method');
       return  post(Products,req,res);
    },
    put: async (req, res) => {
        const put =  require('./methods/put.method');
        return put(Products,req,res);
    },
    delete: async (req, res) => {
        const users = await User.find({});
        res.send(users)
    }
};
