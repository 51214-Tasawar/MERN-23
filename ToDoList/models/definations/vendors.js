const {DataTypes , Model} = require("sequelize") ;
const sequelize = require("../../dbConnection");
const {v4 : uuid} = require("uuid");

class vendors extends Model { } ;

vendors.init ({
    vendorId :{
        primaryKey : true ,
        type : DataTypes.STRING(),
    }
},{
    name : "vendors" ,
    timestamps : true ,
    paranoid : true,
    sequelize : sequelize
});
vendors.beforeCreate(async(vendor)=>{
    vendor.vendorId = uuid()
})


module.exports = vendors ; 