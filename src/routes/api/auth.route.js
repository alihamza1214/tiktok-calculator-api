const router = require('express').Router();
const registerController = require('../../controllers/register.controller');
const loginController = require('../../controllers/login.controller');
const usersController = require('../../controllers/users.controller');
const authMiddleware = require('../../middlewares/authMiddleware');

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/', authMiddleware,usersController.get);
module.exports = {
    router:router,
    name:'users',
    endpoint:'/api/users'
};
