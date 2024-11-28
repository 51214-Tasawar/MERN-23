// const {DataTypes , Model} = require("sequelize") ;
// const sequelize = require("../../dbConnection");
// const {v4 : uuid} = require("uuid")

// class attributes extends Model { } ;

// users.init ({
//     attributeId :{
//         primaryKey : true ,
//         type : DataTypes.STRING(100),
//     },
//    name:{
//         type : DataTypes.STRING(100)
//     },
//     value :{
//         type : DataTypes.STRING()
//     }
// },{
//     name : "attributes" ,
//     timestamps : true ,
//     paranoid : true,
//     sequelize : sequelize
// });
// attributes.beforeCreate(async(attribute)=>{
//     attribute.attributeId = uuid()
// })


// module.exports = attributes ; 