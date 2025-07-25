export default function MediumCard(value){
    return(
        <>
        <div className=" w-auto h-80 rounded-2xl flex flex-col items-center justify-center overflow-hidden bg-white border-1 border-neutral-200 relative">
            <div className=" h-1/1 w-full border-b-1 border-neutral-200 flex relative justify-center items-center flex-col">
                <div className="flex-1/1">
                   
                </div>
                <div className="h-12 px-2 mb-1 w-full flex items-center border-neutral-200">
                
                </div>
            </div>
            <div className=" overflow-hidden h-1/2  items-start w-full p-4 relative flex flex-col  ">
                <div className="flex  items-center w-full">
                    <p className=" text-xl pb-2">Judul,</p> <p className=" ms-3 ">magang</p><p className="ms-auto text-sm text-gray-400">2025</p>
                </div>
                <p className="text-sm ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, et!</p>
            </div>
        </div>
        </>
    )
}