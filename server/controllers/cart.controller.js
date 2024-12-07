const Cart = require('../models/cart.Schema');

const getCart = async (req, res) => {
  try {
    const userId = req.params.userId;
    const cart = await Cart.findOne({ userId });
    res.render('cart', { cart: cart || { items: [] } });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching cart' });
  }
}

const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity, price } = req.body;
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const existingItem = cart.items.find(item =>
      item.productId.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity, price });
    }

    cart.totalAmount = cart.items.reduce((total, item) =>
      total + (item.price * item.quantity), 0
    );

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Error adding to cart' });
  }
}

const removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.params;
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    cart.items = cart.items.filter(item =>
      item.productId.toString() !== productId
    );

    cart.totalAmount = cart.items.reduce((total, item) =>
      total + (item.price * item.quantity), 0
    );

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Error removing from cart' });
  }
}


module.exports = {getCart,addToCart,removeFromCart};