import Image from "next/image"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { ImQuotesLeft } from "react-icons/im"

const CustomerStories: React.FC = () => {
    return (
        <section className="flex py-20 flex-col gap-8 items-center justify-center">
            <div className="bg-slate-200 flex flex-row items-center justify-between px-20 gap-20 py-10">
                <div className="flex flex-col justify-center gap-10">
                    <div className="flex flex-col justify-center gap-3">
                        <ImQuotesLeft className="text-2xl" />
                        <blockquote className="w-96">
                            Thanks to LCode Business, Nicholas emenike has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.
                        </blockquote>
                    </div>
                    <p className="text-indigo-800 cursor-pointer hover:text-indigo-500">Read full story</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                    <Image className="rounded-full w-44 h-44" src={"/images/man.png"} width={400} height={400} alt="customer image" />
                    <div className="flex flex-col items-center">
                        <p className="font-bold text-lg">John Mark</p>
                        <p className="font-thin">CEO</p>
                    </div>
                    <p>Toni Kross</p>
                </div>
                <BiChevronLeft className="absolute" />
            </div>
            <div className="flex flex-row items-center justify-center text-indigo-800 cursor-pointer hover:text-indigo-500">
                <p>View more customer stories</p>
                <BiChevronRight />
            </div>
        </section>
    )
}
export default CustomerStories