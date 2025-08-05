import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"

export const Login = () => {
const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const auth_API = "https://226b-13-49-18-4.ngrok-free.app/auth/token/";

const handleLogin = async (e) => {
     e.preventDefault(); 

  console.log("📤 Yuborilmoqda: Login so‘rovi...");

  try {
    const response = await axios.post(
      auth_API,
      {
        username: name,
        password: password
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }
    );

    if (response.status === 200) {
      console.log("✅ Login muvaffaqiyatli:", response.data);
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
    } else {
      console.error("❌ Login muvaffaqiyatsiz:", response.data);
    }

  } catch (error) {
    if (error.response) {
      console.error("🚫 Xatolik javobi:", error.response.data);
    } else {
      console.error("⚠️ So‘rov xatoligi:", error.message);
    }
  }
};


return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-2">
        <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-full lg:max-w-4xl max-w-3xl mt-32 mb-10">
            <form className="flex flex-col gap-6 p-8 md:w-1/2 border-b md:border-b-0 md:border-r" onSubmit={handleLogin}>
                <h2 className="text-2xl font-bold text-blue-700 mb-2">KIRISH</h2>
                <div>
                    <label htmlFor="username">Name:</label>
                    <input id="username" type="text" value={name}
                    onChange={(e) => setName(e.target.value)} className="border rounded px-3 py-2 w-full" />
                </div>
                <div>
                    <label className="block text-sm mb-1">Parol:</label>
                    <input type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)} className="border rounded px-3 py-2 w-full" />
                </div>
                <button className="bg-blue-500 text-white rounded px-4 py-2" type="submit" ><Link to="/lost">Kirish</Link></button>
                <Link to="forget_password" className="text-blue-500 text-sm hover:underline">Parolni unutdingizmi?</Link>
                <Link to="register" className="text-blue-500 text-sm hover:underline">Ro'yxatdan o'tish</Link>
            </form>
            <div className="flex flex-col gap-4 p-8 md:w-1/2 justify-center">
                <h2 className="text-xl font-bold text-red-700 mb-2">Biz haqimizda</h2>
                <div className="bg-gray-100 rounded-lg p-4 text-gray-700 shadow">
                    <h3 className="font-semibold text-base mb-2">FindUz platformasi</h3>
                    <p>
                        FindUz — yo'qolgan va topilgan buyumlarni tez va oson qidirish hamda e'lon qilish uchun yaratilgan. Maqsadimiz — har bir inson o'z buyumini topa olishi uchun yordam berish.
                    </p>
                </div>
            </div>
        </div>
    </div>
)
}
