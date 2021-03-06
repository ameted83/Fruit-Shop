import React from "react";
import logo from "../assets/logo-main.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="grid gap-4 w-screen h-screen items-center grid-cols-1 md:grid-cols-2 relative ">
        <div className="bg-ananas h-full w-full bg-cover bg-center"></div>
        <div className="absolute inset-x-0 mx-auto bg-logoMain bg-cover bg-center w-[200px] h-[200px] flex justify-center items-center md:block sm:hidden"></div>
        <div className="flex justify-end">
          <div className="fixed top-0">
            <img className="w-[150px]" src={logo} alt="logo" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col font-bold text-xl text-center">
          <div>
            <h1 className="text-amber-700 font-bold">
              LA MIGLIOR FRUTTA A CASA TUA
            </h1>
            <Link to="/home">
              <button className="rounded-lg bg-orange-500 p-2 mt-3 text-white">
                Visita lo store
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-watermelon h-full w-full bg-cover bg-center"></div>
      </div>
    </>
  );
};

export default LandingPage;
