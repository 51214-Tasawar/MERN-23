const { response } = require("express");
const {model} = require("./index") ;

const create=(body)=>{
  try{
  const user = model.users.create(
    {
        ...body 
    }
  )
  return {
    response : myresponse 
  }
  }catch(error){
   return {
    error : error 
   }
  }
}

module.exports = create;