const {model} = require("./index") ;

const create=async (body)=>{
  try{
  const user = await model.users.create(
    {
      ...body 
    } )
  return {
    response : user 
  }
  }catch(error){
   return {
    error : error.errors[0].message 
   }
  }
}

const getAll=async (body)=>{
  try{
  const user = await model.users.findOne()
  return {
    response : user 
  }
  }catch(error){
   return {
    error : error.errors[0].message 
   }
  }
}

module.exports = { create , getAll };