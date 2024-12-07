import { Link } from "react-router-dom";

const Homepage=()=>{
   return (
    <>
    <h1>This Is My Testing Demo</h1>
    <Link to={"/contactUs"}>Contact Us</Link>
    <Link to={"/services"}>Services</Link>
    <Link to={"/AboutUs"}>About Us</Link>
    </>
   )
}
export default Homepage ;