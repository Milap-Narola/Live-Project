
const Rating = require("../models/rating.Schema");

const getRatingByProdcutId = async (req, res) => {
  try {
    const { productId } = req.params;
    let rating = await Rating.find({ product: productId });
    res.send(rating);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const createRating = async (req, res) => {
  try {
    req.body.user = req.user.id;
    let rating = await Rating.create(req.body);
    res.send(rating);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const updateRating = async (req, res) => {
  let { ratingId } = req.params;
  try {
    let rating = await Comment.findByIdAndUpdate(ratingId, req.body, {
      new: true,
    });
    res.send(rating);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const deleteRating = async (req, res) => {
  let { ratingId } = req.params;

  try {
    let rating = await Rating.findByIdAndDelete(ratingId);
    res.send(rating);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = {
  getRatingByProdcutId,
  createRating,
  updateRating,
  deleteRating,
};
