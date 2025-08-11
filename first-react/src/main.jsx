import ReactDom from "react-dom/client"
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import NotFound from "./pages/notfound";

import { BrowserRouter, Routes, Route } from "react-router"

import './index.css'
import "remixicon/fonts/remixicon.css";


function Mycoder(){
  return(
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about/" element={<About />}/>
        <Route path="/about/:name" element={<About />}/>
        <Route path="/service/:name" element={<Services />}/>
        <Route path="*" element={NotFound}/>
      </Routes>  
    </BrowserRouter>
  )
}
const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
  Mycoder()
) 

console(root)