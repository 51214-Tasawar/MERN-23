 const Obj1= {
    name :"Person1",
    age : 24,
    address:{
        city:'Lahore',
        provinace:'Punjab',
        country :'Pakistan'
    }
 }
// const{name , age , address:{city}} = Obj1 ; // De-Structring of an Object and object within object
// console.log(city)
Obj1.desination = "Admin"; // Assigning New Values to Object
function Info({name , desination , address:{city}}){  // De-Structring of an Object using functin
    console.log(`My name is ${name} .
    My authority is ${desination} .
    I Live in ${city}`)
}
Info(Obj1)

Obj1["Salary_1"] = 70000;  // Assigning New Values to Object
console.log(Obj1.Salary_1)
const {name , ...age} = Obj1; // Using Rest Operators
console.log( name ,age)