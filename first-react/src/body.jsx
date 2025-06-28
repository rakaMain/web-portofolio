export default function MyMain(params) {
    return(
        <div className="mt-6  container flex flex-col justify-center items-center h-auto ">
            <div className="h-50 bg-gray-100 w-70 justify-center flex items-center rounded-3xl">myhead</div>
            <div className="h-20 bg-gray-100 mt-3 w-70 rounded-2xl flex justify-center items-center">content</div>
            <div className="h-auto mt-4 w-70 justify-center flex items-center rounded-xl gap-2 flex-wrap ">
                <div className="bg-gray-100 h-25 w-33 rounded-xl">cnt</div>
                <div className="bg-gray-300 h-25 w-33 rounded-xl">cnt</div>
                <div className="bg-gray-300 h-25 w-33 rounded-xl">cnt</div>
                <div className="bg-gray-100 h-25 w-33 rounded-xl">cnt</div>
            </div>
            <div className="h-20 bg-gray-100 mt-3 w-70 rounded-2xl flex justify-center items-center">content</div>
            <div className="h-50 bg-gray-100 w-70 mt-3 justify-center flex items-center rounded-3xl mb-3">myhead</div>
        </div>
    )
}