const routes = require("express").Router();

const {createUser , getUsers , updateUser , deleteUser} = require("../Controllers/userController");

routes.post("/createUser", createUser);
routes.get("/getUsers" , getUsers);
routes.patch("/updateUser" , updateUser) ;
routes.delete("/deleteUser" , deleteUser);

module.exports = routes ;