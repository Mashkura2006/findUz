import { Menu } from "lucide-react";
import { Outlet } from "react-router-dom";


export const Navbar = () => {
return(
    <div>
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
    <Outlet />
    </div>
)
}