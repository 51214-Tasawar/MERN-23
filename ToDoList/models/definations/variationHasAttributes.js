const {DataTypes , Model} = require("sequelize") ;
const sequelize = require("../../dbConnection");
const {v4 : uuid} = require("uuid")

class variationHasAttributes extends Model { } ;

users.init ({
    variationHasAttributes :{
        primaryKey : true ,
        type : DataTypes.STRING(100),
    }
},{
    name : "variationHasAttributes" ,
    timestamps : true ,
    paranoid : true,
    sequelize : sequelize
});
variationHasAttributes.beforeCreate(async(variationHasAttributes)=>{
    variationHasAttributes.variationHasAttributes = uuid()
})


module.exports = variationHasAttributes ; 