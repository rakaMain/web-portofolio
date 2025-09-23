export default function YoutubeCard(value){
    return(
        <>
        <div className=" w-70 h-55 rounded-3xl border border-neutral-300  flex flex-col items-center justify-center overflow-hidden bg-white">
            <div className=" flex-1/1  border-neutral-200    overflow-hidden w-full  bg-black flex justify-center items-center">
                <img src={value.gambar} alt="" srcset="" className="h-full w-full"/>
            </div>
            <div className="relative flex-1/3 flex-wrap items-start w-full justify-start
              flex gap-x-3 p-3 flex-col">
                <p className=" text-wrap text-[16px] mb-1">{value.name}</p>
                <div className="text-[11px] text-neutral-400 flex gap-x-3">
                    <span>{value.views}</span> <span>{value.kategori}</span>
                </div>
            </div>
        </div>
        </>
    )
}