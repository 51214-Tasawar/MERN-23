import { Link } from "react-router-dom"

const Products =()=>{
    return(
        <>
      <hi>Testing for Heading Tags</hi>
      <div className="flex flex-col">
     <Link to={"/Create-Product"}> Create</Link>
     <Link to={"/Get-Products"}>Get</Link>
      </div>
        </>
    )
}
export default Products