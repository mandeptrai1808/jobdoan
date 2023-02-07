const {users} = require("../models")
const bcrypt= require("bcryptjs")

const createUser = async (req, res) => {
  const {username, email, password, phone} = req.body;

  //Mã hóa mật khấu
  const salt = bcrypt.genSaltSync(10); 
  const hashPassword = bcrypt.hashSync(password, salt);


  try {
    const isExisted = await users.findOne({where: {email}});
    if (!isExisted){

    //avatar default
    const avatar = "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
    const newUser = await users.create({
        username,
        email,
        phone,
        password: hashPassword,
        avatar,
        usertype: "GUEST"
    })
    res.status(201).send(newUser)
    }
    else res.status(400).send("EMAIL IS EXISTED")
  } catch (error) {
    req.status(500).send(error);
  }

}

const loginUser = async (req,res) => {
  const {email, password} = req.body;
  try {
    const userFind = await users.findOne({where:{email}});
    if (userFind){
        const isLogin = bcrypt.compareSync(password, userFind.password)
        if(isLogin){
            res.send(userFind);
        }
        else res.status(400).send("PASSWORD INCORRECT")
    }
    else res.status(400).send("EMAIL NOT FOUND!")
  } catch (error) {
    res.status(400).send(error);    
  }
}

const updateUser = async(req, res) => {
    const {username, phone, address} = req.body;
    const {id} = req.params
    try {
        if(username) await users.update({username}, {where: {id}});
        if(phone) await users.update({phone}, {where: {id}});
        if(address) await users.update({address}, {where: {id}})
        const userFind = await users.findOne({where: {id}})

        res.send({userFind})
    } catch (error) {
        res.status(500).send(error)        
    }
}

const getAllUsers = async (req, res) => {
  try {
    const result = await users.findAll();
    res.send(result)
  } catch (error) {
    res.status(500).send(error)
  }
}

const creataRootUser = async (req,res) => {
    const {email, password} = req.body;
  try {
    const newUserRoot = await users.create({
        username: "ADMIN",
        email,
        password,
        usertype: "ROOT"
    })
    res.status(201).send(newUserRoot)
  } catch (error) {
    req.status(500).send(errror)
  }
}


module.exports = {
    createUser,
    loginUser,
    updateUser,
    getAllUsers,
    creataRootUser
}