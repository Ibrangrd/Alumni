import React from "react";
import Home2List from "./Home2List";
import { Home2Data } from "../utils";
import Aos from "aos";
import "aos/dist/aos.css";
const Home2 =()=>{
return (
<>
<div className="pt-16 flex flex-wrap justify-center gap-16"  >
 
{ Home2Data.map((value)=>{

 return( 
<Home2List
 key={value.id}
 img={value.img}
 fun={value.fun}
 lin={value.lin}
 />
 );
}
)}
</div>
</>
);
}
export default Home2;