import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useGetPatchMutation, useGetDetailTaskQuery } from "../features/addTaskApi";
import { toast } from "react-toastify";

export default function EditTaskPopup() {
  const { id } = useParams(); // Get task ID from URL
  const { data: taskData, error, isLoading } = useGetDetailTaskQuery(id);
  const [patchData] = useGetPatchMutation();
  const navigate=useNavigate();

  // Loading & Error Handling
  if (isLoading) return <p className="text-center">Loading task details...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;
  if (!taskData || taskData.length === 0) return <p className="text-center">Task not found.</p>;

  const task = taskData[0];

  // Populate initial values dynamically
  const initialValues = {
    title: task.title || "",
    note: task.note || "",
    start_date: task.start_date || "",
    due_date: task.due_date || "",
    reminder_date: task.reminder_date || "",
    is_completed: task.is_completed ? "true" : "false",
    is_important: task.is_important ? "true" : "false",
    is_archived: task.is_archived ? "true" : "false",
    is_deleted: task.is_deleted ? "true" : "false",
    category_id: task.category_id || "",
    position: task.position || 1,
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Task title is required"),
    start_date: Yup.date().required("Start date is required"),
    due_date: Yup.date().required("Due date is required"),
    reminder_date: Yup.date(),
    category_id: Yup.string().required("Category is required"),
  });

  // Handle updating task
  const handlePatch = async (values) => {
    try {
      await patchData({ taskId: id, body: values }).unwrap();
      console.log("Task updated successfully:", values);
      toast.success("Task updated successfully")
      navigate(`/todolistdetail/${id}`);
      window.location.reload();
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error("Error updating task")
    }
  };

  // Handle task status change
  const handleStatusChange = (field, setFieldValue, values) => {
    const updatedValues = {
      ...values,
      is_completed: "false",
      is_important: "false",
      is_archived: "false",
      is_deleted: "false",
      [field]: "true", // Set only the selected field to true
    };
    Object.entries(updatedValues).forEach(([key, value]) => {
      setFieldValue(key, value);
    });
  };

  return (
    <div className="flex items-center justify-center w-full h-screen font-roboto">
      <div className="bg-white dark:bg-gray-900 dark:text-gray-200 p-6 rounded-lg shadow-lg w-[95%] max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between text-xl font-semibold">
          <h3>
            <span>Final Project of Foundation G3-Taskify</span>
            <span className="px-1">
              <FontAwesomeIcon icon={faGreaterThan} />
            </span>
            <span className="pr-1">{task.title}</span>
          </h3>
        </div>

        {/* Divider */}
        <div className="w-full mx-3 mt-4 bg-transparent border-2 border-dashed border-secondary"></div>

        {/* Form Section */}
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handlePatch}>
          {({ setFieldValue, values }) => (
            <Form className="p-6 space-y-4">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Left Section */}
                <div>
                  <div className="pb-5">
                    <label className="font-medium text-primary">Task Title</label>
                    <Field type="text" name="title" className="w-full p-2 border rounded-md dark:bg-gray-800 border-primary" />
                    <ErrorMessage name="title" component="div" className="text-sm text-red-500" />
                  </div>
                  <div className="pb-5">
                    <label className="font-medium text-primary">Task Note</label>
                    <Field as="textarea" name="note" className="w-full h-24 p-2 border rounded-md border-primary dark:bg-gray-800" />
                  </div>
                </div>

                {/* Right Section */}
                <div>
                  <div className="pb-5">
                    <label className="font-medium text-primary">Start Date</label>
                    <Field type="date" name="start_date" className="w-full p-2 border rounded-md dark:bg-gray-800 border-primary" />
                  </div>
                  <div className="pb-5">
                    <label className="font-medium text-primary">Due Date</label>
                    <Field type="date" name="due_date" className="w-full p-2 border rounded-md dark:bg-gray-800 border-primary" />
                  </div>
                  <div className="pb-5">
                    <label className="font-medium text-primary">Reminder Date</label>
                    <Field type="date" name="reminder_date" className="w-full p-2 border rounded-md dark:bg-gray-800 border-primary" />
                  </div>
                </div>
              </div>

              {/* Task Status Fields */}
              <div className="grid grid-cols-1 gap-6 pb-5 md:grid-cols-2">
                {["is_completed", "is_important", "is_archived", "is_deleted"].map((field) => (
                  <div key={field}>
                    <label className="font-medium capitalize text-primary">{field.replace("_", " ")}</label>
                    <Field
                      as="select"
                      name={field}
                      value={values[field]} // Ensure correct value from Formik state
                      onChange={() => handleStatusChange(field, setFieldValue, values)}
                      className="w-full p-2 border rounded-md dark:bg-gray-800 border-primary"
                    >
                      <option value="false">False</option>
                      <option value="true">True</option>
                    </Field>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-4">
                <Link to={`/todolistdetail/${id}`} className="px-4 py-2 text-gray-700 bg-gray-300 rounded-lg dark:bg-gray-700 dark:text-white">
                  Cancel
                </Link>
                <button type="submit" className="px-4 py-2 text-white rounded-lg bg-primary hover:bg-blue-700">
                  Save Task
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
