export default function MiniCard(value){
    return(
        <>
        <div className=" w-auto pe-14 rounded-md h-12 flex items-center overflow-hidden bg-white border-1 border-neutral-200">
            <div className=" h-full w-15 me-3 bg-gray-50">
                <i className={value.icon}></i>
            </div>
            <div className=" overflow-hidden flex ">
                <p className="">{value.name}</p>
            </div>
        </div>
        </>
    )
}