import MiniCardMain from "../Card/minicard"
import MediumCard from "../Card/mediumcard"
import SkillCard from "../Card/cardskill"
import YoutubeCard from "../Card/cardyoutube"

import SubYt from "../data/datayoutube"

export default function MyMain(params) {
    return(
        <div className="w-6/7 mx-auto mt-22 sm:mt-30  rounded-md relative flex flex-col  text-black ovehi">
            <div className="w-full flex items-center mb-4 mt-3">
                <MiniCardMain
                    name="BNSP Certified"
                />
            </div>
            <p className="text-[35px] mb-4">
                Hello, I am Freelance and Educator - <span className="text-[#E6FF28]">network, devOps and Python</span>
            </p>

            <div className="w-full h-45 md:h-56 mt-5 rounded-2xl bg-white border border-neutral-200" />
            <div className="overflow-hidden w-full h-130 flex flex-col mt-5 ">
                <div className=" w-full flex flex-col h-auto gap-y-3  border-neutral-200">
                    <div className=" bg-white h-60 flex justify-center items-center overflow-hidden ">
                      <img src=" src/assets/gambar/raka.jpg" alt="" srcset="" />
                    </div>
                </div>
                <div className=" text-2xl w-full flex-2/3 rounded-2xl flex p-4  border-neutral-200" >
                    👋 good day, i'm Raka Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
            </div>
            <div className=" text-2xl w-full flex-2/3 rounded-2xl flex p-4  border-neutral-200" >
                🧤 experience
            </div>
            <div className="w-full h-auto mt-2 rounded-2xl pt-5">
                <MediumCard />
            </div>

            
            {/* Skills Section reverted to original layout */}
            <div className="w-full h-auto mt-6 rounded-2xl pt-5 space-y-4">
                <SkillCard 
                nama="Your IT Support" 
                icon={[' src/assets/gambar/linux.png',
                        'src/assets/gambar/mikrotik.png',
                        'src/assets/gambar/mincrosof.png',
                        'src/assets/gambar/winbox.png']}
                />
                <SkillCard 
                nama="Your Programer" 
                icon={[' src/assets/gambar/tailwind.png',
                        'src/assets/gambar/python.png',
                        'src/assets/gambar/react.png',
                        'src/assets/gambar/nodejs.png',
                        'src/assets/gambar/mysql.png']}
                />
                <SkillCard 
                nama="Your Devops" 
                icon={[' src/assets/gambar/vmware.png',
                        'src/assets/gambar/ansible.png',
                        'src/assets/gambar/docker.png',
                        'src/assets/gambar/nginx.png',
                        ]}
                />


            </div>
            <div id="itnsa" className="w-full h-120 mt-2 mb-10  rounded-2xl pt-5 border-2 border-neutral-200" >
                <section id="play list itnsa">
                        project
                </section>

            </div>
            <div className="w-full h-auto mt-2 mb-10  rounded-2xl pt-5">
                <p className="text-[25px] text-center mb-8">
                    Want to learn with me ? check this video
                </p>
                <div className="w-50 justify-center flex m-auto h-12 items-center rounded-md bg-white border-1 border-neutral-200 mb-4 opacity-80">Views All Tutorials</div>
                <div
                    id="youtube-card"
                    className="flex flex-nowrap gap-x-4 overflow-x-auto scroll-smooth whitespace-nowrap p-2 scrolling-touch"
                >
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
