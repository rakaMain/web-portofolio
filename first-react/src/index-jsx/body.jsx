import MiniCardMain from "../Card/minicard"
import MediumCard from "../Card/mediumcard"
import SkillCard from "../Card/cardskill"
import YoutubeCard from "../Card/cardyoutube"

import SubYt from "../data/datayoutube"

export default function MyMain(params) {
    return(
        <div className="w-5/6 mx-auto mt-22 sm:mt-30  rounded-md relative flex flex-col  text-black">
            <div className="w-full flex items-center mb-4 mt-3">
                <MiniCardMain
                    name="BNSP Certified"
                />
            </div>
            <p className="text-[35px] mb-4">
                Hello, I am Freelance and Educator - <span className="text-[#E6FF28]">network, devOps and Python</span>
            </p>

            <div className="w-full h-45 md:h-56 mt-5 rounded-2xl bg-white border border-neutral-200" />

            <div className="w-full h-90 flex flex-col gap-y-3 mt-5 pt-5 rounded-2xl border border-neutral-200">
                <div className=" w-full flex-1/2  bg-white border-b border-neutral-200">
                    
                </div>
                <div className=" w-full flex-1/3 rounded-2xl flex p-4 bg-white  border-neutral-200" >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, saepe?
                </div>
                
            </div>

            <div className="w-full h-auto mt-5 rounded-2xl pt-5">
                <p className="text-[25px] text-center mb-4">
                    Experience
                </p>
                <MediumCard />
            </div>

            {/* Skills Section reverted to original layout */}
            <div className="w-full h-auto mt-6 rounded-2xl pt-5 space-y-4">
                <SkillCard 
                nama="IT Support" 
                icon={[' src/assets/gambar/linux.png',
                        'src/assets/gambar/mikrotik.png',
                        'src/assets/gambar/mincrosof.png',
                        'src/assets/gambar/winbox.png']}
                />
                <SkillCard 
                nama="Programer" 
                icon={[' src/assets/gambar/tailwind.png',
                        'src/assets/gambar/python.png',
                        'src/assets/gambar/react.png',
                        'src/assets/gambar/nodejs.png',
                        'src/assets/gambar/mysql.png']}
                />
                <SkillCard 
                nama="Devops" 
                icon={[' src/assets/gambar/vmware.png',
                        'src/assets/gambar/ansible.png',
                        'src/assets/gambar/docker.png',
                        'src/assets/gambar/nginx.png',
                        ]}
                />

            </div>

            <div className="w-full h-auto mt-2 mb-10 rounded-2xl pt-5">
                <p className="text-[25px] text-center mb-8">
                    Want to learn with me ? check this video
                </p>
                <div
                    id="youtube-card"
                    className="flex flex-nowrap gap-x-4 overflow-x-auto scroll-smooth whitespace-nowrap p-2 scrolling-touch"
                >
          
        {/* <nav className="flex flex-col gap-y-10 mt-4">
          {["Home", "About", "Service", "Work"].map((item) => (
            <div key={item} className="border-b-2 flex justify-between border-gray-200">
              <ul className="text-xl">{item}</ul>
              <i className="ri-arrow-drop-down-fill scale-180"></i>
            </div>
          ))}
        </nav> */}
                    {SubYt.map((n) => (
                        <div className="flex-shrink-0">
                            <YoutubeCard name={n["judul"]} gambar={n["gambar"]}/>
                        </div>
                    ))}
        
                </div>
            </div>
        </div>
    )
}
