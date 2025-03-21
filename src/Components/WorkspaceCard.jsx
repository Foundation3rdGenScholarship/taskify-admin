import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router';
import { format } from 'date-fns';

export default function WorkspaceCard({ workspace, userId }) {
    console.log('userId', userId)
    const navigate = useNavigate()
    const handleNavigate = ()=> {
        navigate(`/kanban/${workspace.id}`,{state: userId})
    }

    const formatDate = (isoString) => {
        return format(new Date(isoString), "MMM do, yyyy");
      };

    return (
        <section onClick={handleNavigate } className={` border border-gray-300 dark:bg-gray-800 rounded-lg text-white h-full`}>
            <div className={`rounded-t-lg flex flex-row items-center justify-center bg-primary`}>
                <h2 className='font-semibold text-center text-white line-clamp-1 p-7 text-txt20'>{workspace.title}</h2>
            
                </div>

             <div className="flex flex-col h-32 gap-6 px-2 pt-5 bg-white rounded-b-lg dark:bg-gray-800">
    <p className="px-3 font-normal text-txt18 line-clamp-2 dark:text-white text-primary">
        {workspace.description}
    </p>
    
    {/* Use mt-auto to push this to the bottom */}
    <div className="flex justify-end mt-auto mb-2">
        <p className="px-2 py-1 text-gray-700 rounded-md dark:text-white text-txt12 opacity-70">
            <FontAwesomeIcon icon={faCalendar} /> {formatDate(workspace.created_at)}
        </p>
    </div>
</div>

        </section>
    );
}
