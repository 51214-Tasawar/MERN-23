const sequelize = require("../dbConnection");
const users = require("./definations/users");
const products = require("./definations/products")
const vendors = require("./definations/vendors")
const productsverations = require("./definations/productverations")

const model = {users ,products  , vendors 
    ,productsverations
} ;

// Create 1:M Relation while Vendors is Parent
vendors.hasMany(products , {foreignKey : "vendorId"})
products.belongsTo(vendors , {foreignKey : "vendorId"})
// product and productveriation 1: M Relation
products.hasMany(productsverations , {foreignKey : "productId"});
productsverations.belongsTo(products , {foreignKey: "productId"})

// Creating M:M Relation in this method 
// vendors.belongsToMany(products , {through : "vendorsHasProducts"})
// products.belongsToMany(vendors , {through : "vendorsHasProducts"})

const db = {} ;

db.sequelize = sequelize;
sequelize.model = model;

module.exports = {db , model}