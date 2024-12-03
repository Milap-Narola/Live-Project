const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDb = require('./config/db');
const { userRouter } = require('./router/user.router');
const { productRouter } = require('./router/product.router');
require("dotenv").config()

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "./client")));

app.get("/", (req, res) => {
    res.status(200).json({ msg: "Hello Node " });
});
app.use("/user", userRouter);
app.use("/product", productRouter);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`listening on https:localhost:${PORT}`);
    connectDb()
})
