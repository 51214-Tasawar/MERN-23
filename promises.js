// 
const promises1 = new Promise((res , rej)=>{
    const a = 15 ;
    if( a%2== 0){
    res("Even")
    }
    rej("odd")
})
promises1.then((res)=>{
console.log(res)
}).catch((rej)=>{
    console.log(rej)
})
const stopWatch = new Promise((res)=>{
setTimeout=()=>{
new Date ();
},4000
})

stopWatch.then(()=>{
console.log(res)
})