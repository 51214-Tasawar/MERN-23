const joi = require("joi")

const CreateSchema = joi.object({
//  userId  :joi.string().min().max().required ,
name     : joi.string().min(8).max(50).required(),
username : joi.string().min(8).max(50).required(),
password : joi.string().min(8).max(1000).required()
})

const UpdateSchema = joi.object({
    name : joi.string().min(8).max(100),
    email : joi.string().min(10).max(50),
    username : joi.string().min(8).max(50).required(),
    password : joi.string().min(8).max(1000).required()
})

getDeleteSchema = joi.object({
    username : joi.string().min(8).max(50).required()
})

module.exports = {
 Create :async(req , res , next)=>{
   try{
 await CreateSchema.validateAsync(req.body)
 next();
   }catch(error){
    return res.send({
     status: "Not Ok",
     code : 400 ,   
     error : error.message
    })
     }
 },
 Get :async(req , res , next)=>{
    try{
        await getDeleteSchema.validateAsync(req.query)
        next();
    }catch(error){
        return res.send({
            status: "Not Ok",
            code : 400 ,
            error : error.message
           })
    }
 },
 Update :async(req , res , next)=>{
    try{
        await UpdateSchema.validateAsync(req.body)
        next();
    }catch(error){
        return res.send({
            status: "Not Ok",
            code : 400 ,
            error : error.message
           })
    }
 },
 Delete :async(req , res , next)=>{
    try{
        await getDeleteSchema.validateAsync(req.query)
        next();
    }catch(error){
        return res.send({
            status: "Not Ok",
            code : 400 ,
            error : error.message
           })
    }
 }
}