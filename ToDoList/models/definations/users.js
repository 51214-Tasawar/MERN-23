const {DataTypes , Model} = require("sequelize") ;
const connection = require("../../new")

class users extends Model{}

users.init({
    userId :{
        primaryKey : true ,
        type : DataTypes.STRING(60) ,
    }, 
    name : {
        type : DataTypes.STRING(34) ,
        allowNull : false
    },
    username : {
        type : DataTypes.STRING(34) ,
        unique : true ,
        allowNull : false
    },
    password : {
        type : DataTypes.STRING(6000),
        allowNull : false 
    }
},
{
    name : "users" ,
    timestamps : true ,
    paranoid : true  ,
    sequelize : connection 
})

module.exports = users ;