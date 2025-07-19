export default function SkillCard(value){
    return(
        <>
        <div className=" relative w-auto h-28 mb-10 rounded-2xl flex flex-col items-center justify-center bg-white border-1 border-neutral-200">
            <div className=" absolute bg-white border-1 border-neutral-200 p-3 rounded-2xl top-[-20px]">
                <p >{value.nama}</p>
            </div>
        </div>
        </>
    )
}