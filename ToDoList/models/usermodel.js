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

const getAll=async ()=>{
  try{
  const user = await model.users.findAll(
    {
    attributes : ["name" , "username" , "email"], // Show the Mention Attribute
    // attributes : {
    //   exclude : ["name" , "username" , "email"]
    // },
    paranoid : false
  }
  )
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
const Delete = async({username})=>{
  try{
    const Delete = await model.users.destroy({where : {username : username}})
    return{
      response :Delete
    }
  }catch(error){
      return{
        error : error 
      };
  }
}
module.exports = { create , getAll , Update , Delete};