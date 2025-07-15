import { Menu, Search, Volume2 } from "lucide-react"
import { Link } from "react-router-dom"


export const Home = () => {
return(
    <nav className="navbar flex justify-between items-center md:px-10 md:py-8 px-8 py-6 w-full h-[100px] shadow-md top-0 left-0 right-0 fixed bg-white">
        <div className="logo">
            <h1 className="text-blue-900 font-bold xl:text-[40px] text-[28px]">FIND.UZ</h1>
        </div>
        <div className="links menu">
                <input type="checkbox" className="hidden" id="menu"/>
            <ul className="flex items-center gap-4 xl:text-xl text-lg font-semibold text-blue-900 ul lg:bg-white bg-blue-900">
                <button className="btn1 bg-white border-2 text-blue-900 text-xl md:px-8 px-6 rounded-md transition duration-700 md:py-2 py-[5px]">Kirish</button>
                <li><a href="#">Yo'qolgan</a></li>
                <li><a href="#">Topib olingan</a></li>
                <li><a href="#">Biz haqimizda</a></li>
                <li><a href="#">Aloqa</a></li>
                <li><a href="#">Registratsiya</a></li>
            </ul>
                <label htmlFor="menu" className="label2"></label>
        </div>
        <div className="btn flex items-center gap-4">
            <button className="bg-blue-900 border-2 border-blue-900 text-xl md:px-8 px-6 rounded-md transition duration-700 md:py-2 py-[5px] hover:bg-white hover:text-blue-950 text-white">Kirish</button>
            <label htmlFor="menu" className="label1"><Menu size={46} color="darkblue"/></label>
        </div>
    </nav>
)
}

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


