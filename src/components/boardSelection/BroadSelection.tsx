"use client"
import { useState } from "react"
import pythonCourses from "./python_data.json"
import Image from "next/image";

const BroadSelection: React.FC = () => {
    const [activeNav, setActiveNav] = useState<string>("python");

    return (
        <section className="flex flex-col items-center justify-center pt-20">
            <div className="w-[70%] flex flex-col gap-3">
                <p className="font-bold text-3xl font-serif">A broad selection of courses</p>
                <p className="text-md">Choose from over 220,000 online courses with new additions published every month</p>
                <div className="flex flex-col gap-2">
                    <nav>
                        <ul className="flex flex-row items-center gap-5 font-bold">
                            <li className={`${activeNav === "python" ? "text-black" : "text-slate-500"} cursor-pointer duration-75`} onClick={() => setActiveNav("python")}>
                                <p>Python</p>
                            </li>
                            <li className={`${activeNav === "excel" ? "text-black" : "text-slate-500"} cursor-pointer duration-75`} onClick={() => setActiveNav("excel")}>
                                <p>Microsoft Excel</p>
                            </li>
                            <li className={`${activeNav === "web" ? "text-black" : "text-slate-500"} cursor-pointer duration-75`} onClick={() => setActiveNav("web")}>
                                <p>Web Developemnt</p>
                            </li>
                            <li className={`${activeNav === "javascript" ? "text-black" : "text-slate-500"} cursor-pointer duration-75`} onClick={() => setActiveNav("javascript")}>
                                <p>JavaScript</p>
                            </li>
                            <li className={`${activeNav === "data" ? "text-black" : "text-slate-500"} cursor-pointer duration-75`} onClick={() => setActiveNav("data")}>
                                <p>Data Science</p>
                            </li>
                            <li className={`${activeNav === "aws" ? "text-black" : "text-slate-500"} cursor-pointer duration-75`} onClick={() => setActiveNav("aws")}>
                                <p>Amazon AWS</p>
                            </li>
                            <li className={`${activeNav === "drawing" ? "text-black" : "text-slate-500"} cursor-pointer duration-75`} onClick={() => setActiveNav("drawing")}>
                                Drawing
                            </li>
                        </ul>
                    </nav>
                    <div className="w-full flex flex-col border border-black p-5 gap-5">
                        <div className="w-full flex flex-col gap-2 ">
                            <p className="font-bold text-2xl font-serif">Expand your career opportunities with Python</p>
                            <p className="resize-none w-[60%] line-clamp-3">
                                Take on of LCode range of Python courses and learn how to code using this incredibly usefull language.Its
                                simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You will
                                learn how to build everything from games to sites to apps. Choose from a range of course that will appeal to
                            </p>
                            <button className="border border-slate-600 p-2 font-bold w-fit">Explore Python</button>
                        </div>
                        <div className="">
                            {
                                pythonCourses.map((course) => (
                                    <div className="p-2 shadow-xl-inner w-fit" key={course.id}>
                                        <Image className="w-72 h-44" src={course.image} width={500} height={500} alt="course image" />
                                        <p className="font-bold line-clamp-2">{course.name}</p>
                                        <p className="text-light text-sm">{course.authur}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BroadSelection