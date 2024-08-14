import Image from "next/image"

const BecomeAnInstructor: React.FC = () => {
    return (
        <section className="bg-slate-200 py-20 flex w-full items-center justify-center">
            <div className="flex flex-row items-center justify-between gap-20">
                <Image className="w-96 h-96" src={"/images/man.png"} height={500} width={500} alt="instructor images" />
                <div>
                    <p className="font-bold text-4xl font-serif">Become an instructor</p>
                    <blockquote className="w-96">
                        Instructors from around the world teach millions of learners on LCode. We provide the tools and skills to teach what you love.
                    </blockquote>
                    <button className="bg-zinc-400 p-3 rounded-md font-bold hover:bg-gray-300 duration-100 ">Starting teaching today</button>
                </div>
            </div>
        </section>
    )
}
export default BecomeAnInstructor