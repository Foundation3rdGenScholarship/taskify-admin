import SidebarSM from "../Components/SidebarSM.jsx";
import React, {useState} from "react";
import Listmember from "../Components/Listmember.jsx";
import { Search } from "lucide-react"
import Searchmember from "../Components/Searchmember.jsx";

export default function MemberPage (){
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {setIsOpen(!isOpen);}
    const closeMenu = () => {setIsOpen(false);}
    return (
        <>
            <div className={"w-full p-8 bg-background"}>
                    <div className={"space-y-2 my-4"}>
                    <p className={"text-primary text-[24px] font-bold"}>All Members</p>
                    <p className={"text-txt18 dark:text-white"}>Workspace members can view and join all Workspace visible boards and create new boards in the Workspace.</p>
                    </div>
                    <Searchmember/>
                    <hr className={"border-dashed border-amber-400 mt-2 w-full"} />
                    <div className={"overflow-hidden h-72 xl:h-[650px] overflow-y-auto"}>
                    <Listmember/>
                    </div>
                </div>


        </>
    )
}