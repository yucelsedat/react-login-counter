import { Link, NavLink, Outlet, useNavigate } from "react-router-dom"

export default function HomeLayout () {

 
    return (
        <>
        <div className="flex justify-between bg-black">
            <div className="w-2/5 flex flex-col justify-center">
                <img src="sy.jpg" alt="" className="w-full"/>
            </div>
            <div className="relative w-3/5 h-screen mx-8 pt-8 text-gray-300  flex flex-col justify-start gap-4">
                <h1 className="text-8xl mb-4"> 
                    BURDAN BAŞLA VE KEŞFET
                </h1>
                
                <p className="font-bold text-2xl">Hemen katıl. </p>
                <Link to='/Auth/register'
                className="w-1/2 p-2 bg-gray-600 border border-gray-600 font-bold rounded-3xl text-center hover:bg-slate-500"
                >
                    Kayıt Ol
                </Link>
                <p className="font-bold text-md">Zaten bir hesabın var mı? </p>
                <Link to='/Auth/login'
                className="w-1/2 p-2 font-bold border border-gray-50 rounded-3xl text-center hover:bg-slate-500"
                >
                    Giriş Yap
                </Link>
            </div>  
        </div>
        
        <Outlet />
        </>
    )
    
}