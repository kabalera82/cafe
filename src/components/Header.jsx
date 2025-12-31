import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="
                        w-[90vw] h-[16vh] 
                        border-8 border-sky-400 rounded-3xl bg-red-800
                        fixed top-2 left-1/2 -translate-x-1/2
                        z-10
                        ">
            <ul className="flex flex-row justify-around items-center overflow-hidden">
                <li>
                    <img
                        src="/logo.webp"
                        alt="Logo"
                        className="w-[135px] h-[135px] translate-y-2 object-contain"
                    />
                </li>
                <li>
                    <NavLink to="/" className="">
                        <h1 className="text-5xl font-extrabold text-sky-700 mb-1">Dogster Solutions</h1>
                    </NavLink>
                </li>
                <li className="flex flex-wrap text-2xl justify-center items-center gap-8 text-slate-400 font-bold">
                    <li><NavLink to="/Gallery">Gallery</NavLink></li>
                    <li><NavLink to="/Contact">Contacto</NavLink></li>
                </li>
            </ul>
        </div>
    )
}


export default Header;