const sequelize = require("../dbConnection");
const users = require("./definations/users");

const model = {users} ;

const db = {} ;

db.sequelize = sequelize;
sequelize.model = model;

module.exports = {db , model}