export default function MiniCard(value){
    return(
        <>
        <div className=" w-auto pe-5 rounded-md h-12 flex items-center overflow-hidden bg-white border-1 border-neutral-200">
            <div className=" h-full w-13 me-3 bg-gray-50 flex justify-center items-center">
                <i className={value.icon} ></i>
            </div>
            <div className=" overflow-hidden flex ">
                <p className="">{value.name}</p>
            </div>
        </div>
        </>
    )
}