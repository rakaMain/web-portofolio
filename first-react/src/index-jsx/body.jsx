import MiniCardMain from "../Card/minicard"

export default function MyMain(params) {
    return(
        <div className=" w-5/6 h-180 mx-auto mt-22  rounded-md relative flex flex-col overflow-hidden text-black ">
            <div className=" w-full h-11 flex items-center mb-4">
                 <MiniCardMain /> 
            </div>
            <p className=" text-[35px] mb-4">
                Hello, I am Freelance and Educator - network, devOps and Python
            </p>
            <div className="w-full h-70 rounded-full bg-neutral-50">

            </div>
        </div>
    )
}