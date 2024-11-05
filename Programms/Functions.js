// //  function declaration it can also called before the declaration 
// // Like MyInfo("Tasawar Abbas" , 24)
// function MyInfo(name , age){
//   console.log(name)
//   console.log(age)
// }
// MyInfo() // give undefined for both 
// MyInfo("Tasawar Abbas") // give name and age will be undefined
// MyInfo("Tasawar Abbas" , 24)  // show both 
// ---------------------- function Expression  cannot  be call before calling --------------------
 let info = function( name , age){
    console.log(name)
    console.log(age)
 }
 info() // give undefined for both 
 info("Tasawar Abbas") // give name and age will be undefined
 info("Tasawar Abbas" , 24)  // show both 

//Default Parameter
// function Myname(name = "Tasawar"){
//  console.log(name)
// }
// Myname("Tasawar Abbas")
