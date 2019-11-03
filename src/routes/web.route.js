const router = require('express').Router();
const passport = require('passport');
router.get('/', (req,res)=>{
    return res.send('test');
});
router.get('/auth/facebook', passport.authenticate('facebook',{ scope : 'email' }));
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/'
    }));

module.exports = {
    router:router,
    name:'',
    endpoint:''
};
