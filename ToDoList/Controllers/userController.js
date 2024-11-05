const {hash} = require("bcryptjs");


module.exports={
    createUser:async(req,res)=>{
        req.body.password = await hash(req.body.password , 10)
   try{
     return res.send({
        status : "Ok" ,
        code : 200 ,
        response : req.body 
     })
   }catch(error){
  return res.send({
    status : "Ok" ,
    code : 200 ,
    error : error.message
  })
   }
    } ,
    getUsers:(req,res)=>{
   try{
     return res.send({
        status: "Ok" ,
        code : 200 ,
        response: req.query 
     })
   }catch(error){
   return res.send({
    status : " Not Ok " ,
    code : 400 ,
    error : error.message
   })
   }
    },
    updateUser:(req , res)=>{
       try{
        return res.send({
            status:"Ok",
            code : 200 ,
            response : req.body
        })
       }catch(error){
     return res.send({
        status : "Not Ok" ,
        code : 400 ,
        error : error.message
     })
       }
    },
    deleteUser:(req ,res)=>{
    try{
       return  res.send({
        status: "Ok" ,
        code : 200 ,
        response :req.query
       })
    }catch(error){
   return res.send({
    status: "Not Ok",
    code : 400 ,
    error : error.message
   })
    }
    }

}