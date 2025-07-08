export default function MyCardSKill(params) {

    return(
        <div className="flex w-full h-20 mx-auto mt-3 bg-[#f6f4ee] rounded-2xl  overflow-hidden">
            <div className=" flex-2/6 flex bg-neutral-200">
                <img src={params.img} alt="" className=" scale-100 m-auto -w-30 h-16"  srcset="" />
            </div>
            <div className=" flex-1/1 p-2 flex flex-col pt-3">
                <p id="judul" className=" font-semibold">{params.judul}</p>
                <p className=" text-[9px]">{params.desk}</p>
            </div>
        </div>
    )
}