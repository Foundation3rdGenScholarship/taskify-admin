// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGreaterThan, faXmark, faCircleCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { FaCloudUploadAlt } from "react-icons/fa";

// export default function EditTaskPupUp() {
//   const initialValues = {
//     title: "",
//     note: "",
//     file: null,
//     due_date: "",
//     reminder_date: "",
//     assignee: "",
//     category_id: "",
//     checklist: [{ text: "Sketch low-fidelity wireframes", checked: false }],
//   };

//   const validationSchema = Yup.object().shape({
//     title: Yup.string().required("Task title is required"),
//     note: Yup.string(),
//     due_date: Yup.string().required("Due date is required"),
//     reminder_date: Yup.string(),
//     assignee: Yup.string().required("Assignee is required"),
//   });

//   const [tasks, setTasks] = useState([
//     { id: 1, text: "Sketch low-fidelity wireframes", completed: false },
//     { id: 2, text: "Sketch low-fidelity wireframes", completed: false },
//   ]);

//   const toggleCompletion = (id) => {
//     setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
//   };

//   const removeTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   return (
//     <>
//       <div className="fixed flex items-center justify-center bg-opacity-50 dark:bg-gray-900">
//         <div className="bg-white dark:bg-gray-900 dark:text-gray-200 p-6 rounded-lg shadow-lg w-[95%] max-w-5xl relative flex flex-col ">
//           {/* Header */}
//           <div className="flex items-center justify-between text-xl font-semibold">
//             <h3>
//               <span>Final Project of Foundation G3-Taskify</span>
//               <span className="px-1">
//                 <FontAwesomeIcon icon={faGreaterThan} />
//               </span>
//               <span className="pr-1">Design User Interface</span>
//             </h3>
//             <button className="text-xl text-gray-500 hover:text-primary dark:text-gray-400 ">
//               <FontAwesomeIcon icon={faXmark} />
//             </button>
//           </div>

//           {/* Divider */}
//           <div className="mx-3 bg-transparent w-full mt-4 border-[2px] border-dashed border-secondary"></div>

//           {/* Form Section */}
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={(values) => console.log("values :", values)}
//           >
//             <Form className="flex flex-col flex-grow p-6 space-y-4 rounded-lg">
//               <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//                 {/* Left Section */}
//                 <div>
//                   {/* Task Title */}
//                   <div className="pb-5 xl:pb-7">
//                     <label className="font-medium text-primary">Change Task Title</label>
//                     <Field
//                       type="text"
//                       placeholder="Your new task title"
//                       name="title"
//                       className="w-full p-2 border rounded-md dark:bg-gray-800 border-primary"
//                     />
//                     <ErrorMessage name="title" component="div" className="text-sm text-red-500" />
//                   </div>

//                   {/* Description */}
//                   <div className="pb-5 xl:pb-7">
//                     <label className="font-medium text-primary">Change Description</label>
//                     <Field
//                       as="textarea"
//                       name="description"
//                       placeholder="Change description"
//                       className="w-full h-24 p-2 border rounded-md border-primary dark:bg-gray-800"
//                     />
//                   </div>

//                   {/* File Upload */}
//                   <div className="flex flex-col items-center justify-center p-6 pb-5 border rounded-lg xl:pb-7 dark:bg-gray-800 border-primary dark:text-secondary">
//                     <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full cursor-pointer">
//                       <FaCloudUploadAlt className="mb-2 text-gray-400" size={30} />
//                       <span className="text-sm text-gray-400">Click to upload your file</span>
//                       <span className="text-xs text-gray-500">Max. File Size: 30MB</span>
//                       <input id="dropzone-file" type="file" className="hidden" />
//                     </label>
//                     <button type="button" className="px-4 py-2 mt-4 text-white rounded-md bg-primary hover:bg-blue-600">
//                       Browse File
//                     </button>
//                   </div>

