const express = require("express");
const { createNewMessengers, getMessengersByRoomId } = require("../Controllers/messengers.controller");


const messRouter = express.Router();

messRouter.post("/", createNewMessengers)
messRouter.get("/:roomId", getMessengersByRoomId)


module.exports = {
    messRouter
}