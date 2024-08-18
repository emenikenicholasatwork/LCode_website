"use client"
import { useState } from "react"
import PythonSelection from "./pythonSelection/PythonSelection";
import JavaSelection from "./javaSelection/JavaSelection";
import JavascriptSelection from "./javascript/JavascriptSelection";
import AI from "./Cplus/Cplus";
import HTMLSelection from "./html&css/HTML";
import AWSSelection from "./aws/AWS";

const BroadSelection: React.FC = () => {
    const [activeNav, setActiveNav] = useState<string>("python");
    return (
        <section className="flex flex-col w-full items-center justify-center pt-10">
            <div className="w-[90%] flex flex-col gap-3">
                <p className="font-bold text-3xl font-serif">A broad selection of courses</p>
                <p className="text-md">Choose from over 220,000 online courses with new additions published every month</p>
                <div className="w-full flex flex-col gap-2 items-start justify-center">
                    <nav>
                        <ul className="flex flex-row items-center gap-5 font-bold">
                            <li className={`${activeNav === "python" ? "text-black" : "text-slate-500"} cursor-pointer duration-75`} onClick={() => setActiveNav("python")}>
                                <p>Python</p>
                            </li>
                            <li className={`${activeNav === "java" ? "text-black" : "text-slate-500"} cursor-pointer duration-75`} onClick={() => setActiveNav("java")}>
                                <p>Java</p>
                            </li>
                            <li className={`${activeNav === "javascript" ? "text-black" : "text-slate-500"} cursor-pointer duration-75`} onClick={() => setActiveNav("javascript")}>
                                <p>JavaScript</p>
                            </li>
                            <li className={`${activeNav === "html" ? "text-black" : "text-slate-500"} cursor-pointer duration-75`} onClick={() => setActiveNav("html")}>
                                <p>HTML & CSS</p>
                            </li>
                            <li className={`${activeNav === "ai" ? "text-black" : "text-slate-500"} cursor-pointer duration-75`} onClick={() => setActiveNav("cplus")}>
                                <p>C++</p>
                            </li>
                            <li className={`${activeNav === "aws" ? "text-black" : "text-slate-500"} cursor-pointer duration-75`} onClick={() => setActiveNav("aws")}>
                                <p>Amazon AWS</p>
                            </li>
                        </ul>
                    </nav>
                    {activeNav === "python" && <PythonSelection />}
                    {activeNav === "java" && <JavaSelection/>}
                    {activeNav === "javascript" && <JavascriptSelection/>}
                    {activeNav === "cplus" && <AI/>}
                    {activeNav === "html" && <HTMLSelection/>}
                    {activeNav === "aws" && <AWSSelection/>}
                </div>
            </div>
        </section>
    )
}
export default BroadSelection