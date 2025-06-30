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
            <div className="h-20 p-3 bg-gray-100 mt-3 w-4/5 rounded-2xl flex justify-center items-start flex-col">
                <p className=" font-semibold">Section</p>
                <p className=" text-[8px] opacity-75">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis magni eveniet blanditiis sit voluptas ab sed eum, necessitatibus laudantium soluta?
                </p>
            </div>
            <div className="h-auto mt-3 w-4/5 justify-between flex items-center rounded-xl flex-wrap bg-amber-50 overflow-hidden">
                <div className="bg-gray-100 h-25 w-1/2 flex justify-center items-center">cnt</div>
                <div className="bg-gray-200 h-25 w-1/2 flex justify-center items-center">cnt</div>
                <div className="bg-gray-200 h-25 w-1/2 flex justify-center items-center">cnt</div>
                <div className="bg-gray-100 h-25 w-1/2 flex justify-center items-center">cnt</div>
            </div>
            <div className="h-20 bg-gray-100 mt-3 w-4/5 text-start flex-col p-3 rounded-2xl flex justify-center items-start">
                <p className=" font-semibold">Section</p>
                <p className=" text-[8px] opacity-75">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis magni eveniet blanditiis sit voluptas ab sed eum, necessitatibus laudantium soluta?</p>
            </div>
            <div className="h-50 bg-gray-100 w-4/5 mt-3 justify-center flex items-center rounded-3xl mb-3">myFoot</div>
            <div className="h-20 bg-gray-100 w-4/5 rounded-2xl flex justify-center items-center">content</div>
        </div>
    )
}