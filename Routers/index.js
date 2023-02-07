const express = require("express")
const { userRouter } = require("./users.router")

const rootRouter = express.Router()


rootRouter.use("/users", userRouter)

module.exports = {
    rootRouter
}