//                   {/* Checklist */}
//                   <div className="p-4 pb-5 mt-3 bg-white border rounded-lg xl:pb-7 border-primary dark:bg-gray-800">
//                     <h2 className="text-lg font-semibold text-primary">Creating Components</h2>
//                     <ul className="mt-4">
//                       {tasks.map((task) => (
//                         <li key={task.id} className="flex items-center justify-between py-2">
//                           <label className="flex items-center space-x-2 dark:bg-gray-800">
//                             <input
//                               type="checkbox"
//                               checked={task.completed}
//                               onChange={() => toggleCompletion(task.id)}
//                               className="w-5 h-5 form-checkbox dark:bg-gray-800 text-primary"
//                             />
//                             <span>{task.text}</span>
//                           </label>
//                           <button onClick={() => removeTask(task.id)} className="text-red-500">
//                             <FontAwesomeIcon icon={faTrash} />
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                     <div className="flex justify-end">
//                       <button className="px-4 py-2 mt-4 text-white rounded-lg bg-primary hover:bg-blue-600">
//                         Add Checklist
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right Section */}
//                 <div className="flex flex-col ">
//                   {/* Due Date & Reminder */}
//                   <div className="pb-5 xl:pb-7">
//                     <label className="font-medium text-primary">Due Date</label>
//                     <Field type="date" name="due_date" className="w-full p-2 border rounded-md dark:bg-gray-800 border-primary" />
//                   </div>
//                   <div className="pb-5 xl:pb-7">
//                     <label className="font-medium text-primary">Set Reminder</label>
//                     <Field type="date" name="reminder_date" className="w-full p-2 border rounded-md dark:bg-gray-800 border-primary" />
//                   </div>

//                   {/* Assignee & Category */}
//                   <div className="pb-5 xl:pb-7">
//                     <label className="font-medium text-primary">Assigns to</label>
//                     <Field as="select" name="assignee" className="w-full p-2 border rounded-md dark:bg-gray-800 border-primary">
//                       <option value="">Select</option>
//                       <option value="Mr. Say Seyha">Mr. Say Seyha</option>
//                     </Field>
//                   </div>
//                   <div className="pb-5 xl:pb-7">
//                     <label className="font-medium text-primary">Category</label>
//                     <Field as="select" name="category_id" className="w-full p-2 border rounded-md dark:bg-gray-800 border-primary">
//                       <option value="Design">Design</option>
//                       <option value="Development">Development</option>
//                     </Field>
//                   </div>
//                   <div className="flex flex-col items-end justify-end px-5 pt-5 mt-auto md:flex-row md:space-x-4">
//                       <button className="flex items-center justify-center w-full px-4 py-2 mb-2 text-gray-700 transition border rounded-lg md:w-auto border-primary md:mb-0 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
//                         <FontAwesomeIcon icon={faTrash} className="mr-2" />
//                         Delete Task
//                       </button>
//                       <button type="submit" className="w-full px-4 py-2 text-white transition rounded-lg bg-primary md:w-auto hover:bg-blue-900 dark:hover:bg-blue-700">
//                         Save Task
//                       </button>
//                     </div>
//                 </div>
//               </div>

             
              
//             </Form>
//           </Formik>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faXmark, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaCloudUploadAlt } from "react-icons/fa";


