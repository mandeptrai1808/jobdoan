const express = require("express")
const { menuRouter } = require("./menus.router.")
const { messRouter } = require("./messengers.router")
const { userRouter } = require("./users.router")

const rootRouter = express.Router()


rootRouter.use("/users", userRouter)
rootRouter.use("/messengers", messRouter)
rootRouter.use("/menus", menuRouter)

module.exports = {
    rootRouter
}