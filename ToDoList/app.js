const express = require("express");
const bodyParser= require("body-parser")
const Router=require("./routes/authRouter")
const routes = require("./routes/userRouter")
const port = 3000 ;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use("/auth" , Router)
app.use("/user" , routes)
app.listen(port , ()=>{
    console.log("Testing Dem0")
})