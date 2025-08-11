import ReactDom from "react-dom/client"
import Home from "./pages/home";

import './index.css'
import "remixicon/fonts/remixicon.css";




 
function Mycoder(){
  return(
    <Home />  
  )
}
const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
  Mycoder()
) 

console(root)