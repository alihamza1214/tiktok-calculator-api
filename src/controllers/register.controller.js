const { registerValidation } = require('src/validation');
const bcrypt = require('bcrypt');
const User = require('../models/users.model');
module.exports = async (req, res) => {
   //* feild validations *//
    const validationFailed = registerValidation(req.body);
    if (validationFailed) {
        return res.send(validationFailed.details);
    }
   //* user validation *//
    const exists = await User.findOne({ email: req.body.email.toLowerCase() });
    if (exists) {
        return res.status(401).send({ message: 'User with this email already exists' });
    }

   //* password hashing *//
   const salt =  await bcrypt.genSalt(10);
   const hashPassword =  await bcrypt.hash(req.body.password,salt);

   //* creating new user *//
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashPassword
    });
    try{
        const saveUser = await user.save();
       return  res.send(saveUser)
    }catch(e){

    }
};
