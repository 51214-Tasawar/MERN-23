// Constent Variables 
const a = 10 ;
console.log(a)  // a =10

{
    const a = 20   // cannot  reassign if Type not mention
    console.log(a)   // a = 20 
}
console.log(a) // a = 10 
   
{
    console.log("Testing ")
}
// Let Variables 
{
    let a = 10
    console.log(a)   // a =10
    {
         a = 20  // can reassign without Type mention 
         console.log(a)  // a=20
    }
    console.log(a)   // a=20 
}

{
    // var is globally Scope  
    b = 40
    console.log(b)
    c=  3 - 4 + 2
   console.log(c)
     
}
