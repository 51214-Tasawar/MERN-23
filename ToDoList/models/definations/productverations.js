const {DataTypes , Model} = require("sequelize") ;
const sequelize = require("../../dbConnection");


class productverations extends Model { } ;

productverations.init ({
    productverationId :{
        primaryKey : true ,
        type : DataTypes.STRING(100),
    },
    productnamename:{
        type : DataTypes.STRING(100),
        allowNull : false
    },
    price: {
        unique : true ,
        allowNull:false ,
        type : DataTypes.STRING(100)
    },
    Quentity:{
   type :DataTypes.STRING(1000),
   allowNull : true
    } 
},{
    name : "productverations" ,
    timestamps : true ,
    paranoid : true,
    sequelize : sequelize
});

module.exports = productverations ; 

































