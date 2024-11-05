const rout = require("express").Router();

rout.post("/signUp" , (req ,res)=>{
res.send("sign Up the New User -- >")
})
rout.get("./login", (req ,res)=>{
res.send("Login the User Already Existing --->")
})
rout.get("/logout", (req,res)=>{
res.send("logout the current User -->")
})

module.exports = rout ;