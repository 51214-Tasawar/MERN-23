// const {DataTypes , Model} = require("sequelize") ;
// const sequelize = require("../../dbConnection");
// const {v4 : uuid} = require("uuid")

// class products extends Model { } ;

// users.init ({
//     productId :{
//         primaryKey : true ,
//         type : DataTypes.STRING(100),
//     },
//     productName:{
//         type : DataTypes.STRING(100) ,
//         allowNull : false
//     },
//     description :{
//         type : DataTypes.STRING(),
//         allowNull : false
//     }
// },{
//     name : "products" ,
//     timestamps : true ,
//     paranoid : true,
//     sequelize : sequelize
// });
// products.beforeCreate(async(product)=>{
//     product.productId = uuid()
// })


// module.exports = products ; 