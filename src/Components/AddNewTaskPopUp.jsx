import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaCloudUploadAlt } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { getAceAccessToken } from "../lib/secureLocalStorage";
import {
  useCreateTaskMutation,
  useGetDetailTaskQuery,
} from "../features/addTaskApi";
import { useGetWorkspacesQuery } from "../features/workspaceApi";
import { useLocation, useParams } from "react-router";
import { useGetMeQuery } from "../features/auth/authApiSlice";

export default function AddNewTaskPopUp({ isOp, onCl }) {
  const { id } = useParams();
  const workspaceId = id;
  console.log("workspaceId", workspaceId);
  if (!isOp) return null;

  const location = useLocation();
  console.log("Location in add new Task Pop up :>> ", location);

  const [createTask] = useCreateTaskMutation();

  const token = getAceAccessToken();
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  const { data } = useGetMeQuery();
  const userId = data?.id;
  console.log("userId", userId);
  // Fetch categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/categories`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await response.json();
        setCategories(data);
        console.log("data:", data); // Store categories in state
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
      setLoadingCategories(false);
    }
    fetchCategories();
  }, [token]);
  // const [data]=useGetWorkspacesQuery();

  const initialValues = {
    id: crypto.randomUUID(),
    title: "",
    note: "",
    start_date: "",
    due_date: "",
    reminder_date: "",
    created_at: new Date().toISOString(),
    is_important: false,
    category_id: "", // User selects from dropdown
    user_id: userId,
    workspace_id: workspaceId,
    position: Math.floor(Math.random() * 100) + 1,
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    due_date: Yup.string().required("Due date is required"),
    start_date: Yup.string().required("Start date is required"),
    reminder_date: Yup.string(),
    note: Yup.string(),
    category_id: Yup.string().required("Category is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      console.log("Submitting Task:", values);

      let taskValues = { ...values };

      while (true) {
        try {
          const response = await createTask(taskValues).unwrap();
          console.log("Task Created Successfully:", response);
          resetForm();
          onCl();
          window.location.reload();
          break; // Exit loop if successful
        } catch (err) {
          if (err?.status === 409) {
            console.warn("UUID Conflict Detected. Generating New UUID...");
            taskValues.id = crypto.randomUUID(); // Generate a new UUID
            resetForm();
            onCl();
          } else {
            throw err; // Throw error if it's not a conflict
          }
        }
      }
    } catch (err) {
      console.error("Failed to create task:", err?.data || err);
    }
    setSubmitting(false);
  };

  // const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  //   try {
  //     console.log("Submitting Task:", values);
  //     //const
  //     const response = await createTask(values).unwrap();
  //     console.log("Task Created Successfully:", response);
  //     resetForm();
  //     onClose();
  //   } catch (err) {
  //     console.error("Failed to create task:", err?.data || err);
  //   }
  //   setSubmitting(false);
  // };

  //   return (
  //     <div className=" w-full h-[100vh]">
  //       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 font-roboto">
  //         <div
  //         className="
  //           absolute top-[100px] left-1/2 -translate-x-1/2
  //           max-w-[550px] w-full bg-white dark:bg-gray-500
  //           rounded-lg shadow-lg p-[25px]
  //         ">
  //         <div className="max-w-[550px] w-full bg-white dark:bg-gray-500 rounded-lg shadow-lg p-[25px] relative">
  //           {/* Header */}
  //           <div className="flex justify-between pb-2">
  //             <div className="grid pr-10">
  //               <h3 className="pt-3 font-bold text-primary text-[24px] dark:text-white">
  //                 Add a new task
  //               </h3>
  //               <p className="text-primary text-txt14 dark:text-white">
  //                 Effortlessly manage your to-do list: add a new task
  //               </p>
  //             </div>
  //             <button
  //               onClick={onCl}
  //               className="top-0 pl-10 text-2xl dark:text-gray-300 text-primary right-3"
  //             >
  //               <FontAwesomeIcon icon={faXmark} />
  //             </button>
  //           </div>

  //           {/* Form */}
  //           <Formik
  //             initialValues={initialValues}
  //             validationSchema={validationSchema}
  //             onSubmit={handleSubmit}
  //           >
  //             <Form>
  //               {/* Title */}
  //               <div className="pb-2">
  //                 <label
  //                   htmlFor="title"
  //                   className="font-medium text-primary dark:text-gray-50 text-txt16 lg:text-txt18"
  //                 >
  //                   Task Title
  //                 </label>
  //                 <Field
  //                   name="title"
  //                   type="text"
  //                   placeholder="Put your workspace name..."
  //                   className="w-full p-2 border rounded-md dark:text-gray-300 dark:bg-gray-800 border-primary text-txt14 xl:text-txt16 focus:outline-none focus:border-primary focus:ring-1 focus:ring-blue-300"
  //                 />
  //                 <ErrorMessage
  //                   name="title"
  //                   component="div"
  //                   className="text-sm text-red-500"
  //                 />
  //               </div>

  //               {/* Due Date */}
  //               <div className="pb-2">
  //                 <label
  //                   htmlFor="due_date"
  //                   className="font-medium text-primary dark:text-white text-txt16 lg:text-txt18"
  //                 >
  //                   Due Date
  //                 </label>
  //                 <Field
  //                   name="due_date"
  //                   type="date"
  //                   placeholder="dd/mm/yyyy"
  //                   className="w-full p-2 border rounded-md dark:text-gray-300 dark:bg-gray-800 border-primary text-txt14 xl:text-txt16 focus:outline-none focus:border-primary focus:ring-1 focus:ring-blue-300"
  //                 />
  //                 <ErrorMessage
  //                   name="due_date"
  //                   component="div"
  //                   className="text-sm text-red-500"
  //                 />
  //               </div>

  //               {/* Start Date */}
  //               <div className="pb-2">
  //                 <label
  //                   htmlFor="start_date"
  //                   className="font-medium text-primary dark:text-white text-txt16 lg:text-txt18"
  //                 >
  //                   Start Date
  //                 </label>
  //                 <Field
  //                   name="start_date"
  //                   type="date"
  //                   placeholder="dd/mm/yyyy"
  //                   className="w-full p-2 border rounded-md dark:text-gray-300 dark:bg-gray-800 border-primary text-txt14 xl:text-txt16 focus:outline-none focus:border-primary focus:ring-1 focus:ring-blue-300"
  //                 />
  //                 <ErrorMessage
  //                   name="start_date"
  //                   component="div"
  //                   className="text-sm text-red-500"
  //                 />
  //               </div>

  //             {/* Reminder Date */}
  //             <div className="pb-2">
  //               <label
  //                 htmlFor="reminder_date"
  //                 className="font-medium text-primary dark:text-white text-txt16 lg:text-txt18"
  //               >
  //                 Reminder Date
  //               </label>
  //               <Field
  //                 name="reminder_date"
  //                 type="date"
  //                 placeholder="dd/mm/yyyy"
  //                 className="w-full p-2 border rounded-md dark:text-gray-300 dark:bg-gray-800 border-primary text-txt14 xl:text-txt16 focus:outline-none focus:border-primary focus:ring-1 focus:ring-blue-300"
  //               />
  //               <ErrorMessage
  //                 name="reminder_date"
  //                 component="div"
  //                 className="text-sm text-red-500"
  //               />
  //             </div>

  //             {/* Assign to */}
  //             <div className="pb-2">
  //               <label
  //                 htmlFor="note"
  //                 className="font-medium text-primary dark:text-white text-txt16 lg:text-txt18"
  //               >
  //                 Assign to
  //               </label>
  //               <Field
  //                 name="note"
  //                 type="text"
  //                 placeholder="Your member"
  //                 className="w-full p-2 border rounded-md dark:text-gray-300 dark:bg-gray-800 border-primary text-txt14 xl:text-txt16 focus:outline-none focus:border-primary focus:ring-1 focus:ring-blue-300"
  //               />
  //               <ErrorMessage
  //                 name="note"
  //                 component="div"
  //                 className="text-sm text-red-500"
  //               />
  //             </div>

  //             {/* Category */}
  //             <div>
  //               <label
  //                 htmlFor="category_id"
  //                 className="font-medium text-primary dark:text-white text-txt16 lg:text-txt18"
  //               >
  //                 Category
  //               </label>
  //               {loadingCategories ? (
  //                 <p>Loading categories...</p>
  //               ) : (
  //                 <Field
  //                   as="select"
  //                   name="category_id"
  //                   className="w-full p-2 border rounded-md dark:text-gray-300 dark:bg-gray-800 border-primary text-txt14 xl:text-txt16 focus:outline-none focus:border-primary focus:ring-1 focus:ring-blue-300"
  //                 >
  //                   <option value="">Select Category</option>
  //                   {categories.map((cat) => (
  //                     <option key={cat.id} value={cat.id}>
  //                       {cat.title}
  //                     </option>
  //                   ))}
  //                 </Field>
  //               )}
  //               <ErrorMessage
  //                 name="category_id"
  //                 component="div"
  //                 className="text-red-500"
  //               />
  //             </div>

  //             {/* Buttons */}
  //             <div className="flex justify-end mt-4">
  //               <button
  //                 type="button"
  //                 onClick={onCl}
  //                 className="px-6 py-2 m-2 transition-all border rounded-md dark:text-white border-primary text-primary text-btn-txt active:scale-95"
  //               >
  //                 Cancel
  //               </button>
  //               <button
  //                 type="submit"
  //                 className="py-2 m-2 text-white transition-all rounded-md px-7 bg-primary hover:bg-subaccent hover:shadow-lg active:bg-subaccent text-btn-txt active:scale-95"
  //               >
  //                 Save
  //               </button>
  //             </div>
  //           </Form>
  //         </Formik>
  //       </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="sticky h-[100vh] z-20 top-0 bottom-0 inset-0 z-9 flex items-center justify-center bg-black bg-opacity-50 font-roboto">
      <div className="max-w-[550px] w-full sticky bg-white dark:bg-[#292A2B] rounded-lg shadow-lg p-[25px]">
        {/* Header */}
        <div className="flex justify-between pb-2">
          <div className="grid pr-10">
            <h3 className="pt-3 font-bold text-primary text-[24px] dark:text-white">
              Add a new task
            </h3>
            <p className="text-primary text-txt14 dark:text-white">
              Effortlessly manage your to-do list: add a new task
            </p>
          </div>
          <button
            onClick={onCl}
            className="top-0 pl-10 text-2xl dark:text-gray-300 text-primary right-3"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Form */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            {/* Title */}
            <div className="pb-2">
              <label
                htmlFor="title"
                className="font-medium text-primary dark:text-gray-50 text-txt16 lg:text-txt18"
              >
                Task Title
              </label>
              <Field
                name="title"
                type="text"
                placeholder="Put your workspace name..."
                className="w-full p-2 border dark:text-gray-300 dark:bg-[#242424] border-primary rounded-md text-txt14 xl:text-txt16 focus:outline-none focus:border-primary focus:ring-1 focus:ring-blue-300"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            {/* Due Date */}
            <div className="pb-2">
              <label
                htmlFor="due_date"
                className="font-medium text-primary dark:text-white text-txt16 lg:text-txt18"
              >
                Due Date
              </label>
              <Field
                name="due_date"
                type="date"
                placeholder="dd/mm/yyyy"
                className="w-full p-2 border dark:text-gray-300 dark:bg-[#242424] border-primary rounded-md text-txt14 xl:text-txt16 focus:outline-none focus:border-primary focus:ring-1 focus:ring-blue-300"
              />
              <ErrorMessage
                name="due_date"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            {/* Start Date */}
            <div className="pb-2">
              <label
                htmlFor="start_date"
                className="font-medium text-primary dark:text-white text-txt16 lg:text-txt18"
              >
                Start Date
              </label>
              <Field
                name="start_date"
                type="date"
                placeholder="dd/mm/yyyy"
                className="w-full p-2 border dark:text-gray-300 dark:bg-[#242424] border-primary rounded-md text-txt14 xl:text-txt16 focus:outline-none focus:border-primary focus:ring-1 focus:ring-blue-300"
              />
              <ErrorMessage
                name="start_date"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            {/* Reminder Date */}
            <div className="pb-2">
              <label
                htmlFor="reminder_date"
                className="font-medium text-primary dark:text-white text-txt16 lg:text-txt18"
              >
                Reminder Date
              </label>
              <Field
                name="reminder_date"
                type="date"
                placeholder="dd/mm/yyyy"
                className="w-full p-2 border dark:text-gray-300 dark:bg-[#242424] border-primary rounded-md text-txt14 xl:text-txt16 focus:outline-none focus:border-primary focus:ring-1 focus:ring-blue-300"
              />
              <ErrorMessage
                name="reminder_date"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            {/* Assign to */}
            <div className="pb-2">
              <label
                htmlFor="note"
                className="font-medium text-primary dark:text-white text-txt16 lg:text-txt18"
              >
                Assign to
              </label>
              <Field
                name="note"
                type="text"
                placeholder="Your member"
                className="w-full p-2 border dark:text-gray-300 dark:bg-[#242424] border-primary rounded-md text-txt14 xl:text-txt16 focus:outline-none focus:border-primary focus:ring-1 focus:ring-blue-300"
              />
              <ErrorMessage
                name="note"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category_id"
                className="font-medium text-primary dark:text-white text-txt16 lg:text-txt18"
              >
                Category
              </label>
              {loadingCategories ? (
                <p>Loading categories...</p>
              ) : (
                <Field
                  as="select"
                  name="category_id"
                  className="w-full p-2 border dark:text-gray-300 dark:bg-[#242424] border-primary rounded-md text-txt14 xl:text-txt16 focus:outline-none focus:border-primary focus:ring-1 focus:ring-blue-300"
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.title}
                    </option>
                  ))}
                </Field>
              )}
              <ErrorMessage
                name="category_id"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={onCl}
                className="px-6 py-2 m-2 transition-all border rounded-md dark:text-white border-primary text-primary text-btn-txt active:scale-95"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2 m-2 text-white transition-all rounded-md px-7 bg-primary hover:bg-subaccent hover:shadow-lg active:bg-subaccent text-btn-txt active:scale-95"
              >
                Save
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
