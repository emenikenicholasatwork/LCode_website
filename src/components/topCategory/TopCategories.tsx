import Image from "next/image"
import categoriesData from "./categories_data.json"

const TopCategories: React.FC = () => {
    return (
        <section>
            <p>Top Categories</p>
            <div className="grid grid-cols-4 gap-5">
                {
                    categoriesData.map((data) => (
                        <div key={data.id} className="flex flex-col gap-2">
                            <div className="flex items-center justify-center w-72 h-60 bg-slate-100 rounded-lg">
                                <Image className="w-44 h-hh" src={data.image} width={500} height={500} alt={`${data.name} image`} />
                            </div>
                            <p className="font-serif text-xl">{data.name}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default TopCategories