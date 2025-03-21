import React, { useState, useEffect } from "react";
import WorkspaceCard from "../Components/WorkspaceCard";
import ModalWorkspace from "../Components/ModalWorkspace";
import { useLocation } from "react-router";
import { getAceAccessToken } from "../lib/secureLocalStorage";
import { useGetMeQuery } from "../features/auth/authApiSlice";
import { useGetWorkspacesQuery } from "../features/workspaceApi";
import { WorkspaceCardSkeleton } from "../Components/skeleton/WorkspaceCardSkeleton";
import { Pagination } from "../Components/PaginationInDe";
import { useSelector } from "react-redux";

export default function DashboardPage() {
  const count = useSelector((state) => state.counter.count); // Ensure correct state
  console.log("count :>> ", count);
  const [activeTab, setActiveTab] = useState("your-workspace");
  const [isModelOpen, setIsModelOpen] = useState(false);

  const location = useLocation();
  const token = getAceAccessToken();
  console.log("Rescure token: ", token);
  console.log("location :", location.state);
  console.log("status", status);
  const [workspaceList, setWorkspaceList] = useState([]);
  const [userId, setUserId] = useState("");

  const { data, isSuccess } = useGetMeQuery();

  console.log("data me in daskBord :>> ", data);
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
  console.log("data :>> ");
  const {
    data: workspaces,
    isLoading,
    error,
  } = useGetWorkspacesQuery({ id: data?.id, limit: 20, offset: count });
  console.log("workspaces :>> ", workspaces);
  useEffect(() => {
    console.log("workspaces", workspaceList);
    console.log("userId in ", userId);
  }, []);

  //////////////////////

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredWorkspaces, setFilteredWorkspaces] = useState(workspaces);

  // Handle the search input change
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter workspaces based on name
    const result = workspaces.filter((workspace) =>
      workspace.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredWorkspaces(result);
  };

  ///////////////////////

  return (
    <>
      <section className="sticky z-30 flex flex-col px-16 pb-5 justify-between bg-white top-[85px] sm:flex-row dark:bg-gray-800">
        <Pagination />
        <div className="flex items-center justify-center mt-8">
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm} // Bind to the state
              onChange={handleSearch}
              className="w-full px-4 py-2 text-lg placeholder-gray-400 transition duration-300 ease-in-out border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </section>

      <div className="bg-background p-8 shadow-md w-full dark:bg-[#121321] font-roboto min-h-screen mx-auto">
        <section className="flex-1 bg-white p-6 dark:bg-[#121321]">
          {/* Tabs */}
          <div className="flex flex-col px-3 py-3 space-y-2 bg-gray-100 border-b-2 md:flex-row rounded-xl dark:bg-gray-500 md:justify-around md:space-x-10 md:space-y-0">
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
    className={`py-2 bg-white dark:bg-primary dark:hover:bg-white dark:hover:text-primary dark:text-white hover:bg-primary hover:text-white w-full rounded-md font-semibold ${
      activeTab === "Searching workspaces"
        ? "border-b-2 border-gray-700 dark:border-white"
        : "text-primary"
    }`}
    onClick={() => setActiveTab("Searching workspaces")}
  >
    Searching Workspaces
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
          <div className="grid grid-cols-1 gap-5 mt-5 auto-rows-fr lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
            {/* Show Skeleton if Loading */}
            {isLoading ? (
              <>
                <WorkspaceCardSkeleton />
                <WorkspaceCardSkeleton />
                <WorkspaceCardSkeleton />
                <WorkspaceCardSkeleton />
                <WorkspaceCardSkeleton />
                <WorkspaceCardSkeleton />
                <WorkspaceCardSkeleton />
                <WorkspaceCardSkeleton />
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
                      className="flex items-center justify-center p-6 text-gray-500 border border-gray-300 rounded-lg cursor-pointer dark:bg-gray-800"
                      onClick={() => setIsModelOpen(true)}
                    >
                      <h3 className="flex items-center justify-center text-primary text-txt20 dark:text-white">
                        + Create New Workspace
                      </h3>
                    </div>
                    {[...(workspaces ?? [])].reverse().map((workspace) => (
                      <WorkspaceCard
                        key={workspace.id}
                        workspace={workspace}
                        userId={userId}
                      />
                    ))}
                  </>
                )}
              </>
            )}
            {activeTab === "Searching workspaces" && (
              <>
                {filteredWorkspaces?.map((workspace) => (
                  <WorkspaceCard key={workspace.id} workspace={workspace} />
                ))}
              </>
            )}
            {/* If "Shared Workspace" is active */}
            {activeTab === "shared-workspace" && (
              <>
                <div
                  className="flex justify-center p-6 text-gray-500 border border-gray-300 rounded-lg cursor-pointer"
                  onClick={() => setIsModelOpen(true)}
                >
                  <h3 className="flex items-center text-primary text-txt20">
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
