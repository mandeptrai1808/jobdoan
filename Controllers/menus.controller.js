const {menu} = require('../models')

const addNewMenu = async (req, res) => {
  const {type, title, content} = req.body;
  console.log({type, title, content})
    try {
        const newMenu = await menu.create({type, title, content, img: ""})
        res.status(201).send(newMenu);
    } catch (error) {
        res.status(500).send(error)        
    }
}


const uploadImage = async (req, res) => {
  const { file } = req;
  const img = `http://localhost:5000/${file.path}`;
  const {id} = req.params;

  try {
    await menu.update({img}, {where: {id}})
    const newMenu = await menu.findOne({where: {id}})
    res.status(200).send(newMenu)
  } catch (error) {
    res.status(500).send(error)
  }
}

const deleteMenu = async (req, res) => {
  const {id} = req.params;
  try {
    await menu.destroy({where: {id}});
    res.status(200).send("DELETED");
  } catch (error) {
    res.status(500).send(error)
  }
}

const updateMenu = async (req, res) => {
  const {title, content} = req.body;
  const {id} = req.params;
  try {
    if(title) await menu.update({title}, {where:{id}})
    if(content) await menu.update({content}, {where:{id}})
    const newMenu = await menu.findOne({where: {id}})
    res.status(200).send(newMenu)
  } catch (error) {
    res.status(500).send(error)
  }
}

const getMenuListByType = async (req, res) => {
  const {type} = req.params;
  try {
    const result = await menu.findAll({where: {type}})
    res.send(result);
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
    addNewMenu,
    uploadImage,
    deleteMenu,
    updateMenu,
    getMenuListByType
}
