export default function MediumCard(value){
    return(
        <>
        <div className=" w-auto h-120 rounded-2xl flex flex-col items-center justify-center overflow-hidden bg-white border-1 border-neutral-200 relative">
            <div className=" h-2/3 w-full border-b-1 border-neutral-200 flex relative justify-center items-center flex-col overflow-hidden">
                <img src="src/assets/gambaryt/unpad.jfif" alt="" srcset="" className="w-full" />
            </div>
            <div className=" overflow-hidden flex-1/1  items-start w-full p-4 relative flex flex-col  ">
                <div className="flex  items-center w-full">
                    <p className=" text-xl pb-2 font-semibold">IT Support,</p> <p className=" ms-3 ">magang</p><p className="ms-auto text-sm text-gray-700">2025</p>
                </div>
                <p className=" text-sm text-gray-700 mb-2">Universita Padjadjaran</p>
                <p className="text-[14px] text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, aperiam. Veniam neque fuga dolor sunt? Est corporis enim quaerat ad!</p>
                <button className="w-25 text-black justify-center bg-[#E6FF28]  flex mt-auto h-12 items-center rounded-md border-1 border-neutral-200 mb-4 ">see more</button>
            </div>
            
        </div>
        </>
    )
}