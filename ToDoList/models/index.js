const sequelize = require("../dbConnection");
const users = require("./definations/users");


const Vendors = require("./definations/vendors")
const products = require("./definations/products")
const productsverations = require("./definations/productverations")

// Create 1:M Relation while Vendors is Parent

Vendors.hasMany(products ,  { foreignKey : "vendorId"})
products.belongsTo(Vendors ,  { foreignKey: "vendorId"})

// // product and productveriation 1: M Relation

products.hasMany(productsverations , {foreignKey : "productId" , as : "productsveration" } );
productsverations.belongsTo(products , {foreignKey: "productId" ,  as :"product"})

// Creating M:M Relation in this method 

// Vendors.belongsToMany(products , {through : "vendorsHasProducts"})
// products.belongsToMany(Vendors , {through : "vendorsHasProducts"})

// Creating Veriation and attribute relation M:M using veriationsHasattributes
// productsverations.hasMany(variationHasAttributes , {foreignKey: "productsverationId"})
// variationHasAttributes.belongsTo(productsverations , {foreignKey : "productsverationId"})
// attributes.hasMany(variationHasAttributes , {foreignKey :"attributeId "})
// variationHasAttributes.belongsTo(attributes , {foreignKey : "attributeId "})

const model = {users};

const db = {} ;



db.sequelize = sequelize;
sequelize.model = model;

module.exports = {db , model}