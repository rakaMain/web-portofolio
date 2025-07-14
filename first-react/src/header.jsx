export default function MyHead(){
  return(
    <header className=' top-[-7px]  z-50 fixed text-black border-1 border-neutral-100
   w-full h-18 flex items-center justify-end px-6 gap-3  bg-[#FCFFF2]'>
      <i className=" ri-home-6-fill scale-200 me-auto "></i>      
      <div className="w-30 bg-[#E6FF28] me-2  rounded-md gap-x-2 h-10 flex justify-center items-center">
        <p className=" ">Lets Talk</p>
        <div className=" bg-neutral-50 h-7 w-7 rounded-md"></div>
      </div>
      <i className="ri-menu-line  scale-200 "></i>
    </header>    
    )   
}
