const sequelize = require("../dbConnection");
const users = require("./definations/users");




// Create 1:M Relation while Vendors is Parent
// vendors.hasMany(products , {foreignKey : "vendorId"})
// products.belongsTo(vendors , {foreignKey : "vendorId"})
// // product and productveriation 1: M Relation
// products.hasMany(productsverations , {foreignKey : "productId" , as : "productsveration" } );
// productsverations.belongsTo(products , {foreignKey: "productId" ,  as :"product"})

// Creating M:M Relation in this method 
// vendors.belongsToMany(products , {through : "vendorsHasProducts"})
// products.belongsToMany(vendors , {through : "vendorsHasProducts"})

// Creating Veriation and attribute relation M:M using veriationsHasattributes

// productsverations.hasMany(variationHasAttributes , {foreignKey: "productsverationId"})
// variationHasAttributes.belongsTo(productsverations , {foreignKey : "productsverationId"})

// attributes.hasMany(variationHasAttributes , {foreignKey :"attributeId "})
// variationHasAttributes.belongsTo(attributes , {foreignKey : "attributeId "})

const model = {users 
} ;

const db = {} ;



db.sequelize = sequelize;
sequelize.model = model;

module.exports = {db , model}