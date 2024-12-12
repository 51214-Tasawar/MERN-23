const {DataTypes , Model} = require("sequelize") ;
const sequelize = require("../../dbConnection");
const {hash} = require("bcryptjs")
const {v4 : userId} = require("uuid")

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
        allowNull:false ,
        type : DataTypes.STRING(100)
    },
    password:{
   type :DataTypes.STRING(1000),
   allowNull : true
    } ,
    email :{
        type : DataTypes.STRING(100),
        allowNull: false ,
        defaultValue : " " 
    }
},{
    name : "users" ,
    timestamps : true ,
    paranoid : true,
    sequelize : sequelize
});

users.beforeCreate(async(NewUser)=>{
   NewUser.userId = userId()
   NewUser =  await hash(NewUser.password , 10)
})


module.exports = users ; 