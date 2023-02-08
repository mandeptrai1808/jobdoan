const express = require("express")
const { messRouter } = require("./messengers.router")
const { userRouter } = require("./users.router")

const rootRouter = express.Router()


rootRouter.use("/users", userRouter)
rootRouter.use("/messengers", messRouter)

module.exports = {
    rootRouter
}