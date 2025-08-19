export default function MediumCard(value){
    return(
        <>
        <div className=" w-80 h-120 rounded-2xl flex flex-col items-center justify-center overflow-hidden bg-white border-1 border-neutral-200 relative">
            <div className=" h-2/3 w-full border-b-1 border-neutral-200 flex relative justify-center items-center flex-col overflow-hidden">
                <img src="src/assets/gambaryt/unpad.jfif" alt="" srcset="" className="w-full" />
            </div>
            <div className=" overflow-hidden flex-1/1  items-start w-full p-4 relative flex flex-col  ">
                <div className="flex  items-center w-full">
                    <p className=" text-xl pb-2 font-semibold">IT Support,</p> <p className=" ms-2 ">PKL</p>
                </div>
                <p className=" text-sm text-gray-700 mb-2">Universita Padjadjaran</p>
                <p className="text-[13px] text-neutral-400 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, aperiam. Veniam neque fuga dolor sunt? Est corporis enim quaerat ad!</p>
                <div className="mt-4 flex gap-x-2">
                    <div className="h-6 text-[12px] px-2 bg-neutral-200 rounded-md">network</div>
                    <div className="h-6 text-[12px] px-2 bg-neutral-200 rounded-md">server</div>
                    <div className="h-6 text-[12px] px-2 bg-neutral-200 rounded-md">instalation network</div>
                </div>
                <button className="w-auto ms-auto text-sm p-2 text-gray-500 justify-center  flex mt-9 h-auto items-center rounded-md mb-4 ">click to see more</button>
            </div>
            
        </div>
        </>
    )
}