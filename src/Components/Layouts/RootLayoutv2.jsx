
import {Outlet} from "react-router";
import Sidebar from "../Sidebar.jsx";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";

export default function RootLayoutv2(){
    return (
       <div className="h-auto">
           <Navbar/>
           <div className="flex-row overflow-y-visible md:flex">
               <Sidebar/>
               <div className="w-full md:w-4/5">
                 <Outlet />
               </div>
           </div>

</div>
    )
}