"use client";

import React, { useState } from "react";

const Data = ({ information }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex p-4 w-max-[500px] justify-center justify-between items-center">
        <div className="flex-col p-8">
          <p className="text-3xl font-bold mb-5">
             Weather in {information.location.name}:
          </p>
          <img
            src={information.current.condition.icon}
            alt="weather icon"
            width={140}
          />
          <p className="font-bold text-2xl px-10">
            {information.current.condition.text}
          </p>
        </div>
        <p className="text-6xl ">{information.current.temp_c}°C</p>
      </div>

      <div className="flex flex-col items-center p-5">
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold">7 Days Forecast</p>
          <div className="flex flex items-center p-5">
            {information.forecast.forecastday.map((day, index) => (
              <div key={index} className="flex flex-col items-center px-5">
                <p className="text-xl font-bold">{day.date}</p>
                <img
                  src={day.day.condition.icon}
                  alt="weather icon"
                  width={100}
                  height={100}
                />
                <p className="text-xl font-bold">{day.day.condition.text}</p>
                <p className="text-xl font-bold">{day.day.avgtemp_c}°C</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
