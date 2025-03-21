import React from "react";
import { RiInboxArchiveLine } from "react-icons/ri";
import { useGetTodoTaskQuery } from "../features/addTaskApi";
import { useLocation, Link, useNavigate } from "react-router-dom"; // Fixed Link import
import {
  FaArchive,
  FaCheckCircle,
  FaExclamationCircle,
  FaArrowLeft,
} from "react-icons/fa";

export const Archive = ({ workspace_id }) => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("Location :>> ", location);

  const { data } = useGetTodoTaskQuery();

  const filterArchive = (location?.state.tasks || []).filter(
    (c) => !c.is_completed && c.is_archived && !c.is_important && !c.is_deleted
  );

  return (
    <section className="flex flex-col min-h-screen p-4 bg-gray-100 -full i dark:bg-gray-900 text-primary">
      {/* 🔙 Back Button */}
      <Link to={`/kanban/${location?.state.workspaceId}`} className="w-full max-w-4xl">
        <button className="flex items-center gap-2 px-4 py-2 mb-4 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600">
          <FaArrowLeft />
          <span>Back</span>
        </button>
      </Link>
      {/* Archived Task List */}
      {filterArchive.length > 0 ? (
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filterArchive.map((task) => (
            <Link
              to={`/todolistdetail/${task.id}`}
              key={task.id}
              className="w-full p-4 transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg"
            >
              {/* Title */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {task.title}
                </h3>
                <div className="flex gap-2">
                  {task.is_important && (
                    <FaExclamationCircle className="text-yellow-500" />
                  )}
                  {task.is_completed && (
                    <FaCheckCircle className="text-green-500" />
                  )}
                  {task.is_archived && <FaArchive className="text-gray-500" />}
                </div>
              </div>

              {/* Note */}
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {task.note}
              </p>

              {/* Due Date */}
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">Due Date:</span>{" "}
                {new Date(task.due_date).toLocaleDateString()}
              </p>

              {/* Status Tags */}
              <div className="flex gap-2 mt-4">
                {task.is_completed ? (
                  <span className="px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">
                    Completed
                  </span>
                ) : (
                  <span className="px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">
                    Pending
                  </span>
                )}
                {task.is_archived && (
                  <span className="px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-300 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Archived
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full min-h-screen gap-4 p-8 mx-auto">
          <RiInboxArchiveLine className="w-[180px] h-[180px] text-[#D9D9D9]" />
          <div className="text-center">
            <h1 className="font-bold text-[28px] text-[#D9D9D9]">
              No Archive Task
            </h1>
            <p className="text-[18px] dark:text-gray-400">
              You haven’t archived any tasks yet, start archiving your task!
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
