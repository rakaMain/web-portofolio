import { createRoot } from "react-dom/client"
import MyHead from './header';

// komponen index.html
import MyMainSec from './index-jsx/body'


import './index.css'
import "remixicon/fonts/remixicon.css";


 
function Mycode(){
  return(
    <div className=" flex-col justify-center gap-1.5 bg-white ">
      <MyHead />
      <MyMainSec />
    </div>
    
  )
}
const root = createRoot(document.getElementById("root"))
root.render(
  Mycode()
) 