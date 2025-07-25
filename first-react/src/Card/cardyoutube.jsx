export default function YoutubeCard(value){
    return(
        <>
        <div className=" w-70 h-55 rounded-2xl flex flex-col items-center justify-center overflow-hidden bg-white border-1 border-neutral-200">
            <div className=" flex-1/1  overflow-hidden w-full border-b-1 bg-black border-neutral-200 flex justify-center items-center">
                <img src={value.gambar} alt="" srcset="" className="h-auto w-full"/>
            </div>
            <div className="relative flex-1/3 flex-wrap items-center w-full justify-start
              flex gap-x-3 p-3  o ">
                <p className=" text-wrap  ">{value.name}</p>
            </div>
        </div>
        </>
    )
}