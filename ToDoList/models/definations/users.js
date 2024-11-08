const {DataTypes , Model} = require("sequelize") ;
const sequelize = require("../../dbConnection");
const { Connection } = require("pg");

class users extends Model { } ;

users.init ({
    userId :{
        primaryKey : true ,
        type : DataTypes.STRING(100),
    },
    name:{
        type : DataTypes.STRING(100),
        allowNull : false
    },
    username: {
        unique : true ,
        type : DataTypes.STRING(100)
    },
    password:{
   type :DataTypes.STRING(1000),
   allowNull : true
    }
},{
    name : "users" ,
    timestamps : true ,
    paranoid : true,
    sequelize : sequelize
});

module.exports = users ; 