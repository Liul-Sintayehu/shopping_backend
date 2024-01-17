const express = require('express')
const { addOrder, getOrders, deleteOrder } = require('./controller')

const Router = express.Router()

Router.post('/addorder',addOrder)
Router.get('/getorders',getOrders)
Router.post('/deleteorder',deleteOrder)

module.exports = Router