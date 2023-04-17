const express = require("express")
const { menuRouter } = require("./menus.router.")
const { messRouter } = require("./messengers.router")
const { userRouter } = require("./users.router")
const { camnangRouter } = require("./camnang.router")

const rootRouter = express.Router()


rootRouter.use("/users", userRouter)
rootRouter.use("/messengers", messRouter)
rootRouter.use("/menus", menuRouter)
rootRouter.use("/camnang", camnangRouter)

module.exports = {
    rootRouter
}