"use client";

import AnalyticsIcon from "@mui/icons-material/Analytics";
import { useEffect, useState } from "react";
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import DateRangeIcon from '@mui/icons-material/DateRange';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SettingsIcon from '@mui/icons-material/Settings';

function Aside() {
  return (
    <div className="lg:w-[300px] h-screen lg:bg-gray-300 lg:h-screen">
      <h1 className="lg:text-center lg:pt-10 text-xl font-bold">Admin</h1>
      <ul className="pt-10 space-y-2">
        <li className="hover:bg-white hover:text-black p-1 lg:flex text-white bg-gray-900 w-[110px] rounded-lg place-items-center text-sm font-sm m-auto">
          <AnalyticsIcon />
          Dashboard
        </li>
        <li className="hover:bg-black hover:text-white p-1 lg:flex text-black w-[110px] rounded-lg place-items-center text-sm font-sm m-auto">
          <OnlinePredictionIcon />
          Signals
        </li>
        <li className="hover:bg-black hover:text-white p-1 lg:flex text-black  w-[110px] rounded-lg place-items-center text-sm font-sm m-auto">
          <DateRangeIcon />
          Calender
        </li>
        <li className="hover:bg-black hover:text-white p-1 lg:flex text-black w-[110px] rounded-lg place-items-center text-sm font-sm m-auto">
          <AnalyticsIcon />
          Refferals
        </li>
        <li className="hover:bg-black hover:text-white p-1 lg:flex text-black  w-[110px] rounded-lg place-items-center text-sm font-sm m-auto">
          <QuestionAnswerIcon />
          Chat
        </li>
        <li className="hover:bg-black hover:text-white p-1 lg:flex text-black w-[110px] rounded-lg place-items-center text-sm font-sm m-auto">
          <SettingsIcon />
          Settings
        </li>
       
      </ul>
    </div>
  );
}

export default Aside;
