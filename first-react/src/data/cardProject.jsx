export default function MyProjject(props) {
    return (
        <>
            <div className=" relative flex w-75 overflow-hidden h-[74px] border border-neutral-200 rounded-2xl mb-4">
                <div className="flex-1/3 border-e border-neutral-200"></div>
                <div className=" flex-1/1 flex flex-col pt-1 ps-1">
                    <p className=" text-[15px]">Jaringan Sederhana</p>
                    <p className=" text-[11px] font-thin">membuat jaringan sederhana</p>
                    <div>
                        <span className="text-[10px] text-neutral-400">🥉 beginner level </span>
                        <span className="text-[10px] text-neutral-400">👉 see more</span>
                    </div>
                </div>
            </div>
        </>
    )
}