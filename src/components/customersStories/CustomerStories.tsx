import Image from "next/image"
import { useState } from "react"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { ImQuotesLeft } from "react-icons/im"

const slideData = [
    {
        "id": 1,
        "image": "/images/man.png",
        "description": "Thanks to LCode Business, Nicholas emenike has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.",
        "name1": "John Mark",
        "title": "Principal",
        "name2": "Toni Kross"
    }, {
        "id": 2,
        "image": "/images/woman.png",
        "description": "LCode has been a great platform to stay competitive in the digital transformation of the workplace by offering fresh, relevant, personalized on-demand learning content powered by a dynamic content marketplace.",
        "name1": "Karen Hunter",
        "title": "America's Team Lead Learning & Development",
        "name2": "Steelcase"
    }, {
        "id": 3,
        "image": "/images/boy.png",
        "description": "With LCode Business employees were able to marry the two together, technology and consultant soft skills. We're thankful that once they got in and took their key IT courses on AWS, Azure, Google Cloud, Big Data, and DevOps that they efficiently moved over to Consulting courses to help drive their career forward.",
        "name1": "Ian Stevens",
        "title": "Global Head of Capability DevelopmentNorth America",
        "name2": "Publicis Sapient"
    }, {
        "id": 4,
        "image": "/images/girl.png",
        "description": "To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With LCode Business, I can give my team the space to learn and take the initiative. It means we can produce higher quality work more quickly.",
        "name1": "Lucy Baker",
        "title": "CEO",
        "name2": "Baker Magrate"
    }
]

const CustomerStories: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");

    const handleNextSlide = () => {
        if (currentIndex < slideData.length - 1 && !isSliding) {
            setCurrentIndex(prevIndex => prevIndex + 1);
            setSlideDirection("next");
            setIsSliding(true);
            setTimeout(() => {
                setIsSliding(false);
            }, 500);
        }
    };

    const handlePrevSlide = () => {
        if (currentIndex > 0 && !isSliding) {
            setCurrentIndex(prevIndex => prevIndex - 1);
            setSlideDirection("prev");
            setIsSliding(true);
            setTimeout(() => {
                setIsSliding(false);
            }, 500);
        }
    };

    return (
        <section className="flex py-20 flex-col gap-8 items-center justify-center w-full">
            <div className="px-10 w-[1000px] overflow-hidden relative">
                <div className="relative h-[400px] flex items-center">
                    {/* Current Slide */}
                    <div
                        className={`absolute inset-0 flex items-center justify-between gap-20 px-20 py-10 transition-transform duration-300 ease-in-out bg-slate-200 ${isSliding
                            ? slideDirection === "next"
                                ? "slide-next"
                                : "slide-prev"
                            : ""
                            }`}
                    >
                        <div className="flex flex-col justify-center gap-10">
                            <div className="flex flex-col justify-center gap-3">
                                <ImQuotesLeft className="text-2xl" />
                                <blockquote className="w-96">
                                    {slideData[currentIndex].description}
                                </blockquote>
                            </div>
                            <p className="text-indigo-800 cursor-pointer hover:text-indigo-500">Read full story</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-3">
                            <Image className="rounded-full w-44 h-44" src={slideData[currentIndex].image} width={400} height={400} alt="customer image" />
                            <div className="flex flex-col items-center">
                                <p className="font-bold text-lg">{slideData[currentIndex].name1}</p>
                                <p className="font-thin">{slideData[currentIndex].title}</p>
                            </div>
                            <p>{slideData[currentIndex].name2}</p>
                        </div>
                    </div>

                    {/* Incoming Slide */}
                    <div
                        className={`absolute inset-0 flex items-center justify-between gap-20 px-20 py-10 transition-transform duration-300 ease-in-out bg-slate-200 ${isSliding
                            ? slideDirection === "next"
                                ? "slide-next-incoming"
                                : "slide-prev-incoming"
                            : ""
                            }`}
                    >
                        <div className="flex flex-col justify-center gap-10">
                            <div className="flex flex-col justify-center gap-3">
                                <ImQuotesLeft className="text-2xl" />
                                <blockquote className="w-96">
                                    {slideDirection === "next"
                                        ? slideData[currentIndex + 1]?.description || slideData[0].description
                                        : slideData[currentIndex - 1]?.description || slideData[slideData.length - 1].description}
                                </blockquote>
                            </div>
                            <p className="text-indigo-800 cursor-pointer hover:text-indigo-500">Read full story</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-3">
                            <Image
                                className="rounded-full w-44 h-44"
                                src={
                                    slideDirection === "next"
                                        ? slideData[currentIndex + 1]?.image || slideData[0].image
                                        : slideData[currentIndex - 1]?.image || slideData[slideData.length - 1].image
                                }
                                width={400}
                                height={400}
                                alt="customer image"
                            />
                            <div className="flex flex-col items-center">
                                <p className="font-bold text-lg">
                                    {slideDirection === "next"
                                        ? slideData[currentIndex + 1]?.name1 || slideData[0].name1
                                        : slideData[currentIndex - 1]?.name1 || slideData[slideData.length - 1].name1}
                                </p>
                                <p className=" font-thin">
                                    {slideDirection === "next"
                                        ? slideData[currentIndex + 1]?.title || slideData[0].title
                                        : slideData[currentIndex - 1]?.title || slideData[slideData.length - 1].title}
                                </p>
                            </div>
                            <p>
                                {slideDirection === "next"
                                    ? slideData[currentIndex + 1]?.name2 || slideData[0].name2
                                    : slideData[currentIndex - 1]?.name2 || slideData[slideData.length - 1].name2}
                            </p>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    {currentIndex < slideData.length - 1 && (
                        <BiChevronRight
                            onClick={handleNextSlide}
                            className="absolute text-5xl -right-6 bg-zinc-400 transform -translate-y-1/2 hover:bg-zinc-300 duration-100 cursor-pointer rounded-full"
                        />
                    )}
                    {currentIndex > 0 && (
                        <BiChevronLeft
                            onClick={handlePrevSlide}
                            className="absolute text-5xl -left-6 bg-zinc-400 hover:bg-zinc-300 duration-100 cursor-pointer rounded-full"
                        />
                    )}
                </div>
            </div>
            <div className="flex flex-row items-center justify-center text-indigo-800 cursor-pointer hover:text-indigo-500">
                <p>View more customer stories</p>
                <BiChevronRight />
            </div>
        </section>
    );
};

export default CustomerStories;