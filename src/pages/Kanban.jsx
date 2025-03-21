import { useEffect, useState } from "react";
import Column from "./Column";
import AddMemberForm from "../Components/MemberCard";
import AddNewTaskPopUp from "../Components/AddNewTaskPopUp";
import { data, useLocation, useNavigate, useParams } from "react-router";
import { useGetWorkspacesQuery } from "../features/workspaceApi";
import { getAceAccessToken } from "../lib/secureLocalStorage";
import { useGetMeQuery } from "../features/auth/authApiSlice";
import { useGetTasksQuery } from "../features/addTaskApi";
import { IoMdPersonAdd } from "react-icons/io";
import { MdAssignmentAdd } from "react-icons/md";
import { useGetTodoTaskQuery } from "../features/addTaskApi";
import { FiPlus } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";

import { Link } from "react-router";
import DeleteWorkspaceButton from "./deleteWorkspace";

function Kanban() {
  const navigate = useNavigate();
  // const location = useLocation();
  // console.log("location", location);
  const { id } = useParams();
  console.log("workspace id in params", id);

  const [cards, setCards] = useState([]);
  const [userId, setUserId] = useState("");
  const [todoData, setTodoData] = useState();
  const [checkTodoData, setCheckTodoData] = useState({});
  console.log("todoData :", todoData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [active, setActive] = useState([]);
  const [isModalOp, setModalOpen] = useState(false);

  const token = getAceAccessToken();
  console.log("before get data :", token);
  const { data: userData } = useGetMeQuery();
  // console.log("my data in kanban : ", data);
  const { data: tododata } = useGetTodoTaskQuery({
    userId,
    limit: 40,
    offset: 0,
    workspace_id: id,
  });
  console.log("userId", userId);
  // console.log('to do data', tododata);
  useEffect(() => {
    if (userData?.id) {
      setUserId(userData?.id);
      setTodoData(tododata);
    }
  }, [userData, tododata]);

  // setCheckTodoData(
  //   todoData.filter((e) => {
  //     console.log("setCheckTodoData :",e);
  //   })
  // );
  const handleArchive = () => {
    navigate("/archive", { state: { tasks: tododata, workspaceId: id } });
  };
  const filterTodoTask = (todoData || []).filter(
    (c) =>
      c.is_completed === false &&
      c.is_archived === false &&
      c.is_important === false &&
      c.is_deleted === false
  );
  console.log("filterTodaTask", filterTodoTask);
  console.log("My user ID:", userId);
  console.log("filterTodoTask", filterTodoTask);

  const filterOnProgressTask = (todoData || []).filter(
    (c) => c.is_important === true
  );
  console.log("filterTodaTask", filterOnProgressTask);
  console.log("My user ID:", userId);
  console.log("filterOnProgressTask ", filterOnProgressTask);

  const filterCompletedTask = (todoData || []).filter(
    (c) =>
      c.is_completed === true &&
      c.is_archived === false &&
      c.is_important === false &&
      c.is_deleted === false
  );
  console.log("filterTodaTask", filterCompletedTask);
  console.log("My user ID:", userId);
  console.log("filterCompletedTask :", filterCompletedTask);

  console.log("on workspace get");
  const { data: workspaceList } = useGetWorkspacesQuery(location?.state);

  const workspace = workspaceList?.find((w) => w.id === id);
  // const { data: tasks, error, isLoading } = useGetTasksQuery();
  // console.log("API Response1:", { tasks, error, isLoading });
  // console.log('tasks', tasks)
  console.log("Fetching tasks...");

  // console.log("Found workspace:", workspace);
  // console.log("API Response:", workspace);

  console.log("workspace", workspace);
  console.log("cards :", cards);

  const {
    data: taskdata,
    error,
    isLoading,
  } = useGetTasksQuery({ limit: 50, offset: 0 });

  useEffect(() => {
    console.log("API Response:", { taskdata, error, isLoading });
    setCards(taskdata);
  }, [taskdata, error, isLoading]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  console.log("hello userId", userId);
  return (
    <>
      <div className="sticky z-10 flex flex-col md:flex-row justify-between gap-4 mb-6 bg-white top-[86px] dark:bg-gray-800 p-4">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 px-3 py-2 text-white transition-all duration-500 rounded-lg bg-primary hover:bg-blue-600"
        >
          <FaArrowLeft />
          <span>Back</span>
        </Link>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:flex md:flex-wrap md:justify-end md:gap-4">
          <button
            onClick={handleArchive}
            className="flex items-center px-3 py-2 text-white transition-all duration-500 rounded-lg bg-primary hover:bg-blue-600"
          >
            <span className="mr-2">
              <MdAssignmentAdd />
            </span>
            Archive
          </button>

          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center px-3 py-2 text-white transition-all duration-500 rounded-lg bg-primary hover:bg-blue-600"
          >
            <span className="mr-2">
              <MdAssignmentAdd />
            </span>
            Add Task
          </button>

          <button
            onClick={openModal}
            className="flex items-center px-3 py-2 text-white transition-all duration-500 rounded-lg bg-primary hover:bg-blue-600"
          >
            <span className="mr-2">
              <IoMdPersonAdd />
            </span>
            Add Member
          </button>

          <DeleteWorkspaceButton workspace_id={id} />
        </div>
      </div>

      <div className="w-full sticky top-0 mx-auto shadow-md p-8 min-h-screen font-roboto bg-background dark:bg-[#121321]">
        {/* Header */}

        {/* Board Columns */}
        <div className="flex justify-between gap-2 overflow-x-auto">
          <Link state={{ filterTodoTask }} className="w-full">
            <Column
              workspace_id={id}
              title="To Do"
              column="todo"
              headingColor="text-yellow-200"
              cards={filterTodoTask}
              setCards={setCards}
            />
          </Link>
          <Link className="w-full" state={{ filterOnProgressTask }}>
            <Column
              workspace_id={id}
              title="On Progress"
              column="on-progress"
              headingColor="text-yellow-200"
              cards={filterOnProgressTask}
              setCards={setCards}
            />
          </Link>
          <Link className="w-full" state={{ filterCompletedTask }}>
            <Column
              workspace_id={id}
              title="Completed"
              column="completed"
              headingColor="text-yellow-200"
              cards={filterCompletedTask}
              setCards={setCards}
            />
          </Link>
        </div>

        {/* Add Member Modal */}
      </div>
      <AddMemberForm
        isOpen={isModalOpen}
        workspace_id={id}
        closeModal={closeModal}
      />
      {/* Add task Modal */}
      <AddNewTaskPopUp isOp={isModalOp} onCl={() => setModalOpen(false)} />
    </>
  );
}

export default Kanban;
