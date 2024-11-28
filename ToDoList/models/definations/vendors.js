// const {DataTypes , Model} = require("sequelize") ;
// const sequelize = require("../../dbConnection");
// const {v4 : uuid} = require("uuid");
// const { allow } = require("joi");

// class vendors extends Model { } ;

// users.init ({
//     vendorId :{
//         primaryKey : true ,
//         type : DataTypes.STRING(100),
//     }
// },{
//     name : "vendors" ,
//     timestamps : true ,
//     paranoid : true,
//     sequelize : sequelize
// });
// vendors.beforeCreate(async(vendor)=>{
//     vendor.vendorId = uuid()
// })


// module.exports = vendors ; 