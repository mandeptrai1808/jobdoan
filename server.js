const express = require("express")
const app = express();
const path = require("path");
const {sequelize} = require("./models")
const {rootRouter} = require("./Routers")
const cors = require("cors")

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(
    cors({
        origin: "*",
    })
)

const publicPath = path.join(__dirname, "./Public");
app.use("/Public", express.static(publicPath));
app.use("/api/v1", rootRouter)

app.listen(PORT, async () => {
  console.log(`server run on  http://locahost:${PORT}`);

  try{
    await sequelize.authenticate();
    console.log("Connectdatabase success");
  } catch(err){
    console.log("Connect database error ", err)
  }
})