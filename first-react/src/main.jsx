import ReactDom from "react-dom/client"
import MyHead from './header';
import MyCta from "./ccta";


// komponen index.html
import MyMainSec from './index-jsx/body'
import YoutubeVid from "./index-jsx/youtube";


import './index.css'
import "remixicon/fonts/remixicon.css";


 
function Mycoder(){
  return(
    <div className=" flex-col  w-full justify-center gap-1.5 bg-white relative">
      <MyHead />
      <MyMainSec />
      <MyCta />
    </div>
    
  )
}
const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
  Mycoder()
) 

console(root)