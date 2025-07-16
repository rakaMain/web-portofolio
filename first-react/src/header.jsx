import MiniCard from "./Card/minicard"
import React from "react"


export default function MyHead(){
  const [shown, setShown] = React.useState("")
 
  
  function shownIf (){
    setShown(n => !n)
  
  }

  return(

    <>
    <header className=' top-[-7px]  z-50 fixed text-black border-1 border-neutral-100
      w-full h-18 flex items-center justify-end px-6 gap-3  bg-[#FCFFF2]'>
      <i className=" ri-home-6-fill scale-200 me-auto "></i>      
      <div className="w-30 bg-[#E6FF28] me-2  rounded-md gap-x-2 h-10 flex justify-center items-center">
        <p className=" ">Lets Talk</p>
        <div className=" bg-neutral-50 h-7 w-7 rounded-md"></div>
      </div>
      { !shown && <i className="ri-menu-line  scale-200 " onClick={shownIf}></i>}
      { shown && <i className="ri-close-line  scale-200 " onClick={shownIf}></i>}
    </header>

    {shown && <div className=" transition-opacity  top-[-7px]  z-40 fixed text-black border-1 border-neutral-100
      w-full h-full flex flex-col pt-20 px-6 opacity-97 gap-3  bg-white ">
      
        <div className="mb-4 border-b-2 border-gray-200 h-16 mt-8 flex items-center ">
          <p className=" text-xl ">Learn with me</p>
        </div>

        <div className=" h-100 flex flex-col justify-start mt-4 gap-y-10 ">
          <div className=" border-b-2  border-gray-200">
            <ul className="text-xl">Home</ul>
          </div>
          <div className=" border-b-2 border-gray-200">
            <ul className="text-xl">About</ul>
          </div>
          <div className=" border-b-2 border-gray-200">
            <ul className="text-xl">Service</ul>
          </div>
          <div className=" border-b-2 border-gray-200">
            <ul className="text-xl">Work</ul>
          </div>

          <div>
          </div>

        </div>

        <div className=" w-full h-40 flex flex-wrap gap-2  p-2 rounded-xl">
            <MiniCard 
              name = "Instagram"
              icon = "ri-instagram-fill scale-200 m-auto"
            />
            <MiniCard 
              name = "Linkedin"
              icon = "ri-linkedin-fill scale-200 m-auto"
            />
            <MiniCard 
              name = "Youtube"
              icon = "ri-youtube-fill scale-200 m-auto"
            />
        </div>
    </div>}
    </>    
    )   
}
