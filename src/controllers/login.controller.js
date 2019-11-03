const { loginValidation } = require('../validation');
const bcrypt = require('bcrypt');
const User = require('../models/users.model');
const jwt = require('jsonwebtoken');
module.exports = async (req, res) => {
   //* feild validations *//
    const validationFailed = loginValidation(req.body);
    if (validationFailed) {
        res.send(validationFailed.details);
    }
   //* user validation *//
    const user = await User.findOne({ email: req.body.email.toLowerCase() });
    if (!user) {
        return res.status(401).send({ message: 'email or password is incorrect' });
    }
   //* password comparing *//
//    const salt =  await bcrypt.genSalt(10);
   const compare = await bcrypt.compare(req.body.password,user.password);
   const userFields = {
       _id:user._id,
       firstName:user.firstName,
       lastName:user.lastName,
       email:user.email
   };
   if(compare){
    var token = jwt.sign(userFields, config.jwt_secret,{ expiresIn: '365d' });
    return res.send({accessToken:token});
   }else{
    return res.status(401).send({ message: 'email or password is incorrect' });
}
};
