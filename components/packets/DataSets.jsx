"use client";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TimelineIcon from "@mui/icons-material/Timeline";
function DataSets() {
  return (
    <div className="h-[150px] w-[250px] bg-green-100 rounded-xl p-3">
      <div className="flex justify-between">
        <div className=" text-sm border-2 bg-blue-400 rounded-xl text-white border-blue-700 w-10 h-10 text-center">
          <GraphicEqIcon size="10" className="m-auto pt-{10px}" />
        </div>
        <div className="pl-2">
          <p className="text-xs font-bold">Software checking</p>
          <p className="text-xs text-gray-400 ">2.241 assistance</p>
        </div>
        <div className="text-xs">
          <NotificationsIcon />
        </div>
      </div>
      <div className='justify-between flex'>
      <div> <span className="text-sm font-bold">$215,890 </span>
        <span className="text-xs text-green-600 ">+4.5%</span> </div>
       
        <TimelineIcon className='text-blue-500 font-thin'/>{" "}
      </div>
    </div>
  );
}

export default DataSets;
