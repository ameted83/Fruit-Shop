import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card"
import { useFruitAPI } from "../hooks/useFruitAPI";

const Store = () => {
  return (
    <div>
      <Navbar />
      <Card />
      <Footer />
    </div>
  );
};

export default Store;
