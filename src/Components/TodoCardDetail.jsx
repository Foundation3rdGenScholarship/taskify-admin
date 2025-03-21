import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { format } from "date-fns";
import {
  useDeleteTaskMutation,
  useGetDetailTaskQuery,
} from "../features/addTaskApi";
import { useGetMeQuery } from "../features/auth/authApiSlice";
import { useGetCategoriesQuery } from "../features/categoriesApi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router";
import CheckList from "../pages/CheckoutList";
import CheckListSumit from "../pages/checkListSubmit";
import { FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";

export default function TodoCardDetail() {
  const navigate = useNavigate(); // Use the navigate hook to navigate to other pages
  const { id } = useParams(); // Get task ID from URL
  const { data: task1, error, isLoading } = useGetDetailTaskQuery(id);
  const { data: carteg } = useGetCategoriesQuery({ limit: 20, offset: 0 });

  console.log("task1 :>> ", task1);

  const [Delete] = useDeleteTaskMutation();

  const { data: me } = useGetMeQuery();
  const handleOnDelete = async () => {
    try {
      await Delete(id); // Wait for the delete mutation to complete
      console.log("Task deleted");

      // Navigate to the specific task page after deletion
      console.log(`/kanban/${task1[0].workspace_id}`);
      toast.success("Task deleted successfully");
      navigate(`/kanban/${task1[0].workspace_id}`);
      window.location.reload(); // Navigate to a general todo page or a specific route
    } catch (error) {
      toast.success("Task failed to delete...!");
      console.error("Error deleting task:", error);
    }
  };

  console.log("id from params:", id);
  console.log("task :>> ", task1);
  console.log("me :>> ", me);
  console.log(carteg);

  if (isLoading) return <p className="text-center">Loading task details...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">
        Error loading task: {error.message}
      </p>
    );
  if (!task1) return <p className="text-center">Task not found.</p>;
  const task = task1[0];

  const getCategoryIndex = carteg?.findIndex(
    (item) => item.id === task?.category_id
  );
  const categoryTitle = carteg?.[getCategoryIndex]?.title || "Unknown";

  console.log(getCategoryIndex);

  ///////////////////
  const items = [
    { title: "Title 1", is_checked: false, position: 1 },
    { title: "Title 2", is_checked: true, position: 2 },
    { title: "Title 3", is_checked: false, position: 3 },
  ];
  ////////////////////////

  return (
    <>
      {" "}
      <Link
        to={`/kanban/${task.workspace_id}`}
        className="flex items-center w-24 gap-2 px-3 py-2 m-5 text-white transition-all duration-500 rounded-lg gap bg-primary hover:bg-blue-600 "
        // to={`/kanban/${location?.state.workspaceId}`}
      >
        <FaArrowLeft />
        <span>Back</span>
      </Link>
      <section className="grid grid-cols-1 m-2 bg-white sm:grid-cols-2 dark:bg-gray-800 dark:text-white">
        <div>
          <div className="w-full h-auto p-3 px-2 mb-10 mr-2 space-y-4 rounded-lg shadow-md mx-15 lg:w-full md:block md:w-96 dark:bg-gray-800 dark:text-white">
            {/* Header */}
            <div className="flex items-center justify-center leading-tight">
              <NavLink to="/todo" className="text-[30px] md:hidden">
                <IoIosArrowBack />
              </NavLink>
              <div
                className={`flex rounded-full w-[300px] text-primary md:w-[400px] items-center lg:my-2 mx-auto h-14 text-[28px] align-middle justify-center font-bold ${
                  task?.is_important ? "bg-yellow-300" : "bg-gray-300"
                } dark:text-white`}
              >
                {task?.title || "Untitled Task"}
              </div>
            </div>

            {/* Description Section */}
            <div className="w-auto p-4 space-y-8 border-2 border-gray-100 rounded-xl dark:text-white">
              <div>Description:</div>
              <p>{task?.note || "No description available."}</p>
            </div>

            {/* Date and Category Section */}
            <div className="w-auto p-4 space-y-8 border-2 border-gray-100 rounded-xl dark:text-white">
              <div className="flex justify-between">
                <div>Created Date: </div>
                <div>
                  {task?.created_at
                    ? format(new Date(task?.created_at), "do MMMM, yyyy")
                    : "N/A"}
                </div>
              </div>
              <div className="flex justify-between">
                <div>Start Date: </div>
                <div>
                  {task?.start_date
                    ? format(new Date(task?.start_date), "do MMMM, yyyy")
                    : "N/A"}
                </div>
              </div>
              <div className="flex justify-between">
                <div>Deadline: </div>
                <div className="text-accent">
                  {task?.due_date
                    ? format(new Date(task.due_date), "do MMMM, yyyy")
                    : "N/A"}
                </div>
              </div>
              <div className="flex justify-between">
                <div>Reminder: </div>
                <div>
                  {task?.reminder_date
                    ? format(new Date(task.reminder_date), "do MMMM, yyyy")
                    : "N/A"}
                </div>
              </div>
              <div className="flex justify-between">
                <div>Category: </div>
                <div className="text-accent">
                  {categoryTitle || "Uncategorized"}
                </div>
              </div>
            </div>

            {/* Task Status */}
            <div className="w-auto p-4 space-y-8 border-2 border-gray-100 rounded-xl dark:text-white">
              <div className="font-bold text-[16px]">Task Status</div>
              <div className="flex space-x-4">
                <span
                  className={`px-3 py-1 rounded ${
                    task?.is_completed ? "bg-green-500" : "bg-red-500"
                  } text-white`}
                >
                  {task?.is_completed ? "Completed" : "In Progress"}
                </span>
                {task?.is_archived && (
                  <span className="px-3 py-1 text-white bg-gray-500 rounded">
                    Archived
                  </span>
                )}
                {task?.is_deleted && (
                  <span className="px-3 py-1 text-white bg-black rounded">
                    Deleted
                  </span>
                )}
              </div>
            </div>

            {/* Assigned to Section */}
            {/* <div className="flex items-center justify-between w-auto p-4 border-2 border-gray-100 rounded-xl dark:text-white">
              <div>Assigned to: </div>
              <div>{task?.user_id || "Unknown"}</div>
            </div> */}

            {/* Buttons Section */}
            <div className="flex justify-end pb-3 mr-8 space-x-4">
              <button
                onClick={handleOnDelete}
                className="px-6 py-3 font-bold border border-gray-400 rounded-md text-primary dark:text-white"
              >
                Delete Task
              </button>
              <Link
                state={{ task }}
                to={`/edittask/${task?.id}`}
                className="px-6 py-3 font-bold text-white border rounded-md bg-primary"
              >
                Edit Task
              </Link>
            </div>
          </div>
        </div>
        <div>
          <CheckList taskId={task.id} taskPosition={task.position} />
          <section>
            <CheckListSumit taskPosition={task.position} />
          </section>
        </div>
      </section>
    </>
  );
}
