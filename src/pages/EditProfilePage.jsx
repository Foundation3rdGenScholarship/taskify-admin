import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEditpasswordMutation } from "../features/auth/authApiSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditProfilePage() {
  const [showPassword, setShowPassword] = useState(false);

  const [editepassword, { data }] = useEditpasswordMutation();
  //   const handleEditPassword = async ()=>{
  //     try {
  //       await editepassword({
  //         variables: {
  //           old_password: formik.values.old_password,
  //           newPassword: formik.values.newPassword,
  //           confirmPassword: formik.values.confirmPassword,
  //         },
  //       });
  //       console.log("Password updated successfully");
  //     } catch (error) {
  //       console.error("Error updating password:", error);
  //     }

  //   }

  const formik = useFormik({
    initialValues: {
      confirmed_password: "",
      new_password: "",
      old_password: "",
    },
    validationSchema: Yup.object({
      old_password: Yup.string().required("Current password is required"),
      new_password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("New password is required"),
      confirmed_password: Yup.string()
        .oneOf([Yup.ref("new_password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: async (values) => {
      console.log("Edited password updated successfully", values);
      const EditResponse = await editepassword(values).unwrap();
      console.log("EditResponse :>> ", EditResponse);
  
        toast.success("Updated password successfully");
      

      console.log(EditResponse);
    },
  });

  return (
    <>
      
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-black bg-background dark:text-white dark:bg-gray-900 ">
      <ToastContainer/>
        <div className="p-6 bg-white shadow-lg rounded-2xl dark:bg-gray-800 w-96">
          <h2 className="mb-4 text-[24px] font-bold dark:text-white text-center text-primary">
            Change Password
          </h2>
          <form onSubmit={formik.handleSubmit} className="w-full space-y-4">
            <PasswordInput
              label="Current Password"
              name="old_password"
              value={formik.values.old_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.old_password && formik.errors.old_password}
              showPassword={showPassword}
              togglePassword={() => setShowPassword(!showPassword)}
            />

            <PasswordInput
              label="New Password"
              name="new_password"
              value={formik.values.new_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.new_password && formik.errors.new_password}
              showPassword={showPassword}
              togglePassword={() => setShowPassword(!showPassword)}
            />

            <PasswordInput
              label="Confirm Password"
              name="confirmed_password"
              value={formik.values.confirmed_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirmed_password &&
                formik.errors.confirmed_password
              }
              showPassword={showPassword}
              togglePassword={() => setShowPassword(!showPassword)}
            />

            <button
              type="submit"
              className={`w-full py-2 font-bold text-white transition-all bg-primary dark:bg-blue-600 rounded-lg shadow-md hover:bg-subaccent dark:hover:bg-blue-500 ${
                formik.isSubmitting ? "cursor-not-allowed opacity-70" : ""
              }`}
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Saving..." : "Save Password"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

function PasswordInput({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  showPassword,
  togglePassword,
}) {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium">{label}</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={`Enter ${label.toLowerCase()}`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className="w-full p-3 bg-white border border-gray-600 rounded-lg dark:text-gray-900 dark:bg-gray-200 dark:border-gray-300 focus:border-blue-400"
        />
        <button
          type="button"
          onClick={togglePassword}
          className="absolute inset-y-0 flex items-center text-gray-400 dark:text-gray-600 right-3 hover:text-white"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
