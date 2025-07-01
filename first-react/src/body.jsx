export default function MyMain(params) {
    return(
        <div className="mt-6  container flex flex-col mx-auto justify-center items-center h-auto ">
            <div className="h-50 w-4/5 sm:w-70 overflow-hidden justify-center flex flex-col items-center rounded-3xl">
                <div className=" relative flex-1/2 bg-gray-50 w-100 flex">
                    <div className="h-25 w-25 bg-gray-200 m-auto rounded-full"></div>
                </div>
                <div className=" bg-gray-100 relative flex-1/5 flex flex-col p-3">
                    <p className=" font-semibold mx-auto">Raka</p>
                    <p className=" text-[8px] text-center opacity-75" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis magni eveniet blanditiis sit voluptas ab sed eum
                    </p>
                </div>
            </div>
            <div className="h-20 bg-gray-100 mt-3 w-4/5 rounded-2xl flex justify-center items-start overflow-hidden">
            <div className=" flex-1/3 bg-gray-200 h-full"></div>
            <div className=" flex-1/1 flex flex-col justify-center p-3">
                <p className=" font-semibold">IT Support</p>
                <p className=" text-[8px] opacity-75">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </div>
            </div>
            <div className="h-auto mt-3 w-4/5 justify-between flex items-center rounded-xl flex-wrap bg-amber-50 overflow-hidden z-10">
                <div className="bg-gray-100 h-25 w-1/2 flex justify-center items-center">Linux</div>
                <div className="bg-gray-200 h-25 w-1/2 flex justify-center items-center">Network</div>
                <div className="bg-gray-200 h-25 w-1/2 flex justify-center items-center">Computer</div>
                <div className="bg-gray-100 h-25 w-1/2 flex justify-center items-center">Ops</div>
            </div>
            <div className="h-20 bg-gray-100 mt-3 w-4/5 text-start flex-col p-3 rounded-2xl flex justify-center items-start">
                <p className=" font-semibold">Pendidikan</p>
                <p className=" text-[8px] opacity-75">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis magni eveniet blanditiis sit voluptas ab sed eum, necessitatibus laudantium soluta?</p>
            </div>
            <div className="h-50 bg-gray-100 w-4/5 mt-3 justify-center flex items-center rounded-3xl mb-3">Project</div>
            <div className="h-20 bg-gray-100 w-4/5 rounded-2xl flex justify-center items-center overflow-hidden">
                <div className=" flex-1/3 bg-gray-200 h-full"></div>
                <div className=" flex-1/1 flex flex-col justify-center p-3">
                    <p className=" font-semibold">BNSP</p>
                    <p className=" text-[8px] opacity-75">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>
    )
}