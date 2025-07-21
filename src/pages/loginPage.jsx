import { Link } from "react-router-dom"

export const LoginPage = () => {

  


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-2">
            <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-full lg:max-w-3xl max-w-2xl lg:my-0 mt-32 mb-10">
                <div className="flex flex-col gap-6 p-8 md:w-1/2 border-b md:border-b-0 md:border-r">
                    <h2 className="text-2xl font-bold text-blue-700 mb-2">KIRISH</h2>
                    <div>
                        <label className="block text-sm mb-1">Telefon raqam:</label>
                        <input type="tel" className="border rounded px-3 py-2 w-full" />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Parol:</label>
                        <input type="password" className="border rounded px-3 py-2 w-full" />
                    </div>
                    <Link to="forget_password" className="text-blue-500 text-sm hover:underline">Parolni unutdingizmi?</Link>
                    <Link to="register" className="text-blue-500 text-sm hover:underline">Ro'yxatdan o'tish</Link>
                </div>
                {/* Biz haqimizda */}
                <div className="flex flex-col gap-4 p-8 md:w-1/2 justify-center">
                    <h2 className="text-xl font-bold text-red-700 mb-2">Biz haqimizda</h2>
                    <div className="bg-gray-100 rounded-lg p-4 text-gray-700 shadow">
                        <h3 className="font-semibold text-base mb-2">FindUz platformasi</h3>
                        <p>
                            FindUz — yo‘qolgan va topilgan buyumlarni tez va oson qidirish hamda e’lon qilish uchun yaratilgan. Maqsadimiz — har bir inson o‘z buyumini topa olishi uchun yordam berish.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}