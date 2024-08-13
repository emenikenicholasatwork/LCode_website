"use client"
import { useState } from "react"
import PythonSelection from "./pythonSelection/PythonSelection";

const BroadSelection: React.FC = () => {
    const [activeNav, setActiveNav] = useState<string>("python");
    return (
        <section className="flex flex-col items-center justify-center pt-10">
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
                    {activeNav === "python" && <PythonSelection />}
                </div>
            </div>
        </section>
    )
}
export default BroadSelection