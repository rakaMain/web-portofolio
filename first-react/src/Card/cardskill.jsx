

export default function SkillCard(value){
    return(
        <>
        <div className=" relative w-auto h-28 mb-10 rounded-2xl flex  items-center justify-center bg-white border-1 border-neutral-200">
            <div className=" absolute bg-white border-1 border-neutral-200 p-3 rounded-2xl top-[-20px]">
                <p >{value.nama}</p>
            </div>
            <div className="w-full flex flex-wrap  justify-center pt-3 gap-x-4">
            {value.icon.map((item) => (
                <div className="h-12 w-12 rounded-md">
                    <img src={item} alt="" />
                </div>
          ))}
 
            </div>
        </div>
        </>
    )
}