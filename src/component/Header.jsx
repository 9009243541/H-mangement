import React, { useState, useEffect } from "react";

import { BiMenu } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import SideBar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="flex fixed z-50 left-0 right-0 top-0 justify-between items-center bg-blue-900 text-white px-6 py-3 shadow-md">
        {/* Logo & Sidebar Toggle */}
        <div className="flex items-center">
          {isMobile && (
            <button
              className="text-white text-3xl ml-4 focus:outline-none"
              onClick={() => setIsSidebarOpen((prev) => !prev)}
            >
              <BiMenu />
            </button>
          )}
        </div>

        {/* Title */}
        <h1 className="text-lg md:text-xl font-semibold tracking-wide">
          Hospital System
        </h1>

        <img
          className="h-10 w-10 rounded-lg"
          src={"src/assets/img.jpg"}
          alt="logo"
        />
      </header>

      {/* Sidebar Component */}
      <div
        className={`fixed z-40 h-full transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SideBar
          isSidebarOpen={isSidebarOpen}
          closeSidebar={() => setIsSidebarOpen(false)}
        />
      </div>
    </>
  );
};

export default Header;
