import YoutubeCard from "../Card/cardyoutube"

export default function YoutubeVid(value){
    return(
        <>
           <div className="w-full h-auto mt-2 mb-10 rounded-2xl pt-5">
                <p className="text-[25px] text-center mb-8">
                    Not ready for my course? Start learning for free
                </p>
                <div
                    id="youtube-card"
                    className="flex flex-nowrap gap-x-4 overflow-x-auto scroll-smooth whitespace-nowrap p-2 scrolling-touch"
                >
                    <div className="flex-shrink-0">
                        <YoutubeCard />
                    </div>
                    <div className="flex-shrink-0">
                        <YoutubeCard />
                    </div>
                    <div className="flex-shrink-0">
                        <YoutubeCard />
                    </div>
                </div>
            </div>
        </>
    )
}