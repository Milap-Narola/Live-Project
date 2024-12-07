const { Router } = require('express');
const { addToCart, getCart, removeFromCart } = require('../controllers/cart.controller');
const { decode } = require('jsonwebtoken');

const  CartRouter  = Router();
CartRouter.post('/add', addToCart);
CartRouter.get('/:userId', decode, getCart);
CartRouter.delete('/:userId/remove/:productId', removeFromCart);

module.exports = CartRouter;