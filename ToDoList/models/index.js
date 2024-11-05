const {connection} = require("../new")
const users = require("./definations/users") ;

const models = {users} ;

const db = {} ;
db.connection = connection ;
// connection.models= models ;

module.exports = {db}
