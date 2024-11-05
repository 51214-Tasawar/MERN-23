const joi = require("joi") ;

const createuservalidator = joi.object({
    name:joi.string().min(5).max(35).required() ,
    username:joi.string().alphanum().required(),
    password:joi.string().min(8).max(25).required()
})
module.exports = {
    createvalidator : async(req ,res , next)=>{
        try{
    await createuservalidator.validateAsync(req.body)
    next();
        } catch (error) {
     return res.send({
        error : error.message ,
     })
        }
    }
}