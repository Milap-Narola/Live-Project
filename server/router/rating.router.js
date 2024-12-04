const { Router } = require("express");
const {
  getRatingByProdcutId,
  createRating,
  updateRating,
  deleteRating,
} = require("../controllers/rating.controller");
const { decode } = require("../middlewares/decodeJwt");

const RatingRouter = Router();

RatingRouter.get("/:productId", getRatingByProdcutId);
RatingRouter.post("/", decode, createRating);
RatingRouter.patch("/:ratingId", decode, updateRating);
RatingRouter.delete("/:ratingId", decode, deleteRating);
module.exports = { RatingRouter };
