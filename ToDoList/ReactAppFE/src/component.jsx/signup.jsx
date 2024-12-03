const Signup=({setAuth})=>{
    return(
        <>
        <h1>This Is Signup Page</h1>
        <button onClick={()=>setAuth("login")}>Click To login</button>
        </>
    )
}
export default Signup