const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const userSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String, unique: true, lowercase: true},
    password: {type: String},
    phone: {type: String},
    phoneOtp: {type: String},
    phoneVerified: {type: Boolean, default: false},
    emailVerified: {type: Boolean, default: false},
    emailOtp: String,
    gender: {type: String},
    type: {type: String, lowercase: true},
    role: {type: String},
    vendor: {type: ObjectId, ref: 'vendors'},
    store: {type: ObjectId, ref: 'stores'},
    shippingAddresses: [{type: ObjectId, ref: 'addresses'}],
    defaultShippingAddress: {type: ObjectId, ref: 'addresses'},
    billingAddress: String,
    googleId: {type: String},
    facebookId: {type: String},
}, {
    timestamps: true
});
module.exports = mongoose.model('users', userSchema);
