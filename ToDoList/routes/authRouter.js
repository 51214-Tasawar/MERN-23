const rout = require("express").Router(); // creating Router

const {signUp , login , logout} = require("../Controllers/authController") // Importing Functions

rout.post("/signUp", signUp);
rout.get("/login" , login);
rout.get("/logout" , logout)

module.exports = rout ;