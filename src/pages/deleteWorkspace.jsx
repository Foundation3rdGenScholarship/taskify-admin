import React, { useState } from "react";
import { useDeleteCheckListMutation } from "../features/addTaskApi";
import { useNavigate } from "react-router";
import { useDeleteWorkspaceMutation } from "../features/workspaceApi";

export default function DeleteWorkspaceButtn({ workspace_id }) {
  console.log("workspace Id in delete :>> ", workspace_id);

  const [open, setOpen] = useState(false);
  const [deleteWorkspace] = useDeleteWorkspaceMutation();
  const navigate = useNavigate();
  const onDelete = async () => {
    await deleteWorkspace(workspace_id);
    navigate("/dashboard");
    window.location.reload();
    setOpen(false);
  };

  return (
    <>
      {/* Delete Button */}
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
      >
        Delete Workspace
      </button>

      {/* Confirmation Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-gray-800">Are you sure?</h2>
            <p className="mt-2 text-gray-600">
              Deleting this workspace will remove all tasks and data. This
              action cannot be undone.
            </p>
            <div className="flex justify-end mt-4 space-x-3">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-gray-800 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onDelete();
                  
                }}
                className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
