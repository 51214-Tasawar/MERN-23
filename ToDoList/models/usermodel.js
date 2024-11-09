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
    error : error 
   }
  }
}

module.exports = create;