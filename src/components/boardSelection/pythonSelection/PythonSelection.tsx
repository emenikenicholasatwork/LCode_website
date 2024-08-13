const PythonSelection = () => {
    return (
        <div className="w-full flex flex-col border border-black p-5 gap-5">
            <div className="w-full flex flex-col gap-2 ">
                <p className="font-bold text-2xl font-serif">Expand your career opportunities with Python</p>
                <p className="resize-none w-[60%] line-clamp-3">
                    Take on of LCode range of Python courses and learn how to code using this incredibly usefull language.Its
                    simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You will
                    learn how to build everything from games to sites to apps. Choose from a range of course that will appeal to
                </p>
                <button className="border border-slate-600 p-2 rounded-md font-bold w-fit">Explore Python</button>
            </div>
            <div className="">
                {/* {
                    pythonCourses.map((course) => (
                        <div className="p-5 cursor-pointer w-fit" key={course.id}>
                            <Image className="w-64 h-36" src={course.image} width={500} height={500} alt="course image" />
                            <p className="font-bold line-clamp-2">{course.name}</p>
                            <p className=" text-sm">{course.authur}</p>
                        </div>
                    ))
                } */}
            </div>
        </div>
    )
}
export default PythonSelection