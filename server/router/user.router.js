const { Router } = require("express");
const {
  GetUser,
  Signup,
  Login,
  deleteUser,
  verifyUser,
  getAdmins,
  DeleteMany,
  GetAllUser,
} = require("../controllers/user.controller");
const { decode } = require("../middlewares/decodeJwt");
const { isSuperAdmin } = require("../middlewares/admin");
const userRouter = Router();

userRouter.get("/All", GetAllUser);
userRouter.get("/:id", GetUser);
userRouter.delete("/DeleteMany", DeleteMany);
userRouter.post("/signup", Signup);
userRouter.post("/login", Login);
userRouter.delete("/:id", deleteUser);
userRouter.get("/verify/:token/:otp",decode,verifyUser);
userRouter.get("/all-admin",decode,isSuperAdmin,getAdmins);
module.exports = { userRouter };