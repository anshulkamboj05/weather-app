"use client"

import React, {useState} from "react";
import { IoSearchCircleSharp } from "react-icons/io5";

const Input = ({ setLocation, fetchData }) => {
  return (
    <div className=" items-center justify-between ">
      <form onSubmit={fetchData} className="flex border  rounded-xl p-2">
        <input
          className="h-10  bg-inherit placeholder:text-white  outline-none"
          type="text"
          placeholder="Enter city"
          onChange={(e) => setLocation(e.target.value)}
        />
        <IoSearchCircleSharp className="text-4xl" />
      </form>
    </div>
  );
};

export default Input;
