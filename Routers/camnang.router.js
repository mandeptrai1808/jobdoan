const express = require('express');
const { Model } = require('sequelize');
const { createNewCamnang, uploadImage, DeleteCamnangById, updateCamnang, getAllCamnang } = require('../Controllers/camnangs.controller');
const { uploadImg } = require('../Middlewares/Upload/uploadimg');
const camnangRouter = express.Router();


camnangRouter.post("/newcamnang", createNewCamnang)
camnangRouter.post("/uploadimg/:id", uploadImg("CamnangImage"),uploadImage);
camnangRouter.delete("/delete/:id", DeleteCamnangById);
camnangRouter.put("/update/:id", updateCamnang)
camnangRouter.get("/getall", getAllCamnang)

module.exports = {
    camnangRouter
}