export default function MediumCard(value){
    return(
        <>
        <div className="mt-4 w-80 h-[349px] rounded-2xl flex flex-col items-center justify-center overflow-hidden bg-white border-1 border-neutral-200 relative">
            <div className=" h-2/3 w-full border-b-1 border-neutral-200 flex relative justify-center items-center flex-col overflow-hidden">
                {/* <img src="src/assets/gambaryt/unpad.jfif" alt="" srcset="" className="w-full" /> */}
            </div>
            <div className=" overflow-hidden flex-1/1  items-start w-full p-4 relative flex flex-col  ">
                <div className="flex items-center w-full">
                    <p className=" text-[16px]">IT Support</p> 
                    <p className=" ms-2 text-[10px] font-thin bg-neutral-100 p-1 px-2 rounded-2xl">magang</p>
                </div>
                <p className="text-[10px] font-thin mt-1">universitas padjadjaran</p>
                <p className="mt-3 font-normal text-[14px]">seorang pengangguran yang banyak gaya dan menyibukan diri dengah hal yang baik</p>
                <span className="text-[13px] text-neutral-400 mt-4">👉 see more about me</span>
            </div>
            
        </div>
        </>
    )
}