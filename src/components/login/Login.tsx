import { useGlobal } from "@/context/GlobalContext"
import { useState } from "react"
import { BiLock, BiUser, BiX } from "react-icons/bi"
import { MdEmail } from "react-icons/md"

const Login: React.FC = () => {
    const { closeAuthComponent } = useGlobal()
    const [login, setLogin] = useState(false);
    return (
        <div className="fixed z-30 h-full w-full flex items-center justify-center bg-[rgb(0,0,0,.5)]">
            <div className="bg-white p-5 h-fit duration-300 w-[500px] rounded-lg">
                <div className="flex flex-row items-center justify-between">
                    {!login && <p className="text-2xl font-bold text-purple-900">Welcome, Signup</p>}
                    {login && <p className="text-2xl font-bold text-purple-900">Welcome back, Login</p>}
                    <BiX className="text-3xl cursor-pointer" onClick={()=>{closeAuthComponent()}}/>
                </div>
                <div>
                    <p className="">Kindly fill the require detials.</p>
                </div>
                <form action="" className="p-5 flex flex-col gap-3">
                    <div className={`bg-sky-100 duration-300 ${login ? "h-0 p-0":"p-2 h-fit"} flex flex-row overflow-hidden items-center rounded-lg`}>
                        <BiUser className="text-2xl"/>
                        <input className="outline-none bg-transparent w-full p-2 text-lg" type="text" placeholder="First Name" required/>
                    </div>
                    <div className={`bg-sky-100 duration-300 ${login ? "h-0 p-0":"p-2 h-fit"} flex flex-row overflow-hidden items-center rounded-lg`}>
                        <BiUser className="text-2xl"/>
                        <input className="outline-none bg-transparent w-full p-2 text-lg" type="text" placeholder="Last Name" />
                    </div>
                    <div className="bg-sky-100 p-2 flex flex-row items-center rounded-lg">
                        <MdEmail className="text-2xl"/>
                        <input className="outline-none bg-transparent w-full p-2 text-lg" type="email" placeholder="eme..@gmil.com" />
                    </div>
                    <div className="bg-sky-100 p-2 flex flex-row items-center rounded-lg">
                        <BiLock className="text-2xl"/>
                        <input className="outline-none bg-transparent w-full p-2 text-lg" type="password" placeholder="password" />
                    </div>
                    <div className={`bg-sky-100 duration-300 ${login ? "h-0 p-0":"p-2 h-fit"} flex flex-row overflow-hidden items-center rounded-lg`}>
                        <BiLock className="text-2xl"/>
                        <input className="outline-none bg-transparent w-full p-2 text-lg" type="password" placeholder="Confirm password" />
                    </div>
                {
                    login &&
                    <div className="flex flex-row items-center gap-2">
                        <p>New to LCode?, create an account?</p>
                        <p className="cursor-pointer text-blue-700" onClick={()=>setLogin(pre=>!pre)}>Signup</p>
                    </div>
                }
                {
                    !login &&
                    <div className="flex flex-row items-center gap-2">
                        <p>Already have an account?</p>
                        <p className="cursor-pointer text-blue-700" onClick={()=>setLogin(pre=>!pre)}>Login</p>
                    </div>
                }
                <div className={`flex flex-row duration-300 ${login && "h-0 overflow-hidden"} items-center gap-2`}>
                    <input type="checkbox" />
                    <p className="flex gap-1">I agree to LCode's <p className="text-blue-700 cursor-pointer">terms and condition</p></p>
                </div>
                <div className={`flex items-center  bg-purple-500 justify-center hover:scale-[1.05] relative w-1/2 p-3 h-16 rounded-xl overflow-hidden ${login ? "before:w-full" : ""} duration-300`}>
                    <button type="submit" className={`absolute z-10 text-center w-full font-bold ${login ? "text-white":"text-white"} `}>Submit</button>
                    <div className={`before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:bg-black before:duration-300 ${ login ? "before:w-full" : "before:w-0"}`}></div>
                </div>
            </form>
            </div>
        </div>
    )
}
export default Login