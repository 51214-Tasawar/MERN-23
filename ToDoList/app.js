const express = require("express");
const bodyParser= require("body-parser")
const morgan = require("morgan") 

const Router=require("./routes/authRouter")
const routes = require("./routes/userRouter")
// const {db} = require("./models/index")


const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan("dev"))

app.use("/auth" , Router)
app.use("/user" , routes)


app.listen(port,()=>{
console.log("The Condition is Checked At the port " ,port) 
})
// db.sequelize.sync({alter:true , logging : false }).then(()=>{
//     console.log("Conected to the Data-Base")
// }).catch((error)=>{
//     console.log(error)
//     console.log("Not Conected To the Data-Base")
// })
