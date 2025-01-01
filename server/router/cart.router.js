const { Router } = require("express");
const {
  getCartByUserId,
  addToCart,
  removeFromCart,
  addQuantity,
  removeQuantity,
  checkout,
} = require("../controllers/cart.controller");
const { decode } = require("../middlewares/decodeJwt");

const CartRoute = Router();
CartRoute.get("/", decode, getCartByUserId);
CartRoute.post("/", decode, addToCart);
CartRoute.delete("/:cartId", decode, removeFromCart);
CartRoute.patch("/add-qty/:cartId", decode, addQuantity);
CartRoute.patch("/remove-qty/:cartId", decode, removeQuantity);
CartRoute.post("/payment", checkout);

module.exports = CartRoute;