import MiniCard from "../data/minicard"

export default function MyCta(value){
    return(
        <>
        <div className=" relative w-full justify-start pt-25 flex-col items-center flex bg-[#FCFFF2] h-168 ">
            <p className=" text-2xl">Intresinting with me ?</p>
            <p className="text-6xl underline text-center w-80 mt-10 hover:text-[#E6FF28] hover:scale-110 font-semibold">Lets talk, Tap Here</p>
            <p className=" mt-8 text-neutral-600">and, lets make happen</p>
            <div className=" w-full h-14 justify-center-safe flex-wrap flex flex-cols px-8 pt-10 mt-7">
                <MiniCard name="instagram" icon="ri-instagram-fill scale-200 m-auto" scale="scale-85" />
                <MiniCard name="youtube" icon="ri-youtube-fill scale-200 m-auto"   scale="scale-85"/>
                <MiniCard name="Linkedin" icon="ri-linkedin-fill scale-200 m-auto" scale="scale-85"/>
                <MiniCard name="Fiverr"  icon="ri-fiverr-fill scale-200 m-auto"  scale="scale-85"/>
            </div>
        </div>
        </>
    )
}