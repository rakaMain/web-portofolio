

export default function MyCardy(props){
  return(
    <>
      <div className=" hover:scale-105  relative w-[300px] bg-amber-100  overflow-hidden mt-4 shadow-md rounded-2xl h-42 flex gap-x-2 " id="card">
        <div className=" overflow-hidden flex-1/4 me-2 bg-amber-700 rounded-s-xl shadow-md ">
          <img src={props.img} alt="" srcset="" className=" relative m-auto mt-2 scale-115 "/>
        </div>
        <div className="relative flex-1/2  flex flex-col h-full  py-4 text-black">
            <p className=" font-semibold text-[8px]">{props.kanji} <span className=" text-gray-500  opacity-70 underline ms-2">see on MyAnimeList</span> </p>
            <p className=" font-extrabold text-xl mb-3">{props.nama}</p>
            <p className=" font-bold text-[10px]">{props.date}</p>
            <p className="text-[8px] text-justify me-5">{props.desk}</p>
            <p className=" font-semibold mt-1 text-[8px]">{props.mangaka} <span className=" text-gray-500  ms-2">{props.rating}</span> </p>
        </div>
      </div>
    </>
  )
}