import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router';


export default function WorkspaceCard({ workspace, userId }) {
    console.log('userId', userId)
    const navigate = useNavigate()
    const handleNavigate = ()=> {
        navigate(`/kanban/${workspace.id}`,{state: userId})
    }

    const formatDate = (dateString) => {
        const cleanedDate = dateString.replace(/(st|nd|rd|th)/g, ""); 
        const date = new Date(cleanedDate);

        if (isNaN(date)) {
            return "Invalid Date";
        }

        const options = { month: "short", day: "numeric", year: "numeric" };
        return date.toLocaleDateString("en-US", options);
    };

    return (
        <section onClick={handleNavigate} className={` border border-gray-300 dark:bg-gray-800 rounded-lg text-white h-full`}>
            <div className={`rounded-t-lg flex flex-row items-center justify-center bg-primary`}>
                <h2 className='font-semibold line-clamp-1 text-center text-white p-7 text-txt20'>{workspace.title}</h2>
            
                </div>

                <div className="flex flex-col justify-between gap-6  px-2 pt-5 dark:bg-gray-800  bg-white  rounded-b-lg">
                    <p className="font-normal px-3 text-txt18 line-clamp-2 dark:text-white  text-primary">{workspace.description}</p>
                    
                    <div className="flex justify-end mb-1  ">
                        <p className="px-2 py-1 rounded-md text-gray-700 dark:text-white text-txt12 opacity-70"><FontAwesomeIcon icon={faCalendar} /> { formatDate(workspace.created_at)}</p>
                    </div>
            </div>
        </section>
    );
}
