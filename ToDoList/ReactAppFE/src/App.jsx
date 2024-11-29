import React, { useState } from "react";

const App=()=>{
  const [count , setcount ] = useState(0);
  return(
    <>
   <div className="flex justify-center items-center w-screen h-screen">
   <h3 >Items : {count}</h3>
   <button  className="bg-green-700 text-white border-4 "
   onClick={()=>setcount(count+1)}> Click For Addition</button>
   <button  className="bg-red-600 text-white border-4"
  onClick={()=>setcount(count - 1)}>Click For Substraction</button>
   </div>
    </>
  )
}
export default App