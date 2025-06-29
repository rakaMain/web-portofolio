import { createRoot } from "react-dom/client"
import MyHead from './header';
import React from 'react'
import MyBody from './body'
import MyFoot from './Footer'
// import MyCard from './div';
// import DataAnime from './api_kecil'

import './index.css'
import "remixicon/fonts/remixicon.css";


 
function Mycode(){
  return(
    <div className=" flex-col justify-center gap-1.5">
      <MyHead />
      <MyBody />
      <MyFoot />
    </div>
  )
}
const root = createRoot(document.getElementById("root"))
root.render(
  Mycode()
) 