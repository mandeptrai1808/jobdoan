const express = require("express")
const { createUser, loginUser, updateUser, getAllUsers, creataRootUser } = require("../Controllers/users.controller")
const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.post("/login", loginUser)
userRouter.put("/update/:id", updateUser)
userRouter.get("/getall", getAllUsers)
userRouter.post("/createrootuser", creataRootUser)

module.exports = {
    userRouter
}