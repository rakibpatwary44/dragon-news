import React from "react";
import Header from "../Pages/Header";
import LatestNews from "../Componants/MainLayout/LatestNews";
import Navbar from "../Componants/Navbar";
import LeftSide from "../Componants/MainLayout/LeftSide";
import { Outlet } from "react-router";
import RightSide from "../Componants/MainLayout/RightSide";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="  w-11/12 mx-auto my-3  grid grid-cols-12 gap-5 ">
        <aside className=" col-span-3">
          <LeftSide></LeftSide>
        </aside>
        <section className="main col-span-6 ">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightSide></RightSide>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
