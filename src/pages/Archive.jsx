import React from 'react'
import { RiInboxArchiveLine } from "react-icons/ri";

export const Archive = () => {
  return (
    <div className="w-full mx-auto shadow-md p-8 min-h-screen flex flex-col items-center justify-center gap-4">
  <RiInboxArchiveLine className=" w-[180px] h-[180px] text-[#D9D9D9]" />
  <div className="text-center">
    <h1 className="font-bold text-[28px] text-[#D9D9D9]">No Archive Task</h1>
    <p className="text-[18px] dark:text-[#D9D9D9]">You haven’t archived any tasks yet, start archiving your task!</p>
  </div>
</div>

  )
}
export default Archive;
