import React from 'react'

export const WorkspaceCardSkeleton = () => {
  return (
    <div className="border border-gray-300 dark:bg-gray-800 rounded-lg text-white h-full animate-pulse">
    <div className="rounded-t-lg flex flex-row items-center justify-center bg-gray-600 h-16">
      <div className="w-3/4 h-6 bg-gray-500 rounded"></div>
    </div>

    <div className="flex flex-col justify-between gap-6 px-2 py-1 pt-5 dark:bg-gray-800 bg-white rounded-b-lg">
      <div className="font-normal px-3 text-txt18 line-clamp-2 dark:text-white text-primary">
        <div className="w-full h-4 bg-gray-400 rounded"></div>
        <div className="w-5/6 h-4 bg-gray-400 rounded mt-2"></div>
      </div>

      <div className="flex justify-end mb-1">
        <div className="w-1/3 h-4 bg-gray-400 rounded"></div>
      </div>
    </div>
  </div>
  )
}

