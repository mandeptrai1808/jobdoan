const {camnang} = require('../models')

const createNewCamnang = async (req,res) => {
  const {title, content }  = req.body;
  try{
    const newcamnang = await camnang.create({
        title,
        content
   })
   res.status(201).send(newcamnang)
  } catch(err){
    res.status(500).send(err);
  }
}

const uploadImage = async (req, res) => {
    const { file } = req;
    const img = `http://localhost:5000/${file.path}`;
    const {id} = req.params;
  
    try {
      await camnang.update({image: img}, {where: {id}})
      const newMenu = await camnang.findOne({where: {id}})
      res.status(200).send(newMenu)
    } catch (error) {
      res.status(500).send(error)
    }
  }


const DeleteCamnangById = async (req, res) => {
  const {id} = req.params;

  try {
    await camnang.destroy({where: {id}})
    res.send("DELETED");
  } catch (error) {
    res.status(500).send(error)
  }
}

const updateCamnang = async (req, res) => {
    const {title, content} = req.body;
    const {id} = req.params;

    try {
        if (title) await camnang.update({title}, {where: {id}});
        if (content) await camnang.update({content}, {where: {id}});
        const findCamnang = await camnang.findOne({where: {id}});

        res.send(findCamnang);
    } catch (error) {
        res.status(500).send(error)
    }
  
}

const getAllCamnang = async (req, res) => {
  try {
    const result = await camnang.findAll();
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
    createNewCamnang,
    uploadImage,DeleteCamnangById,
    updateCamnang,
    getAllCamnang
}