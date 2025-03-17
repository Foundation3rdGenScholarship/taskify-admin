
import NavbarForworkShop from "../Components/NavbarForworkShop.jsx";
import React, {useState} from "react";
import TodoCardList from "../Components/TodoCardList.jsx";
import TodoCardDetail from "../Components/TodoCardDetail.jsx";

export default function ToDoPage() {
    const [progress, setProgress] = useState(false)
    return (
            <div className={"w-auto"}>
                <NavbarForworkShop title={"To Do List"} link={"/todo"}/>
                <div className={"flex"}>
                    <div onClick={() => {setProgress(!progress)}}>
                        <TodoCardList/>
                    </div>
                    <div className={"lg:w-[780px] w-96 lg:mt-0 md:mt-16 overscroll-none hidden md:block md:h-[600px] lg:h-[500px] 2xl:h-auto bg-gray-50 dark:bg-gray-700  overflow-hidden rounded-2xl overflow-y-scroll scroll-smooth "}>
                        {progress &&(<TodoCardDetail/>)}
                    </div>


                </div>
            </div>

    )
}

