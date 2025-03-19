import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiHome, BiLogOut, BiUser } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";

const SideBar = ({ isSidebarOpen, closeSidebar }) => {
const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
const navigate = useNavigate();

useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
}, []);

const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
    window.location.reload();
};

return (
    <aside
    className={` bg-teal-800 text-white shadow-lg pt-16 transition-transform duration-300 z-50
    ${isMobile ? `fixed top-0 left-0 h-full w-64 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}` : "w-64 h-screen fixed left-0 top-0"}`}
    >
    {/* Sidebar Content */}
    <nav className="p-4 space-y-4 text-lg relative">
        {/* Close Button (Only on Mobile) */}
        {isMobile && (
        <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={closeSidebar}
        >
            ✕
        </button>
        )}

        <Link to="dashboard" onClick={isMobile ? closeSidebar : undefined}>
        <div className="flex items-center gap-3 py-3 px-4 rounded-md hover:bg-slate-800">
            <BiHome /> Dashboard
        </div>
        </Link>

        <Link to="doctors" onClick={isMobile ? closeSidebar : undefined}>
        <div className="flex items-center gap-3 py-3 px-4 rounded-md hover:bg-slate-800">
            <BiUser /> Doctors
        </div>
        </Link>

        <Link to="patients" onClick={isMobile ? closeSidebar : undefined}>
        <div className="flex items-center gap-3 py-3 px-4 rounded-md hover:bg-slate-800">
            <BiUser /> Patients
        </div>
        </Link>

        <Link to="appointments" onClick={isMobile ? closeSidebar : undefined}>
        <div className="flex items-center gap-3 py-3 px-4 rounded-md hover:bg-slate-800">
            <IoSettingsOutline /> Appointments
        </div>
        </Link>

        {/* Logout Button */}
        <button
        className="flex items-center gap-2 px-4 py-2 rounded-md text-white bg-red-600 hover:bg-red-700 transition duration-300"
        onClick={handleLogout}
        >
        <BiLogOut size={20} /> Logout
        </button>
    </nav>
    </aside>
);
};

export default SideBar;
