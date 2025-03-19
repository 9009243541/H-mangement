import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";


const Layout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("auth");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div>
      <Header />
      <div className="flex">
        <span className="md:w-64"></span>
        <main className="flex-1 p-4 h-auto w-full mt-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
