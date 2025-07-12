import { createRoot } from "react-dom/client"
import MyHead from './header';

// komponen index.html
import MyMainSec from './index-jsx/body'
import CardPengalaman from './index-jsx/pengalaman'
import CardSkills from './index-jsx/skills'
import MyProject from './index-jsx/Project'


import './index.css'
import "remixicon/fonts/remixicon.css";


 
function Mycode(){
  return(
    <div className=" flex-col justify-center gap-1.5 bg-white ">
      <MyHead />
      <MyMainSec />
      <div className="w-4/5 mx-auto mt-6" id="Pengalaman">
        <p className="ms-2 text-xl ">Pengalaman</p>
        <CardPengalaman
          judul="IT Support"
          desk='magag di universitas padjadjaran'
          img='./src/assets/gambar/unpad.svg'        
        />

      </div>
      <div className="w-4/5 mx-auto mt-6" id="skills">
        <p className="ms-2 text-xl ">skills</p>
        <CardSkills 
          judul="Network"
          desk='configure and instalastion'
          img='./src/assets/gambar/network.svg'   
        />
        <CardSkills
          judul="Programer"
          desk='configure and instalastion'
          img='./src/assets/gambar/python.svg'   
        />
        <CardSkills 
          judul="ML Dev"
          desk='configure and instalastion'
          img='./src/assets/gambar/machine.svg'   
        />
        <CardSkills
          judul="Ops"
          desk='configure and instalastion'
          img='./src/assets/gambar/linux.svg'   
        />
      </div>
      <div className="w-4/5 mx-auto mt-6" id="skills">
        <p className="ms-2 text-xl ">Project</p>
        <MyProject />
      </div>
      <div className="w-4/5 mx-auto mt-6" id="Pengalaman">
        <p className="ms-2 text-xl ">Pendidikan</p>
        <CardPengalaman
          judul="SMKN 1 CIJULANG"
          desk='Teknik Jaringan Komputer dan Telekomunikasi'
          img='./src/assets/gambar/smk.svg'        
        />
      </div>
    </div>

    
  )
}
const root = createRoot(document.getElementById("root"))
root.render(
  Mycode()
) 