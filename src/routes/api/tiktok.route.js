const router = require('express').Router();
const authMiddleware = require('../../middlewares/authMiddleware');
const tiktokController = require('../../controllers/api/tiktokUsers/tiktokUsers.controller');


router.get('/',tiktokController.get);
router.get('/get-user/:id',tiktokController.getUser);
router.get('/search-users/:keyword',tiktokController.getUsers);
router.get('/get-user-listing/:user_id',tiktokController.getUserListing);
router.get('/get-user-posts/:user_id',tiktokController.getUserPosts);
router.get('/login',tiktokController.userLogin);

module.exports = {
    router:router,
    name:'users',
    endpoint:'/api/tiktok'
};
