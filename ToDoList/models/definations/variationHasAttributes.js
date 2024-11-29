const {DataTypes , Model} = require("sequelize") ;
const sequelize = require("../../dbConnection");
const productsverations = require("./productverations")
const attributes = require("./attributes") 
const {v4 : uuid} = require("uuid");


class variationHasAttributes extends Model { } ;

variationHasAttributes.init ({
    variationHasAttributes :{
        primaryKey : true ,
        type : DataTypes.STRING(100),
    } ,
    productsverationId : {
        type : DataTypes.STRING(),
        references :{
            model : productsverations ,
            key : "productsverationId"
        }
    } ,
    attributeId :{
        type : DataTypes.STRING(),
        references :{
            model :attributes ,
            key : "attributeId"
        }
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