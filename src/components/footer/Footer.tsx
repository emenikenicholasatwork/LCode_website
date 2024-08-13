import { BiGlobe } from "react-icons/bi"
import { SiBmw, SiToyota, SiHonda, SiSpotify, SiVisualstudio } from "react-icons/si"

const Footer: React.FC = () => {
    return (
        <footer className="w-full h-52">
            <div className="w-full h-[1px] bg-black"></div>
            <div className="flex flex-row justify-between px-10 py-10">
                <div className="flex flex-row justify-between gap-20">
                    <div className="flex flex-col gap-1">
                        <p className="hover:underline cursor-pointer">LCode Buisness</p>
                        <p className="hover:underline cursor-pointer">Teach on LCode</p>
                        <p className="hover:underline cursor-pointer">Get the App</p>
                        <p className="hover:underline cursor-pointer">About us</p>
                        <p className="hover:underline cursor-pointer">Contact us</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="hover:underline cursor-pointer">Careers</p>
                        <p className="hover:underline cursor-pointer">Blog</p>
                        <p className="hover:underline cursor-pointer">Help and Support</p>
                        <p className="hover:underline cursor-pointer">Affiliate</p>
                        <p className="hover:underline cursor-pointer">Investors</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="hover:underline cursor-pointer">Terms</p>
                        <p className="hover:underline cursor-pointer">Privacy policy</p>
                        <p className="hover:underline cursor-pointer">Cookie settings</p>
                        <p className="hover:underline cursor-pointer">Sitemap</p>
                        <p className="hover:underline cursor-pointer">Accessibility statement</p>
                    </div>
                </div>
                <div className="flex gap-1 border border-black h-fit w-36 py-2 ps-2 cursor-pointer">
                    <BiGlobe className="text-xl" />
                    <p>English</p>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center px-10 py-10">
                <p className="cursor-pointer font-bold text-2xl font-serif">LCode</p>
                <p>© 2024 LCode, Inc.</p>
            </div>
        </footer>
    )
}
export default Footer