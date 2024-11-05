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
   }catch{

   }
    } ,
    getUsers:(req,res)=>{
    res.send("Get All Users SuccessFully")
    },
    updateUser:(req , res)=>{
        res.send("Update User SuccessFully")
    },
    deleteUser:(req ,res)=>{
    res.send("Delete the User Success Fully")
    }

}