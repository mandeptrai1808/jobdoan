const {messengers} = require("../models");


const createNewMessengers = async (req, res) => {
  const {userid, content, usertype, roomId} = req.body;
  try {
    const newMess = await messengers.create({
        userid,
        content,
        usertype,
        roomId
    });

    res.status(201).send(newMess);

  } catch (error) {
    res.status(500).send(error)
  }
}

const getMessengersByRoomId = async (req,res) => {
  const {roomId} = req.params;
  console.log(roomId)
  try {
    const result = await messengers.findAll({where: {roomId}})
    res.send(result);
  } catch (error) {
    res.status(500).send(error)    
  }
}

module.exports = {
    createNewMessengers,
    getMessengersByRoomId
}