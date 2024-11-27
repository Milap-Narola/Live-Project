const express = require('express');
const connectDb = require('./config/db');
require("dotenv").config()
const cors = require('cors');
const { userRouter } = require('./router/user.router');

const app = express()
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json({ msg: "Hello Node " });
});
app.use("/user", userRouter);


const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(`listening on https:localhost:${PORT}`);
    connectDb()
})
