import { Search, Volume2 } from "lucide-react"
import { Link } from "react-router-dom"

export const Showcase = () => {
    return(
        <section className="showcase flex items-center justify-center text-center w-full h-screen sm:px-12 bg-blue-50 flex-col leading-relaxed">
            <h1 className="xl:text-5xl md:text-4xl text-3xl font-semibold text-black leading-snug xl:w-7/12 title">Yo'qolgan buyumlarni topishda eng yaxshi yordamchi!</h1>
            <div className="bg-blue-50 flex items-center justify-center gap-4 md:flex-nowrap flex-wrap">
                <button className="bg-blue-600 rounded-md py-2 px-2 text-white"><Link to="#" className="flex text-justify lg:text-xl text-md items-center justify-center gap-2"><Search color="white" size={35} /><h2 className="text-center">Yo'qolgan buyumni qidirish</h2></Link></button>
                <button className="bg-red-600 rounded-md py-2 px-2 text-white"><Link to="#" className="flex items-center justify-center gap-2 lg:text-xl text-md"><Volume2 color="white" size={35}/><h2 className="text-center">Topilgan buyumni e'lon qilish</h2></Link></button>
            </div>
        </section>
    )
}


