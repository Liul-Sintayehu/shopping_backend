const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
     phone: String,
     address: String,
     items: String,
     price: String
})

const OrderModel = mongoose.model('Orders',orderSchema)

module.exports = OrderModel