import MiniCardMain from "/src/data/minicard"
import MediumCard from "/src/data/mediumcard"
import SkillCard from "/src/data/cardskill"
import YoutubeCard from "/src/data/cardyoutube"
import MyProjject from "/src/data/cardProject"

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
                Hello, I am Freelance and youtuber - <span className="text-[#E6FF28]">network, devOps and Python</span>
            </p>

            <div className="w-full h-45 md:h-56 mt-5 rounded-2xl bg-white border border-neutral-200" />
            <div className="overflow-hidden w-full h-110  rounded-2xl flex flex-col mt-6 ">
                <div className=" w-full flex flex-col h-auto gap-y-3  border-neutral-200">
                    <div className=" bg-white h-60 flex justify-center items-center rounded-2xl overflow-hidden ">
                      <img src=" src/assets/gambar/raka2.jpg" alt="" srcset="" />
                    </div>
                    
                </div>
                <div className=" w-full mt-2 flex-2/3 flex-col  rounded-2xl flex py-4  border-neutral-200" >
                    <p className="text-2xl text-start"> 👋 good day, i'm Raka Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    <button className="w-40 text-black justify-center underline  flex  h-12 items-center rounded-md text-md mb-4 ">see more about me</button>
                </div>
               
            </div>
            <div className="w-full h-auto mt-4 rounded-2xl pt-5">
                <p className=" text-2xl mb-1 text-center">✍ My Experience</p>
                <p className="mb-4 text-md text-neutral-500 text-center ">pengalaman, magang dan pkl</p>
            
                <MediumCard />
            </div>

            
            {/* Skills Section reverted to original layout */}
            <div className="w-full h-auto mt-6 rounded-2xl pt-5 space-y-4">
                <p className=" text-2xl mb-1 w-full text-center ">✍ My Skills</p>
                <p className="mb-10 text-md text-neutral-500 text-center ">dikuasai dan sedang dipelajari</p>
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
            <div id="itnsa" className=" relative w-full h-auto mt-2 mb-10 overflow-hidden  rounded-2xl pt-5 flex flex-col " >
                <section id="play list itnsa">
                <p className=" text-2xl mb-1 w-full text-center ">✍ My Project</p>
                <p className="mb-5 text-md text-neutral-500 text-center ">inner Project</p>
                <div>
                <MyProjject />
                <MyProjject />
                </div>
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
