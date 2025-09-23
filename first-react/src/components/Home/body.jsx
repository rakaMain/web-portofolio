import MiniCardMain from "/src/data/minicard"
import MediumCard from "/src/data/mediumcard"
import SkillCard from "/src/data/cardskill"
import YoutubeCard from "/src/data/cardyoutube"
import MyProjject from "/src/data/cardProject"

import SubYt from "/src/data/datayoutube"

export default function MyMain(params) {
    return(
        <div className="w-6/7 mx-auto mt-22 sm:mt-30  rounded-md relative flex flex-col  text-black ovehi">


            <div className="flex md:h-160 flex-col sm:flex-row ">
                <p className="mx-auto text-neutral-300">scrooling dont be affrid 🤗</p>
                <div className="w-full flex items-start  sm:pe-5 flex-col   mb-4 mt-3">
                    <p className="text-[24px] mb-1">👋 HI, I'm Raka</p>
                    <p className="text-[16px] mb-4 font-normal">welcome to my website</p>
                    <MiniCardMain
                        name="BNSP Certified - Network Technician"
                    />
                </div>

                <div className="w-full h-45 md:h-80 mt-2 rounded-3xl bg-white border border-neutral-200" />
                <p className=" text-[14px] mt-5 font-normal">seorang penganggsran yang banyak gaya dan menyibukan diri dengah hal yang baik</p>
                <div className="text-neutral-400 mt-2">
                    <span className="text-[13px]">👉 see more about me </span>
                    <span className="text-[13px]">👉 see more about me</span>
                </div>
            </div>



            <div className="w-full sm:flex-row-reverse h-auto mt-6 flex justify-center sm:justify-between flex-col  sm:mt-0 rounded-2xl pt-5">
                <div>
                <p className=" text-2xl mb-1 text-center">🦺 Working Experience</p>
                <p className="mb-4 text-md text-center font-thin ">pengalaman magang & kerja</p>
                </div>
                <MediumCard />
            </div>

            




            {/* Skills Section reverted to original layout */}
            <div className="w-full flex flex-col sm:flex-row sm:gap-x-3 sm:justify-between h-auto mt-6 rounded-2xl pt-5 space-y-4">
                <div className="flex-1/2">
                    <p className=" text-2xl mb-1 w-full text-center ">👨‍💻 My Skills</p>
                    <p className="mb-10 text-md text-center font-thin ">pengalaman kerja & magang</p>   
                </div>
                <div className=" flex-2/3 ">
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

            </div>
            <div id="itnsa" className=" relative w-full h-auto mt-2 mb-5 overflow-hidden  rounded-2xl pt-5 flex flex-col " >
                <section id="play list itnsa" className=" flex flex-col">
                    <p className=" text-2xl mb-1 w-full text-center ">🧱 My Project</p>
                    <p className="mb-5 text-md text-center font-thin ">project project yang dibuat</p>
                    <p className="mt-10 ">🏆 My Top Project</p>
                    <div className=" flex flex-wrap justify-around py-4">
                        <MyProjject />
                        <MyProjject />
                        <MyProjject />
                    </div>
                    <span className="text-[13px] text-center mx-auto">👉 see more about me</span>
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
                            <YoutubeCard name={n["judul"]} gambar={n["gambar"]} kategori={n["kategori"]} views={n['viwes']}/>
                        </div>
                    ))}
        
                </div>
            </div>
        </div>
    )
}
