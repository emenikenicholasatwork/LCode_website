import Image from "next/image"
import categoriesData from "./categories_data.json"
import { useRouter } from "next/navigation"

const TopCategories: React.FC = () => {
    const router = useRouter()

    function topItemClicked(itemName: string) {
        switch (itemName) {
            case "Design":
                router.push("/course/design");
                break;
            case "Development":
                router.push("/account/development");
                break;
            default:
                throw new Error("page not found")
        }
    }

    return (
        <section className="flex flex-col gap-5">
            <h1 className="font-bold font-serif text-2xl">Top Categories</h1>
            <div className="grid grid-cols-4 gap-2">
                {
                    categoriesData.map((data) => (
                        <div onClick={() => topItemClicked(data.name)} key={data.id} className="flex flex-col gap-2 w-full h-full cursor-pointer group">
                            <div className="flex items-center justify-center w-full h-full bg-slate-100 rounded-lg">
                                <Image className="w-4/5 h-4/6 group-hover:scale-105 duration-300" src={data.image} width={500} height={500} alt={`${data.name} image`} />
                            </div>
                            <p className="font-serif w-full">{data.name}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default TopCategories