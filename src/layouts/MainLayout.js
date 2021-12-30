import React from "react";
import { Outlet } from "react-router-dom";
import GlobalNav from "../components/GlobalNav";

function MainLayout() {
  return (
    <div>
      <GlobalNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
