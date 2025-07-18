import MiniCardMain from "../Card/minicard"
import MediumCard from "../Card/mediumcard"


export default function MyMain(params) {
    return(
        <div className=" w-5/6 h-uto mx-auto mt-22  rounded-md relative flex flex-col overflow-hidden text-black  ">
            <div className=" w-full h-11 flex items-center mb-4 mt-3">
                 <MiniCardMain 
                    name = "BNSP Certivied"
                 /> 
            </div>
            <p className=" text-[35px] mb-4 ">
                Hello, I am Freelance and Educator - <span className=" text-[#E6FF28]">network, devOps and Python</span>
            </p>
            <div className="w-full h-45 mt-5 rounded-2xl bg-neutral-50">
            </div>

            <div className="w-full h-auto mt-5 pt-5 rounded-2xl ">
             <p className=" text-[25px] mb-4 ">
                Who am i ?
            </p>
            <div className="h-80 w-full rounded-2xl bg-neutral-50"></div>
            </div>

            <div className="w-full h-100 mt-5 mb-8 rounded-2xl pt-5">
             <p className=" text-[25px] mb-4 ">
                Experience 
            </p>
            <MediumCard />
            </div>
        </div>
    )
}