const router = require('express').Router();
const authMiddleware = require('../../middlewares/authMiddleware');

module.exports = {
    router:router,
    name:'users',
    endpoint:'/api/users'
};
