import { Field } from "formik"
import React from "react";

export default function UserNameInput() {
    return (
        <div>
           <Field name="email">
  {({ field, meta: { touched, error } }) => (
    <div className="space-y-1">
      <div className="flex items-center h-10 mb-4 align-middle rounded-md w-60 md:w-80">
        <input
          {...field}
          type="text"
          placeholder="Email"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-txt12 md:text-txt14 lg:text-txt16 
          ${
            touched && error 
              ? "border-accent" 
              : "border-gray-300"
          }
          dark:text-black dark:bg-white`} // 👈 Set dark text and background color explicitly
        />
      </div>
      {touched && error && <p className="text-sm text-accent">{error}</p>}
    </div>
  )}
</Field>

        </div>
    )
}


