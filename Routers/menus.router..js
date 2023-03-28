const express= require("express");
const { addNewMenu, uploadImage, deleteMenu, updateMenu, getMenuListByType } = require("../Controllers/menus.controller");
const { uploadImg } = require("../Middlewares/Upload/uploadimg");
const menuRouter = express.Router();

menuRouter.post('/addnewmenu', addNewMenu)
menuRouter.post('/uploadimg/:id', uploadImg("MenuImage"), uploadImage)
menuRouter.delete('/deletemenu/:id', deleteMenu)
menuRouter.put('/updatemenu/:id', updateMenu)
menuRouter.get('/getmenulist/:type', getMenuListByType)

module.exports = {
    menuRouter
}
