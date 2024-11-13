const { response } = require("express");
const {model} = require("./index") ;
const { DELETE } = require("sequelize/lib/query-types");

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
  const user = await model.users.findAll()
  return {
    response : user 
  }
  }catch(error){
   return {
    error : error.errors[0].message 
   }
  }
}

const Update =async({username ,...body })=>{
  try{
  const update = await model.users.update(
    {
   ...body
    },
    {
  where : {
    username : username 
  }
  })
  return {
    response : user 
  }
  } catch(error){
  return{
    error : error 
  }
  }
}
const Delete =({username})=>{
  try{
    const Delete = model.users.destroy({where : {username : username}})
    return{
      response :Delete
    }
  }catch(error){
      error : error ;
  }
}
module.exports = { create , getAll , Update ,Delete};