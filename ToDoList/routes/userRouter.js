const routes = require("express").Router();

const {createUser , getUsers , updateUser , deleteUser} = require("../Controllers/userController");
const {Create ,Update ,Delete ,Get} = require("../Validations/uservalidator")

routes.post("/createUser",Create,createUser);
routes.get("/getUsers" , Get,getUsers);
routes.patch("/updateUser" ,Update,updateUser) ;
routes.delete("/deleteUser" , Delete ,deleteUser);

module.exports = routes ;