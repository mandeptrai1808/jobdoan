const express = require("express")
const { createUser, loginUser, updateUser, getAllUsers, createRootUser, loginRootUser } = require("../Controllers/users.controller")
const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.post("/login", loginUser)
userRouter.put("/update/:id", updateUser)
userRouter.get("/getall", getAllUsers)
userRouter.post("/createrootuser", createRootUser)
userRouter.post("/loginrootuser", loginRootUser)

module.exports = {
    userRouter
}