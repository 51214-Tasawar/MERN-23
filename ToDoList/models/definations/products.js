// const {DataTypes , Model} = require("sequelize") ;
// const sequelize = require("../../dbConnection");
// const vendors = require("./vendors")
// const {v4 : uuid} = require("uuid")

// class products extends Model { } ;

// products.init ({
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
//     } ,
//     vendorId  : {
//         type : DataTypes.STRING(),
//         allowNull : false ,
//         // references :{
//         //     model :vendors ,
//         //     key : "vendorId "
//         // }
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