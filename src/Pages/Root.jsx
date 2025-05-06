import React from "react";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "./../Components/Navbar";

function Root() {
  //   const companies = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Root;
