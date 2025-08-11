export default function MyProjject(props) {
    return (
        <>
            <div className=" relative border-1 flex flex-col  overflow-hidden  border-neutral-200 rounded-2xl mb-4">
                    <div className=" absolute h-15 w-15 bg-neutral-200 rounded-2xl top-24 start-4"></div>
                   <div className=" h-35 bg-neutral-100"></div>
                   <div className=" p-2 pt-6 h-38">
                        <p className=" font-semibold">Membuat Jaringan sederhana</p>
                        <p className="text-[12px] text-neutral-400">membuat jaringan sederahan berisi dns, dhcp dan webserver</p>
                        <div className="mt-4 flex gap-x-1">
                            <div className="h-6 text-[12px] px-2 bg-neutral-200 rounded-md">nginx</div>
                            <div className="h-6 text-[12px] px-2 bg-neutral-200 rounded-md">dhcp server</div>
                            <div className="h-6 text-[12px] px-2 bg-neutral-200 rounded-md">bind9</div>
                        </div>
                   </div>    
                </div>
        </>
    )
}