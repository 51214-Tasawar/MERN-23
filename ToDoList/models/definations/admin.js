const {DataTypes , Model} = require("sequelize") ;
const sequelize = require("../../dbConnection");
const {v4 : uuid} = require("uuid")

class admins extends Model { } ;

users.init ({
    adminId :{
        primaryKey : true ,
        type : DataTypes.STRING(100),
    }
},{
    name : "admin" ,
    timestamps : true ,
    paranoid : true,
    sequelize : sequelize
});
admins.beforeCreate(async(admin)=>{
    admin.adminId = uuid()
})


module.exports = admins ; 