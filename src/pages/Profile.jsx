import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Profilepic from "../assets/Chaya.webp"
import * as Yup from "yup"
export default function Profile() {
   const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    lastName: Yup.string().required("Last Name is required"),
    gender: Yup.string().required("Gender is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });
  return (
<div className="w-screen h-screen px-5 py-10 mx-auto shadow-md min-w-80">
  <div className="flex flex-col items-center mb-5 md:flex-row">
    <img className="w-16 h-16 border-2 rounded-full border-primary" src={Profilepic} alt="" />
    <div className="ml-5 font-family">
      <h1 className="text-2xl font-semibold text-center md:text-left">Narak Leng</h1>
      <p className="text-center text-gray-500 text-md md:text-left">narakleng12345@gmail.com</p>
    </div>
  </div>
  <h2 className="mb-4 text-2xl font-semibold text-center md:text-left">Change Your Personal Information</h2>
  
  <Formik
    initialValues={{
      firstName: "",
      username: "",
      email: "",
      lastName: "",
      gender: "",
      password: "",
    }}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      console.log("Form submitted:", values);
      setSubmitting(false);
    }}
  >
    {({ isSubmitting, resetForm }) => (
      <Form className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="block text-gray-800">First Name</label>
            <Field
              type="text"
              name="firstName"
              placeholder="Your First Name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="firstName" component="p" className="text-red-500 text-sm min-h-[20px]" />
          </div>

          <div className="flex flex-col">
            <label className="block text-gray-800">Username</label>
            <Field
              type="text"
              name="username"
              placeholder="Your Username"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="username" component="p" className="text-red-500 text-sm min-h-[20px]" />
          </div>

          <div className="flex flex-col">
            <label className="block text-gray-800">Email</label>
            <Field
              type="email"
              name="email"
              placeholder="narakleng1234@gmail.com"
              className="w-full px-4 py-2 border rounded-md placeholder-primary focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="email" component="p" className="text-red-500 text-sm min-h-[20px]" />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="block text-gray-800">Last Name</label>
            <Field
              type="text"
              name="lastName"
              placeholder="Your Last Name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="lastName" component="p" className="text-red-500 text-sm min-h-[20px]" />
          </div>

          <div className="flex flex-col">
            <label className="block text-gray-800">Gender</label>
            <Field
              as="select"
              name="gender"
              className="w-full px-4 py-2 text-gray-500 border rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled hidden>Select Gender</option>
              <option value="male" className="text-black">Male</option>
              <option value="female" className="text-black">Female</option>
            </Field>
            <ErrorMessage name="gender" component="p" className="text-red-500 text-sm min-h-[20px]" />
          </div>

          <div className="flex flex-col">
            <label className="block text-gray-800">Password</label>
            <Field
              type="password"
              name="password"
              placeholder="Set Up Your New Password"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="password" component="p" className="text-red-500 text-sm min-h-[20px]" />
          </div>
        </div>

        {/* Buttons (Full-Width) */}
        <div className="flex flex-col col-span-1 space-y-4 md:col-span-2 md:flex-row md:space-y-0 md:space-x-5">
          <button
            type="button"
            onClick={() => resetForm()}
            className="w-full px-6 py-2 bg-gray-300 rounded-md text-primary hover:bg-gray-400 md:w-auto"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-2 text-white rounded-md bg-primary hover:bg-blue-600 disabled:bg-gray-400 md:w-auto"
          >
            {isSubmitting ? "Updating..." : "Update Profile"}
          </button>
        </div>
      </Form>
    )}
  </Formik>
</div>

 
  );
}