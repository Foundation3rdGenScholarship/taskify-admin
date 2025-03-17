import React, { useState, useEffect } from "react";
import WorkspaceCard from "../Components/WorkspaceCard";
import ModalWorkspace from "../Components/ModalWorkspace";
import { useLocation } from "react-router";
import { getAceAccessToken } from "../lib/secureLocalStorage";
import { useGetMeQuery } from "../features/auth/authApiSlice";
import { useGetWorkspacesQuery } from "../features/workspaceApi";
import { WorkspaceCardSkeleton } from "../Components/skeleton/WorkspaceCardSkeleton";

export default function DashboardPage() {

  const [activeTab, setActiveTab] = useState("your-workspace");
  const [isModelOpen, setIsModelOpen] = useState(false);

  const location = useLocation();
  const token = getAceAccessToken();
  console.log("Rescure token: ", token);
  console.log("location :", location.state);
console.log('status', status)
  const [workspaceList, setWorkspaceList] = useState([]);
  const [userId, setUserId] = useState("");

  const { data, isSuccess } = useGetMeQuery();
  const sharedWorkspaces = [
    {
      id: 4,
      title: "Design Poster + Banner Bamboo School",
      description:
        "Taskify is a productivity platform that allows users to organize tasks...",
      color: "bg-yellow-500",
      created_at: "2025-02-27T00:00:00+00:00",
    },
    {
      id: 5,
      title: "Math Homework - Grade 12",
      description:
        "Taskify is a productivity platform that allows users to organize tasks...",
      color: "bg-blue-500",
      created_at: "2025-02-27T00:00:00+00:00",
    },
    {
      id: 6,
      title: "Khmer Literature Homework Full-time class",
      description:
        "Taskify is a productivity platform that allows users to organize tasks...",
      color: "bg-gray-600",
      created_at: "2025-02-27T00:00:00+00:00",
    },
  ];

 
 

  useEffect(() => {
    if (isSuccess && data?.id) {
      setUserId(data.id); 
    }
  }, [isSuccess, data?.id]);

  useEffect(() => {
    const fetchWorkspaces = async () => {
      if (!token || !userId) return;

      if (token) {
        console.log(token);
        try {
          const respone = await fetch(
            `${
              import.meta.env.VITE_BASE_URL
            }/workspaces?limit=20&offset=0&user_id=eq.${userId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          const data = await respone.json();
          setWorkspaceList([...data].reverse());
        } catch (error) {
          console.log("Error feching workspace:", error);
        }
      }
    };
    fetchWorkspaces();
  }, [userId]);

 
  
  const handleWorkspaceResponse = (newWorkspace) => {
    if (newWorkspace) {
      setWorkspaceList((prevWorkspace) => [...prevWorkspace, newWorkspace]);
    }
  };
  const { data: workspaces, isLoading, error } = useGetWorkspacesQuery();
  console.log('workspaces',workspaceList)
  console.log('userId in ', userId)
  return (
    <>
      <div className="flex bg-gray-100  border">
        <section className="flex-1 p-6 bg-white dark:bg-[#121321] ">
          {/* Tabs */}
          <div className="flex px-3 py-3 space-x-10 bg-gray-100 dark:bg-gray-500 border-b-2 md:justify-around rounded-xl ">
            <button
              className={`py-2 bg-white dark:bg-primary dark:hover:bg-white dark:hover:text-primary dark:text-white hover:bg-primary hover:text-white w-full rounded-md font-semibold ${
                activeTab === "your-workspace"
                  ? "border-b-2 border-gray-700 dark:border-white"
                  : "text-primary"
              }`}
              onClick={() => setActiveTab("your-workspace")}
            >
              Your Workspace
            </button>

            <button
              className={`py-2 pb-1 bg-white hover:bg-primary dark:bg-primary dark:text-white dark:hover:bg-white dark:hover:text-primary hover:text-white w-full rounded-md font-semibold ${
                activeTab === "shared-workspace"
                  ? "border-b-2 border-gray-700 dark:border-white"
                  : "text-primary"
              }`}
              onClick={() => setActiveTab("shared-workspace")}
            >
              Shared Workspace
            </button>
          </div>

          {/* Workspace Content */}
          <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
            {/* Show Skeleton if Loading */}
            {isLoading ? (
              <>
                <WorkspaceCardSkeleton />
                <WorkspaceCardSkeleton />
                <WorkspaceCardSkeleton />
                <WorkspaceCardSkeleton />
              </>
            ) : (
              <>
                {/* If "Your Workspace" is active */}
               {activeTab === "your-workspace" && (
                  <>
                    <div
                      className="flex justify-center items-center p-6 dark:bg-gray-800 text-gray-500 border border-gray-300 rounded-lg cursor-pointer"
                      onClick={() => setIsModelOpen(true)}
                     >
                      <h3 className="flex items-center justify-center dark:text-white text-txt20 text-primary">
                        + Create New Workspace
                      </h3>
                    </div>
                    {workspaceList?.map((workspace) => (
                      <WorkspaceCard key={workspace.id} workspace={workspace} userId={userId} />
                    ))}
                  </>
                )}
              </>
            )}
            {/* If "Shared Workspace" is active */}
            {activeTab === "shared-workspace" && (
              <>
                <div
                  className="flex justify-center p-6 text-gray-500 border border-gray-300 rounded-lg cursor-pointer"
                  onClick={() => setIsModelOpen(true)}
                >
                  <h3 className="flex items-center text-txt20 text-primary">
                    + Create New Workspace
                  </h3>
                </div>
                {sharedWorkspaces.map((workspace) => (
                  <WorkspaceCard key={workspace.id} workspace={workspace} />
                ))}
              </>
            )}
          </div>
        </section>
      </div>
      {/* use Model component*/}
      {/* <ModalWorkspace isOpen = {isModelOpen} onclose={()=> setIsModelOpen(false)}/> */}
      <ModalWorkspace
        token={token}
        onResponse={handleWorkspaceResponse}
        isOpen={isModelOpen}
        onClose={() => setIsModelOpen(false)}
      />
    </>
  );
}
