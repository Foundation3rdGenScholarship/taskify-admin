import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { usePostCheckListMutation } from "../features/addTaskApi";

export default function CheckList({taskId , taskPosition}) {
    const [postchecklist,{isError,isLoading,isSuccess}]=usePostCheckListMutation()
    console.log("taskId: " + taskId+" taskPosition: " + taskPosition);


    
  const initialValues = {
    id: uuidv4(),
    task_id: taskId,
    title: "",
    is_checked: false,
    position: taskPosition,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    is_checked: Yup.boolean(),
    position: Yup.number().min(1, "Position must be at least 1").required("Position is required"),
  });


  const handleSubmit = async (values, { setSubmitting }) => {
    console.log('values :>> ', values);
    const response = await postchecklist(values).unwrap();
    window.location.reload();
    console.log('response add check List :>> ', response);
  };

  return (
    <div className="w-full h-auto p-6 mx-auto bg-white rounded-t-lg shadow-md dark:bg-gray-800 dark:text-white">
      <h2 className="mb-6 font-bold text-center text-[28px] text-primary">Add checkList</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label className="block font-semibold text-txt20 text-primary">Title</label>
              <Field type="text" name="title" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
              <ErrorMessage name="title" component="div" className="text-sm text-red-500" />
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
              {isSubmitting ? "Submitting..." : "Submit Task"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}