"use client";
import { useGlobal } from "@/context/GlobalContext";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiGlobe, BiSearch, BiUser, BiX } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { TiChevronRightOutline } from "react-icons/ti";

const CategoryData = [
    {
        "id":1,
        "name":"Java",
        "category":[{
            "id":1,
            "Game Development": ["2D Game Development", "3D Game Development", "Game Engine", "Mobile Game Development", "AI and Pathfinding", "Multiplayer and Networked Games", "Game Scripting", "VR and AR Game Development"]
        }]
    }
]
// "Automation", "AI & Machine Learning", "Server Developement", "Backend Development", "Mobile App Development"
const Header: React.FC = () => {
    const { closeTopHeader, toggleCloseTopHeader, openAuthComponent } = useGlobal()
    const [openAuthWidget, setOpenAuthWidget] = useState<boolean>(false);
    return (
        <header className={`fixed top-0 w-full z-20 bg-white flex flex-col ${closeTopHeader ? "h-[75px]" : "h-[130px]"} shadow-xl`}>
            <div className={`${closeTopHeader ? "h-0 p-0 overflow-hidden" : "h-16 py-2"} bg-[#fffd90c7] flex flex-col duration-100 items-center justify-center`}>
                <div className="flex lg:flex-row flex-col justify-center items-center">
                    <strong className="text-sm lg:text-lg" >Learn from a variety of teaching styles |</strong>
                    <p className="text-sm lg:text-lg"> Courses from $4</p>
                </div>
                <p className="font-black lg:text-lg animate-bounce text-sm pb-1">2 days left!</p>
                {
                    !closeTopHeader &&
                    <BiX className="absolute right-5 top-2 text-2xl cursor-pointer" onClick={toggleCloseTopHeader} />
                }
            </div>
            <div className="h-full flex flex-row items-center justify-between px-5 xl:hidden">
                <AiOutlineMenu className="text-2xl cursor-pointer" />
                <p className="text-xl animate-pulse font-serif font-extrabold"><strong>L</strong>Code</p>
                <div className="flex flex-row items-center gap-5 relative">
                    <BiUser className="text-2xl cursor-pointer" onClick={() => setOpenAuthWidget(true)} />
                    <BiSearch className="text-2xl cursor-pointer" />
                    <BsCart className="text-2xl cursor-pointer" />
                    {
                        openAuthWidget &&
                    <div className="absolute right-1 -bottom-28 min-w-44 z-20 shadow-xl bg-gray-100 p-2">
                        <ul>
                            <li className="cursor-pointer p-2 duration-100 rounded-md hover:bg-blue-400 hover:text-white" onClick={()=>{setOpenAuthWidget(false);openAuthComponent()}}>
                                <p className="text-lg">Login</p>
                            </li>
                            <li className="cursor-pointer p-2 duration-100 rounded-md hover:bg-blue-400 hover:text-white" onClick={()=>{setOpenAuthWidget(false);openAuthComponent()}}>
                                <p className="text-lg">Sign up</p>
                            </li>
                        </ul>
                    </div>
                    }
                </div>
            </div>
            <div className="h-full hidden xl:flex flex-row px-2 items-center gap-3">
                <div className="flex flex-row items-center justify-center gap-3 basis-[10%]">
                    <p className="font-extrabold font-sans animate-pulse text-2xl"><strong>L</strong>Code</p>
                </div>
                <div className="flex flex-row items-center gap-3 border rounded-full border-slate-400 bg-slate-100 basis-[60%] p-3">
                    <BiSearch className="text-slate-600 text-xl cursor-pointer" />
                    <input className="bg-transparent outline-none w-full" type="text" placeholder="Search for anything" />
                </div>
                <div className="flex flex-row items-center justify-between basis-[30%]">
                    <p className="text-sm font-thin cursor-pointer">LCode Business</p>
                    <p className="text-sm cursor-pointer">Teach on LCode</p>
                    <BsCart className="text-xl cursor-pointer basis-[5%]" />
                    <button className="border p-2 border-black basis-[20%]" onClick={openAuthComponent}>Log in</button>
                    <button className="border p-2 border-black basis-[20%] bg-black text-white" onClick={openAuthComponent}>Sign up</button>
                    <div className="flex p-2 border border-black basis-[5%] cursor-pointer">
                        <BiGlobe className="text-xl" />
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header