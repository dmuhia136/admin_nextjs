"use client";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Image from "next/image";
import DataSets from '../components/packets/DataSets'

function MainBoard() {
  var age;

  return (
    <div className='pl-10 w-screen bg-white h-screen'>
    <div className='flex justify-between '>
    <div>
       <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Today's plan
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          //   onChange={}
          label="Today's plan"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <p className='pt-1 text-center text-xs text-gray-400'>Match 27th 2023</p>
     
    </div>
  <div className='pt-5 grid grid-cols-2 gap-10 pr-10 text-center'>
  <div className=' rounded-full border-2 h-7 w-7 text-xs text-center border-gray-600'><NotificationsIcon /></div>
    
    <div className='flex gap-4'>
  
         <Image
      src="/dennis.png"
      width={40}
      height={20}
      className='rounded-full'
      alt="Dennis Njoroge Muhia"
    />
        <div>
          <p className='text-md font-bold text-gray-700'>Dennis Muhia</p>
          <p className='text-xs text-gray-500 '>CEO TechGen</p>
        </div>
    </div>
  </div>

    </div>
  <div className='pt-10 flex space-x-5'>
    <DataSets/>
    <DataSets/>
    <DataSets/>
  </div>
    </div>
  );
}

export default MainBoard;
