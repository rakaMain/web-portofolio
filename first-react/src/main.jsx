import ReactDom from "react-dom/client"
import MyHead from './header';


// komponen index.html
import MyMainSec from './index-jsx/body'


import './index.css'
import "remixicon/fonts/remixicon.css";


 
function Mycoder(){
  return(
    <div className=" flex-col justify-center gap-1.5 bg-white relative">
      <MyHead />
      <MyMainSec />
     
    </div>
    
  )
}
const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
  Mycoder()
) 

console(root)