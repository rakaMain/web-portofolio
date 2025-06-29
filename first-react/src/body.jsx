export default function MyMain(params) {
    return(
        <div className="mt-6  container flex flex-col mx-auto justify-center items-center h-auto ">
            <div className="h-50 bg-gray-100 w-4/5 sm:w-70 justify-center flex items-center rounded-3xl">myhead</div>
            <div className="h-20 bg-gray-100 mt-3 w-4/5 rounded-2xl flex justify-center items-center">content</div>
            <div className="h-auto mt-3 w-4/5 justify-between flex items-center rounded-xl flex-wrap bg-amber-50 overflow-hidden">
                <div className="bg-gray-100 h-25 w-1/2 flex justify-center items-center">cnt</div>
                <div className="bg-gray-200 h-25 w-1/2 flex justify-center items-center">cnt</div>
                <div className="bg-gray-200 h-25 w-1/2 flex justify-center items-center">cnt</div>
                <div className="bg-gray-100 h-25 w-1/2 flex justify-center items-center">cnt</div>
            </div>
            <div className="h-20 bg-gray-100 mt-3 w-4/5 rounded-2xl flex justify-center items-center">content</div>
            <div className="h-50 bg-gray-100 w-4/5 mt-3 justify-center flex items-center rounded-3xl mb-3">myFoot</div>
            <div className="h-20 bg-gray-100 w-4/5 rounded-2xl flex justify-center items-center">content</div>
        </div>
    )
}