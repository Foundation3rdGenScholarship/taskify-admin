import {NavLink} from "react-router";
import {ChevronRight} from "lucide-react";

export default  function NavbarForworkShop ({title,link}){
    return (
        <div className={"md:flex align-center align-middle items-center hidden  "}>
            <nav className={"flex space-x-1 items-center   lg:mb-8  md:text-[18px] lg:text-[22px]  font-bold  "}>
                <NavLink to="/" className={"bg-primary transition-all duration-500 text-white  p-2 rounded-2xl hover:bg-subaccent hover:text-white"}>Final Project of Foundation G3-Taskify</NavLink>
                <ChevronRight strokeWidth={2} width={15} height={15} fontSize="xl" />
                <NavLink to={link} className={"bg-primary transition-all duration-500 text-white  p-2 rounded-2xl hover:bg-subaccent hover:text-white"}>{title}</NavLink>
            </nav>
        </div>
    )
}