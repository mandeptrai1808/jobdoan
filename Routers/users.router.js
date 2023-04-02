const express = require("express")
const { createUser, loginUser, updateUser, getAllUsers, createRootUser, loginRootUser, deleteUserByUserId, getAllRootUsers, deleteRootUserById } = require("../Controllers/users.controller")
const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.post("/login", loginUser)
userRouter.put("/update/:id", updateUser)
userRouter.get("/getall", getAllUsers)
userRouter.post("/createrootuser", createRootUser)
userRouter.post("/loginrootuser", loginRootUser)
userRouter.delete("/delete/:id", deleteUserByUserId)
userRouter.get("/getallroot", getAllRootUsers)
userRouter.delete("/deleteroot/:id", deleteRootUserById)

module.exports = {
    userRouter
}