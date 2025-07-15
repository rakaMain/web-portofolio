import { createRoot } from "react-dom/client"
import MyHead from './header';
import Navigation from "./navgation";

// komponen index.html
import MyMainSec from './index-jsx/body'


import './index.css'
import "remixicon/fonts/remixicon.css";


 
function Mycode(){
  return(
    <div className=" flex-col justify-center gap-1.5 bg-white relative">
      <MyHead />
      <MyMainSec />
      <Navigation />
    </div>
    
  )
}
const root = createRoot(document.getElementById("root"))
root.render(
  Mycode()
) 