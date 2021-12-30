import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import GlobalNav from "../components/GlobalNav";

function MainLayout() {
  return (
    <div>
      <GlobalNav />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default MainLayout;
