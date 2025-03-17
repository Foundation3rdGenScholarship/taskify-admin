import { useEffect, useState } from "react";
import Column from "./Column";
import AddMemberForm from "../Components/MemberCard";
import AddNewTaskPopUp from "../Components/AddNewTaskPopUp";
import { data, useLocation, useParams } from "react-router";
import { useGetWorkspacesQuery } from "../features/workspaceApi";
import { getAceAccessToken } from "../lib/secureLocalStorage";
import { useGetMeQuery } from "../features/auth/authApiSlice";
import { useGetTasksQuery } from "../features/addTaskApi";
import { IoMdPersonAdd } from "react-icons/io";
import { MdAssignmentAdd } from "react-icons/md";
import { useGetTodoTaskQuery } from "../features/addTaskApi";

import { FiPlus } from "react-icons/fi";

import { Link } from "react-router";

function Kanban() {
  // const location = useLocation();
  // console.log("location", location);
  const [cards, setCards] = useState([]);
  const [userId, setUserId] = useState("");
  const [todoData, setTodoData] = useState();
  const [checkTodoData, setCheckTodoData] = useState({});
  console.log("todoData :", todoData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [active, setActive] = useState([]);
  const [isModalOp, setModalOpen] = useState(false);
  
  const token = getAceAccessToken()
  console.log("before get data :", token)
  const {data: userData} = useGetMeQuery()
  // console.log("my data in kanban : ", data);
  const { data: tododata } = useGetTodoTaskQuery({
    userId,
    limit: 40,
    offset: 0,
  });
  console.log('userId', userId)
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
  const filterTodoTask = (todoData || []).filter((c) => c.is_completed === false && c.is_archived === false);
  console.log('filterTodaTask', filterTodoTask)
  console.log("My user ID:", userId);
  console.log('filterTodoTask', filterTodoTask)

  const { id } = useParams();
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
  } = useGetTasksQuery({ limit: 30, offset: 0 });

  useEffect(() => {
    console.log("API Response:", { taskdata, error, isLoading });
    setCards(taskdata);
  }, [taskdata, error, isLoading]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  

 console.log('hello userId', userId)
  return (
    <div className="font-roboto p-8 bg-background dark:bg-[#121321]">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 mb-6 md:flex-row">
        <div className="p-2 font-bold text-center transition-all duration-500 bg-white rounded-3xl text-txt16 md:text-txt20 hover:bg-primary hover:text-white dark:bg-primary dark:hover:bg-blue-500 text-primary dark:text-white hover:shadow-sm">
          {workspace?.title || "Loading..."}
        </div>

        {/* Add Member Button */}
        <div className="flex space-x-2 md:space-x-4">
            <button
        onClick={() => setModalOpen(true)}
        className="flex items-center px-3 py-2 text-white transition-all duration-500 bg-primary rounded-3xl hover:bg-blue-600 ">
          <span className="mr-2"><MdAssignmentAdd /> </span>Add Task
        </button>
          <button
            onClick={openModal}
            className="flex items-center px-3 py-2 text-white transition-all duration-500 bg-primary rounded-3xl hover:bg-blue-600 "
          >
            <span className="mr-2"><IoMdPersonAdd />

</span>
            Add Member
          </button>
        </div>
      </div>

      {/* Board Columns */}
      <div className="flex justify-between gap-2 overflow-x-auto">
        <Link to={`/todo/${id}`} state={{ filterTodoTask }} className="w-full">
          <Column
            workspace_id={id}
            title="To Do"
            column="todo"
            headingColor="text-yellow-200"
            cards={cards}
            setCards={setCards}
          />
        </Link>
        <Link to="/progress" className="w-full">
          <Column
            title="In Progress"
            column="doing"
            headingColor="text-blue-200"
            cards={[]}
            setCards={setCards}
          />
        </Link>
        <Link to="/completed" className="w-full">
          <Column
            title="Complete"
            column="done"
            headingColor="text-emerald-200"
            cards={[]}
            setCards={setCards}
          />
        </Link>
      </div>

      {/* Add Member Modal */}
      <AddMemberForm isOpen={isModalOpen} closeModal={closeModal} />
      {/* Add task Modal */}
          <AddNewTaskPopUp 
            isOp={isModalOp}
            onCl={() => setModalOpen(false)}
            
            />
    </div>
  );
}

export default Kanban;
