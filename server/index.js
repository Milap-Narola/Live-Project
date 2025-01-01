const express = require('express');
require("dotenv").config()
const cors = require('cors');
const connectDb = require('./config/db');
const { userRouter } = require('./router/user.router');
const productRoute = require('./router/product.router');
const CommentRouter = require('./router/comment.router');
const { RatingRouter } = require('./router/rating.router');
const CartRouter = require('./router/cart.router');
const path = require('path');
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/uploads",express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
    res.status(200).json({ msg: "Hello Node " });
});
app.use("/user", userRouter);
app.use("/product", productRoute);
app.use("/comment", CommentRouter);
app.use("/rating", RatingRouter);
app.use("/cart", CartRouter);


const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
    console.log(`listening on https:localhost:${PORT}`);
    connectDb()
})