export default function EditTaskPupUp({ isOpen, onClose, token }) {
  console.log("isopen",isOpen);
  console.log("token",token)
  if (!isOpen) return null;

  const initialValues = {
    title: "",
    note: "",
    file: null,
    due_date: "",
    reminder_date: "",
    assignee: "",
    category_id: "",
    checklist: [{ text: "Sketch low-fidelity wireframes", checked: false }],
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Task title is required"),
    note: Yup.string(),
    due_date: Yup.string().required("Due date is required"),
    reminder_date: Yup.string(),
    assignee: Yup.string().required("Assignee is required"),
  });

  const [tasks, setTasks] = useState([
    { id: 1, text: "Sketch low-fidelity wireframes", completed: false },
    { id: 2, text: "Create UI components", completed: false },
  ]);

  const toggleCompletion = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="fixed inset-0 top-0 bottom-0  flex items-center justify-center bg-black bg-opacity-50 font-roboto">
        <div className="bg-white dark:bg-gray-900 dark:text-gray-200 p-6 rounded-lg shadow-lg w-[95%] max-w-5xl relative flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between text-xl font-semibold">
            <h3>
              <span>Final Project of Foundation G3-Taskify</span>
              <span className="px-1">
                <FontAwesomeIcon icon={faGreaterThan} />
              </span>
              <span className="pr-1">Design User Interface</span>
            </h3>
            <button
            onClick={onClose}
            className="text-xl text-gray-500 hover:text-primary dark:text-gray-400 ">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          {/* Divider */}
          <div className="mx-3 bg-transparent w-full mt-4 border-[2px] border-dashed border-secondary"></div>

          {/* Form Section */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log("Form values:", values)}
          >
            <Form className="p-6 space-y-4">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Left Section */}
                <div>
                  {/* Task Title */}
                  <div className="pb-5 xl:pb-7">
                    <label className="font-medium text-primary dark:text-white">Change Task Title</label>
                    <Field
                      type="text"
                      placeholder="Your new task title"
                      name="title"
                      className="w-full p-2 border rounded-md dark:bg-gray-800 border-primary"
                    />
                    <ErrorMessage name="title" component="div" className="text-sm text-red-500" />
                  </div>

                  {/* Description */}
                  <div className="pb-5 xl:pb-7">
                    <label className="font-medium text-primary dark:text-white">Change Description</label>
                    <Field
                      as="textarea"
                      name="description"
                      placeholder="Change description"
                      className="w-full h-24 p-2 border rounded-md border-primary dark:bg-gray-800"
                    />
                  </div>

                  {/* File Upload */}
                  <div className="flex flex-col items-center p-6 pb-5 border rounded-lg xl:pb-7 dark:bg-gray-800 border-primary dark:text-secondary">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center cursor-pointer">
                      <FaCloudUploadAlt className="mb-2 text-gray-400" size={30} />
                      <span className="text-sm text-gray-400">Click to upload your file</span>
                      <span className="text-xs text-gray-500">Max. File Size: 30MB</span>
                      <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                    <button type="button" className="px-4 py-2 mt-4 text-white rounded-md bg-primary hover:bg-blue-600">
                      Browse File
                    </button>
                  </div>

                  {/* Checklist */}
                  <div className="p-4 pb-5 mt-3 border rounded-lg xl:pb-7 border-primary dark:bg-gray-800">
                    <h2 className="text-lg font-semibold dark:text-white text-primary">Checklist</h2>
                    <ul className="mt-4">
                      {tasks.map((task) => (
                        <li key={task.id} className="flex items-center justify-between py-2">
                          <label className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={task.completed}
                              onChange={() => toggleCompletion(task.id)}
                              className="w-5 h-5 form-checkbox text-primary"
                            />
                            <span>{task.text}</span>
                          </label>
                          <button onClick={() => removeTask(task.id)} className="text-red-500">
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Section */}
                <div>
                  {/* Due Date */}
                  <div className="pb-5 xl:pb-7">
                    <label className="font-medium text-primary dark:text-white">Due Date</label>
                    <Field type="date" name="due_date" className="w-full p-2 border rounded-md dark:bg-gray-800 border-primary" />
                  </div>

                  {/* Reminder Date */}
                  <div className="pb-5 xl:pb-7">
                    <label className="font-medium text-primary dark:text-white">Set Reminder</label>
                    <Field type="date" name="reminder_date" className="w-full p-2 border rounded-md dark:bg-gray-800 border-primary" />
                  </div>

                  {/* Assignee */}
                  <div className="pb-5 xl:pb-7">
                    <label className="font-medium text-primary">Assign to</label>
                    <Field as="select" name="assignee" className="w-full p-2 border rounded-md dark:bg-gray-800 border-primary">
                      <option value="">Select</option>
                      <option value="Mr. Say Seyha">Mr. Say Seyha</option>
                    </Field>
                  </div>
                  <div className="pb-5 xl:pb-7">
                    <label className="font-medium text-primary">Category</label>
                    <Field as="select" name="category_id" className="w-full p-2 border rounded-md dark:bg-gray-800 border-primary">
                    <option value="">Select Category</option>
                  {/* {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.title}
                    </option>
                  ))} */}
                    </Field>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-4">
                <button className="px-4 py-2 text-gray-700 bg-gray-300 rounded-lg dark:bg-gray-700 dark:text-white">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 text-white rounded-lg bg-primary hover:bg-blue-700">
                  Save Task
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

