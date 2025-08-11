export default function YoutubeCard(value){
    return(
        <>
        <div className=" w-70 h-55  flex flex-col items-center justify-center overflow-hidden bg-white">
            <div className=" flex-1/1 rounded-xl   overflow-hidden w-full  bg-black flex justify-center items-center">
                <img src={value.gambar} alt="" srcset="" className="h-auto w-full"/>
            </div>
            <div className="relative flex-1/3 flex-wrap items-center w-full justify-start
              flex gap-x-3 p-3  o ">
                <p className=" text-wrap text-[14px] ">{value.name}</p>
            </div>
        </div>
        </>
    )
}