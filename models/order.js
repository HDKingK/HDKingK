const mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    StaffID: String,
    ItemsList: String,
    Total: Number 
} , { collection: 'Order' } );

var Order = mongoose.model('Order', orderSchema);

module.exports = {
    order : Order,
    schema : orderSchema
} ;