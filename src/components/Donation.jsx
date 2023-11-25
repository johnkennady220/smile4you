import React from "react";
import logo from "../assets/img/logo.png";
const Donation = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-backgroundColor  ">
      <img src={logo} alt="logo" className="logo w-62 h-52   " />
      <div className=" w-full lg:-9 space-y-5">
        <h1 className=" text-black font-semibold   text-5xl text-center">
          Donation
        </h1>
        <p className=" text-black text-center font-extrabold text-2xl">
          <h2>Account name : Smile 4you Foundation</h2>
          <h2>Account number : 60453875902</h2>
          <h2>Ifsc code : MAHB0000354</h2>
        </p>
      </div>
    </div>
  );
};

export default Donation;
