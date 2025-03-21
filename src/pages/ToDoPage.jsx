
import NavbarForworkShop from "../Components/NavbarForworkShop.jsx";
import React, {useState} from "react";
import {TodoCardList} from "../Components/TodoCardList.jsx";
import TodoCardDetail from "../Components/TodoCardDetail.jsx";
import { getAceAccessToken } from "../lib/secureLocalStorage.js";
import { useGetMeQuery } from "../features/auth/authApiSlice.js";
import { useLocation, useParams } from "react-router";

export default function ToDoPage() {
    const [progress, setProgress] = useState(false)
    const [taskId, setTaskId] = useState("")
    // const [userId, setUserId] = useState("");
    // const [todoData, setTodoData] = useState();
    //   const token = getAceAccessToken();
    //         const {data: userData } = useGetMeQuery();
    //         console.log('userData', userData);
    
    
    // useEffect(() => {
    //     if (userData?.id) {
    //       setUserId(userData?.id);
    //       setTodoData(tododata);
    //     }
    //   }, [userData, tododata]);
    //   console.log('userId', userId)
    const {id} = useParams();
    console.log('workspace_id',id)

    const location = useLocation();
    console.log('location', location);

    const allTodoTask = location.state?.filterTodoTask; 
    console.log('allTodoTask', allTodoTask);

    const todoInWorkspaces = (allTodoTask || []).filter((t) => t.workspace_id === id)
    console.log('todoInWorkspaces', todoInWorkspaces)
    
  return (
            <div className={"w-auto p-8 bg-background dark:bg-gray-900"}>
                <NavbarForworkShop title={"To Do List"} link={`/todo/${id}`}/>
                <div className={"flex justify-center md:justify-normal "}>
                <div onClick={() => setProgress(!progress)}>
                    <TodoCardList tasks={todoInWorkspaces} />
                </div>

                    <div className={"lg:w-[780px] w-96 lg:mt-0 md:mt-16 overscroll-none hidden md:block md:h-[600px] lg:h-[570px] 2xl:h-auto bg-gray-50 dark:bg-gray-700  overflow-hidden rounded-2xl overflow-y-scroll scroll-smooth "}>
                        {progress &&(<TodoCardDetail />)}
                    </div>


                </div>
            </div>

    )
}

