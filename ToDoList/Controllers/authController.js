const signUp=(req ,res)=>{
res.send("sign Up the New User -- >")
}
const login =(req, res)=>{
     console.log(req.query)
  res.send("Login the User Already Existing --->")
}
const logout =(req,res)=>{
  res.send("logout the current User -->")
}

module.exports = { signUp , login , logout}