import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../features/counter/counterSlic";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

export const Pagination = ({currentPage,totalPages}) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count); // Ensure correct state
    console.log('count :>> ', count);

  return (
    <div className="flex items-center justify-center mt-6 space-x-3">
      {/* Previous Button */}
      <button
        onClick={() => {
          dispatch(decrease());
          // Ensure page doesn't go below 1
        }}
        disabled={currentPage === 1}
        className={`px-4 py-2 text-white font-semibold flex items-center gap-2 rounded-lg transition ${
          currentPage === 1
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600 shadow-lg"
        }`}
      >
        <FaRegArrowAltCircleLeft/> Prev
      </button>

      {/* Page Number Display */}
      <span className="px-4 py-2 text-lg font-bold bg-gray-200 rounded-lg shadow">
        Page {count} 
      </span>

      {/* Next Button */}
      <button
        onClick={() => {
          
          dispatch(increase());
          // Ensure it doesn't exceed total pages
        }}
        className="flex items-center gap-2 px-4 py-2 font-semibold text-white transition rounded-lg shadow-lg bg-primary hover:bg-blue-600"
      >
        Next <FaRegArrowAltCircleRight/>
      </button>
    </div>
  );
};

