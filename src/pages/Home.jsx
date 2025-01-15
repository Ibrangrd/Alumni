import { useContext } from "react"
import Home1 from "./Home1"
import Home2 from "./Home2"
import Home3 from "./Home3"
import Home4 from "./Home4"
import { ThemeContext } from "../App"
import HomeFAQ from "./HomeFAQ"

const Home = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className={`${theme === "dark"? "bg-black" : "bg-white" }`}>
      <Home1/>
      <Home2/>
      <Home3/>
      <Home4/>
      <HomeFAQ count= {4}/>
    </div>
  )
}

export default Home