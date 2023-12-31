import React from "react";
import Navbar from "../components/Headers/Navbar/Navbar";

function HomeLayout({ children }) {
  return (
    <div
      className="flex flex-col w-full min-h-screen bg-gray-400 h-fit"
      style={{ fontFamily: "cursive" }}
    >
      <Navbar />
      {children}
    </div>
  );
}

export default HomeLayout;
