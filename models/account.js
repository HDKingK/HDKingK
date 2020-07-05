const mongoose = require('mongoose');

var accountSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Username: String,
    Password: String,
    StaffID: String
} , { collection: 'Account' } );

var Account = mongoose.model('Account', accountSchema);

module.exports = Account;