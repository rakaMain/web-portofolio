import { createRoot } from "react-dom/client"
import MyHead from './header';
import React from 'react'
import MyMainSec from './body'
import MyFoot from './Footer'
import CardPengalaman from './pengalaman'
import CardSkills from './skills'
import MyProject from './Project'
// import MyCard from './div';
// import DataAnime from './api_kecil'

import './index.css'
import "remixicon/fonts/remixicon.css";


 
function Mycode(){
  return(
    <div className=" flex-col justify-center gap-1.5 ">
      <MyHead />
      <MyMainSec />
      <div className="w-3/4 mx-auto mt-6" id="Pengalaman">
        <p className="ms-2 text-xl ">Pengalaman</p>
        <CardPengalaman
          judul="IT Support"
          desk='magag di universitas padjadjaran'
          img='./src/assets/gambar/unpad.png'        
        />

      </div>
      <div className="w-3/4 mx-auto mt-6" id="skills">
        <p className="ms-2 text-xl ">skills</p>
        <CardSkills 
          judul="Network"
          desk='configure and instalastion'
          img='./src/assets/gambar/network.png'   
        />
        <CardSkills
          judul="Programer"
          desk='configure and instalastion'
          img='./src/assets/gambar/python.png'   
        />
        <CardSkills 
          judul="ML Dev"
          desk='configure and instalastion'
          img='./src/assets/gambar/machine learinng.png'   
        />
        <CardSkills
          judul="Ops"
          desk='configure and instalastion'
          img='./src/assets/gambar/Linux.png'   
        />
      </div>
      <div className="w-3/4 mx-auto mt-6" id="skills">
        <p className="ms-2 text-xl ">Project</p>
        <MyProject />
      </div>
    </div>

    
  )
}
const root = createRoot(document.getElementById("root"))
root.render(
  Mycode()
) 