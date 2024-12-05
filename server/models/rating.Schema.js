const mongoose = require("mongoose");

// Define the Rating Schema
const ratingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    ratingValue: {
        type: Number,
        required: true,
        min: 1, // Assuming ratings start from 1
        max: 5  // Assuming ratings go up to 5
    },
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
});

ratingSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});


const Rating = mongoose.model("Rating", ratingSchema);


module.exports = Rating;