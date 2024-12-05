const Rating = require("../models/rating.Schema");

const getRatingByProductId = async (req, res) => {
  try {
    const { productId } = req.params;
    let getRating = await Rating.find({ product: productId });
    res.send(getRating);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const createRating = async (req, res) => {
  try {
    req.body.user = req.user.id;
    let createRating = await Rating.create(req.body);
    res.send(createRating);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const updateRating = async (req, res) => {
  let { ratingId } = req.params;
  try {
    let updaterating = await Rating.findByIdAndUpdate(ratingId, req.body, {
      new: true,
    });
    res.send(updaterating);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const deleteRating = async (req, res) => {
  let { ratingId } = req.params;

  try {
    let deleteRating = await Rating.findByIdAndDelete(ratingId);
    res.send(deleteRating);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = {
  getRatingByProductId,
  createRating,
  updateRating,
  deleteRating,
};
