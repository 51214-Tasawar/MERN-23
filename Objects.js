const obj ={
    name : "Person1" ,
    age : 28 ,
    address : {
        city :"Lahore" ,
        province: "Punjab" ,
        Country : "Pakistan"
    }
}
obj.desnation ="Admin";
function Info({name , desnation ,address:{province}}){
    console.log(`My name is ${name} and My Authority in this Organization is ${desnation} . I am living in ${province}`)
}
Info(obj)