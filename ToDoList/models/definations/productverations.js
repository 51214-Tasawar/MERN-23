// const {DataTypes , Model} = require("sequelize") ;
// const sequelize = require("../../dbConnection");
// const {v4 : uuid} = require("uuid")

// class productsverations extends Model { } ;

// users.init ({
//     productsverationId :{
//         primaryKey : true ,
//         type : DataTypes.STRING(100),
//     },
//     veration:{
//         type : DataTypes.STRING(100) ,
//         allowNull : false
//     },
//     description :{
//         type : DataTypes.STRING(),
//         allowNull : false
//     },
//     quantity :{
//         type : DataTypes.NUMBER(),
//         allowNull : false
//     },
//     price : {
//           type : DataTypes.NUMBER(),
//           allowNull : false
//     } 
// },{
//     name : "productsverations" ,
//     timestamps : true ,
//     paranoid : true,
//     sequelize : sequelize
// });
// productsverations.beforeCreate(async(productsveration)=>{
//     productsveration.productsverationId = uuid()
// })

// module.exports = productsverations; 