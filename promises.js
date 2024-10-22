// const Promise1 = new Promise((res , rej)=>{
//     a = 9 ;
//     if(a%2==0)
//         res("Even Number");
//     rej("The Given Number is odd")
// })

// Promise1.then((result)=>{
// console.log(result)
// }).catch((error)=>{
// console.log(error)
// })

/*    Using async and await for asynchrounous programming
const Watch = new Promise((res)=>{
  setTimeout(()=>{
    res(new Date ())
  },1000)
})
const stopWatch = new Promise((res)=>{
  setTimeout(()=>{
    res(new Date ())
  },6000)
})

const Main = async()=>{
    await stopWatch.then((result)=>{
        console.log(result)
    })
    await Watch.then((result)=>{
        console.log(result)
    })
}
Main() */
