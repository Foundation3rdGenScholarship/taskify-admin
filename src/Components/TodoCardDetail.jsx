// import CheckBoxinProgess from "./CheckBoxinProgess.jsx";
// import {NavLink} from "react-router";
// import { IoIosArrowBack } from "react-icons/io";

// export default function  TodoCardDetail() {
//     let email = "Houy@gmail.com";
//     return (
//         <div className={"mt-10"}>
//             <div className={"mx-15 mr-2 px-2 bg-white h-auto space-y-4 mb-10 p-3 lg:w-full md:block md:w-96  dark:bg-gray-700"}>
//                 <div className={" leading-tight flex items-center justify-center"}>
//                     <NavLink to="/todo" className={" text-[30px] md:hidden "} >
//                         <IoIosArrowBack />
//                     </NavLink>
//                     <div className={" flex bg-gray-300 dark:text-white rounded-full w-[300px] md:w-[400px] items-center lg:my-2 mx-auto h-14 text-[28px]  align-middle justify-center font-bold"}>
//                         Homepage UX/UI
//                     </div></div>
//                 <div className={"rounded-xl  w-auto border-2 dark:text-white border-gray-100 p-4 space-y-8"}>
//                     <div>Description:</div>
//                     <p >Create with place holder and responsive with all devices. Use the Flowbite component  and make every components are consistency.</p>
//                 </div>
//                 <div className={"rounded-xl  w-auto border-2 dark:text-white border-gray-100 p-4 space-y-8"}>
//                     <div className={"flex align-items-center justify-between"}>
//                         <div>Created Date: </div>
//                         <div>30th, January, 2025</div>
//                     </div>
//                     <div className={"flex align-items-center justify-between"}>
//                         <div>Deadline : </div>
//                         <div className={"text-accent"}>10th, March, 2025</div>
//                     </div>
//                     <div className={"flex align-items-center justify-between"}>
//                         <div>Category : </div>
//                         <div className={"text-accent"}>Design</div>
//                     </div>
//                 </div>
//                 <div className={"rounded-xl  dark:text-white w-auto border-2 border-gray-100 p-4 space-y-8"}>
//                     <div className="font-bold text-[16px]">Creating Component</div>
//                     <CheckBoxinProgess/>
//                 </div>
//                 <div className={"rounded-xl  w-auto border-2 border-gray-100 p-4 flex items-center justify-between align-middle dark:text-white"}>
//                     <div>Assigned to: </div>
//                     <div>{email}</div>
//                 </div>
//                 <div className={"flex align-items-center justify-end space-x-4 pb-3 mr-8 items-center "}>
//                     <button className={"px-3 dark:text-white rounded-md border h-[43px] w-[132px] border-gray-400 font-bold text-gray-700"}>
//                         Delete Task
//                     </button>
//                     <button className={"px-3 rounded-md border h-[43px] w-[132px] bg-primary text-background  font-bold"}>
//                         Edit Task
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }
import React, { useState } from "react";
import CheckBoxinProgess from "./CheckBoxinProgess.jsx";
import EditTaskPopup from "../Components/EditTaskPupUp.jsx"; // Import modal component
import { NavLink, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useGetMeQuery } from "../features/auth/authApiSlice.js";
import { getAceAccessToken } from "../lib/secureLocalStorage.js";
import { useEffect } from "react";
import { useGetTodoTaskQuery } from "../features/addTaskApi.js";

function CardDetail({item}) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    let email = "Houy@gmail.com";
    const token = getAceAccessToken();
        const {data: userData } = useGetMeQuery();
        console.log('userData', userData);
        
        // useEffect(() => {
        //     console.log("Selected Task ID:", taskId);
        //     // Fetch task details using taskId if needed
        // }, [taskId])
        const id = useParams();
        console.log('id', id);
        const userId = userData.id;
        const { data: allTododata } = useGetTodoTaskQuery({
            userId,
            limit: 40,
            offset: 0,
          }); 
    console.log('allTodoTask', allTododata);

    //const todoTask = (allTododata || []).filter((t) => t.id === id)
   // console.log('todoTask', todoTask)
    return (
        <>
        <div className={"mt-10"}>
            <div className={"mx-15 mr-2 px-2 bg-white h-auto space-y-4 mb-10 p-3 lg:w-full md:block md:w-96  dark:bg-gray-700"}>
                <div className={" leading-tight flex items-center justify-center"}>
                    <NavLink to="/todo" className={" text-[30px] md:hidden "} >
                        <IoIosArrowBack />
                    </NavLink>
                    <div className={" flex bg-gray-300 dark:text-white rounded-full w-[300px] md:w-[400px] items-center lg:my-2 mx-auto h-14 text-[28px]  align-middle justify-center font-bold"}>
                        Homepage UX/UI
                    </div></div>
                <div className={"rounded-xl  w-auto border-2 dark:text-white border-gray-100 p-4 space-y-8"}>
                    <div>Description:</div>
                    <p >Create with place holder and responsive with all devices. Use the Flowbite component  and make every components are consistency.</p>
                </div>
                <div className={"rounded-xl  w-auto border-2 dark:text-white border-gray-100 p-4 space-y-8"}>
                    <div className={"flex align-items-center justify-between"}>
                        <div>Created Date: </div>
                        <div>30th, January, 2025</div>
                    </div>
                    <div className={"flex align-items-center justify-between"}>
                        <div>Deadline : </div>
                        <div className={"text-accent"}>10th, March, 2025</div>
                    </div>
                    <div className={"flex align-items-center justify-between"}>
                        <div>Category : </div>
                        <div className={"text-accent"}>Design</div>
                    </div>
                </div>
                <div className={"rounded-xl  dark:text-white w-auto border-2 border-gray-100 p-4 space-y-8"}>
                    <div className="font-bold text-[16px]">Creating Component</div>
                    <CheckBoxinProgess/>
                </div>
                <div className={"rounded-xl  w-auto border-2 border-gray-100 p-4 flex items-center justify-between align-middle dark:text-white"}>
                    <div>Assigned to: </div>
                    <div>{item.email}</div>
                </div>
                <div className={"flex align-items-center justify-end space-x-4 pb-3 mr-8 items-center "}>
                    <button
                    onClick={()=> setIsEditModalOpen(false)}
                    className={"px-3 dark:text-white rounded-md border h-[43px] w-[132px] border-gray-400 font-bold text-gray-700"}>
                        Delete Task
                    </button>
                    <button 
                    onClick={()=> setIsEditModalOpen(true)}
                    className={"px-3 rounded-md border h-[43px] w-[132px] bg-primary text-background  font-bold"}>
                        Edit Task
                    </button>
                </div>
            </div>
        </div>

     {/* Modal Popup */}
     <EditTaskPopup 
     isOpen={isEditModalOpen} 
     onClose={() => setIsEditModalOpen(false)} 
   />
   </>
  )
}
export default function TodoCardDetail (){
    const DB =[
        {
            id:1,
            // email:Houy
        }
    ]
    return (
        <section>
            {DB.map((item)=>(
                <CardDetail key={item.id} item={item}></CardDetail>
            ))}
        </section>
    )
}
