import React from 'react'
export const Notification = ({profile,name,description}) => {
  return (
    <>
    <div className="flex space-x-2 align-middle items-center p-4 rounded-[16px] bg-white dark:bg-gray-800">
                  <div className="flex items-center">
          <img className="w-12 h-12 border-2 rounded-full border-primary" src={profile} alt="Profile" />
          <div className="ml-5">
            <h1 className="font-semibold text-txt18 text-primary dark:text-white">{name}</h1>
            <p className="text-txt14 dark:text-gray-300">{description}</p>
          
          </div>
          </div>
              
    </div>
    
    </>
  )
}
