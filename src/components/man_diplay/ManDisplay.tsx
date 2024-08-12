"use client";
import { useGlobal } from "@/context/GlobalContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SiBmw, SiHonda, SiSpotify, SiTon, SiToyota, SiVisualstudio, SiWindows10 } from "react-icons/si";

const slideData = [
    {
        id: 1,
        image: "/images/man.png",
        name: "Find the right fit",
        description1: "The topics you want taught by real-world experts,",
        description2: "Courses as low as $4 until November 8."
    },
    {
        id: 2,
        image: "/images/woman.png",
        name: "Ready to learn",
        description1: "Learn with excitement",
        description2: "Sign up and kick start the process",
    },
    {
        id: 3,
        image: "/images/boy.png",
        name: "Become the developer you desire",
        description1: "Land a high paying job",
        description2: "Turn your dream to reality"
    },
    {
        id: 4,
        image: "/images/girl.png",
        name: "Explore your future",
        description1: "Where can learning take you",
        description2: "Discover the possibilities with a course"
    }
];

const ManDisplay: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [opacity, setOpacity] = useState<number>(1);
    const { closeTopHeader } = useGlobal()

    useEffect(() => {
        const timer = setInterval(() => {
            setOpacity(0);
            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === slideData.length - 1 ? 0 : prevIndex + 1
                );
                setOpacity(1);
            }, 500);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={`w-full h-[600px] flex flex-col gap-5 items-center justify-between ${closeTopHeader ? "mt-[75px]" : "mt-[130px]"} `}>
            <div className="bg-gradient-to-r from-slate-100 to-pink-100 h-[400px] w-[70%] flex items-center justify-between ps-5 overflow-hidden">
                <div className="flex flex-col justify-center items-start shadow-2xl w-fit p-10">
                    <p className={`font-bold text-2xl font-sans duration-500`} style={{ opacity }}>{slideData[currentIndex].name}</p>
                    <div className={`flex flex-col justify-center items-start`}>
                        <p className={`font-thin duration-500`} style={{ opacity }}>{slideData[currentIndex].description1}</p>
                        <p className={`duration-500`} style={{ opacity }}>{slideData[currentIndex].description2}</p>
                    </div>
                </div>
                <div className="flex flex-col h-full w-[50%] justify-end items-center">
                    <Image className={`w-96 h-96 duration-500`} style={{ opacity }} src={slideData[currentIndex].image} width={500} height={500} alt="current display image" />
                </div>
            </div>
            <div className="h-[200px] w-full bg-slate-100 flex flex-col items-center gap-5 justify-center">
                <p>Trusted by over 15,000 companies and millions of learners around the world</p>
                <div className="flex flex-row gap-10">
                    <SiBmw className="text-5xl" />
                    <SiToyota className="text-5xl" />
                    <SiHonda className="text-5xl" />
                    <SiSpotify className="text-5xl" />
                    <SiVisualstudio className="text-5xl" />
                    <SiWindows10 className="text-5xl" />
                    <SiTon className="text-5xl" />
                </div>
            </div>
        </div>
    );
};

export default ManDisplay;
