import MiniCardMain from "../Card/minicard"
import MediumCard from "../Card/mediumcard"
import SkillCard from "../Card/cardskill"
import YoutubeCard from "../Card/cardyoutube"

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
            <div className="w-full h-45 mt-5 rounded-2xl bg-white border-1 border-neutral-200">
            </div>

            <div className="w-full h-auto mt-5 pt-5 rounded-2xl ">
  
            <div className="h-80 w-full rounded-2xl bg-white border-1 border-neutral-200"></div>
            </div>

            <div className="w-full h-auto mt-5  rounded-2xl pt-5">
             <p className=" text-[25px] text-center mb-4 ">
                Experience 
            </p>
            <MediumCard />
            </div>

            <div className="w-full h-auto mt-6 rounded-2xl pt-5">
            <SkillCard nama="IT Support" />
            <SkillCard nama="Webdev"/>
            <SkillCard nama="data sceintis" />
            </div>

            <div className="w-full h-auto mt-2 mb-10 rounded-2xl pt-5">
             <p className=" text-[25px] text-center mb-8 ">
                Not ready for my course? start learning for free
            </p>
            <div id="youtube-card" className="flex gap-x-4 overflow-x-auto whitespace-nowrap scroll-smooth p-2 md:overflow-x-visible">
                <YoutubeCard />
                <YoutubeCard />
                <YoutubeCard />
            </div>
            </div>
        

        </div>
    )
}