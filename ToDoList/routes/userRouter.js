const routes = require("express").Router();

    routes.post("/createUser",(req ,res)=>{
        res.send("New User Created Successfully");
         })
    routes.get("/getUsers" , (req, res)=>{
        res.send("Get All User Successfully")
         })
    routes.post("/updateUser" , (req,res)=>{
        res.send("Update User Successfully")
    })

    routes.get("/deleteUser" , (req ,res)=>{
     res.send("User Deleted SuccessFully")
    })

    module.exports = routes ;