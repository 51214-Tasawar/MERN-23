const Promise1 = new Promise((res , rej)=>{
    a = 9 ;
    if(a%2==0)
        res("Even Number");
    rej("The Given Number is odd")
})

Promise1.then((result)=>{
console.log(result)
}).catch((error)=>{
console.log(error)
})