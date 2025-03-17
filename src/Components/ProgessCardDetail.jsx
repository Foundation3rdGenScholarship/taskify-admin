import CheckBoxinProgess from "./CheckBoxinProgess.jsx";
import {NavLink} from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import EditTaskPupUp from "./EditTaskPupUp.jsx";
import { getAceAccessToken } from "../lib/secureLocalStorage.js";
import { useGetMeQuery } from "../features/auth/authApiSlice.js";

export default function  ProgessCardDetail() {
    const token = getAceAccessToken();
    let email = "Houy@gmail.com";
    const [isEditOpen, setIsEditOpen] = useState(false);

    const {data: userData } = useGetMeQuery()
    console.log('userData', userData)
    return (
        <div className={"mt-10"}>
            <div className={"mx-15 mr-2 px-2 bg-white h-auto space-y-4 mb-10 p-3 lg:w-full md:block md:w-96 dark:bg-gray-700"}>
                <div className={" leading-tight flex items-center justify-center"}>
                    <NavLink to="/progress" className={" text-[30px] md:hidden "} >
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
                    <div>{email}</div>
                </div>
                <div className={"flex align-items-center justify-end space-x-4 pb-3 mr-8 items-center "}>
                    <button className={"px-3 dark:text-white rounded-md border h-[43px] w-[132px] border-gray-400 font-bold text-gray-700"}>
                        Delete Task
                    </button>
                    <button 
                onClick={() => setIsEditOpen(true)}
                className={"px-3 rounded-md border h-[43px] w-[132px] bg-primary text-background  font-bold"}>
                        Edit Task
                    </button>
                </div>
            </div>
        <EditTaskPupUp
        token={token}
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        />
        </div>
    )
}