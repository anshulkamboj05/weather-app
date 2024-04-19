"use client";

import React, { useState } from "react";
import Input from "./components/search";
import Data from "./components/weather";

export default function Page() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  console.log("apiKey: ", apiKey);

  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=yes&alerts=yes`;

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(url);
      console.log("response: ", response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
      
      setLocation("");
    } catch (error) {
      console.error("Error:", error);
      setData({});
    }
  };
  return (
    <main className=" bg-cover h-screen w-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute z-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.pixabay.com/video/2023/04/11/158384-816637349_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex justify-center items-center">
        <div className="p-5 ">
          <Input fetchData={fetchData} setLocation={setLocation} />
        </div>
      </div>
      <div className="relative z-10 flex justify-center items-center w-full">
        <div className="">{data.location && <Data information={data} />}</div>
      </div>
    </main>
  );
}
