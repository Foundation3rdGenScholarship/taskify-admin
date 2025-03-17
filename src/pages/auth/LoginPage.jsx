import { ArrowLeft } from "lucide-react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TaskifyLogoV2 from "../../assets/TaskifyLogoV2.png";
import BackgroundForLogin from "../../Components/BackgroundForLogin.jsx";
import UserNameInput from "../../Components/UserNameInput.jsx";
import { Link, Navigate, useNavigate } from "react-router";
import PasswordInput from "../../Components/Password_Input.jsx";
import { useLoginMutation } from "../../features/auth/authApiSlice.js";
import { useEffect, useState } from "react";
import { setAccessToken } from "../../lib/secureLocalStorage.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { useGoogleLogin } from "@react-oauth/google";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .typeError("Invalid Email address"),
  password: Yup.string().required("Password is required"),
});
export default function LoginPage() {
  const [postLogin, { data, isLoading, isError, error }] = useLoginMutation();
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();
  console.log("submit :", submit);

  const LoginWithGoogle = useGoogleLogin({
    onSuccess: async (result) => {
      console.log("Login Success with Google:", result.access_token);
      if (result?.access_token) {
        const access_token = result.access_token;
        console.log(access_token)
        
        // console.log(access_token);
        try {
          const userData = await fetch(
            "https://www.googleapis.com/oauth2/v1/userinfo",
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
                Accept: "application/json",
              },
            }
          ).then((data) => data.json());

          console.log("userData :", userData);
          if (userData) {
            try {
              const registerValue = {
                email: userData.email,
                password: `${userData.email}${import.meta.env.VITE_SECRET_KEY}`,
              };
              const response = await postLogin(registerValue).unwrap();
              console.log(
                "Register with goole response succesfully :",
                response
              );
              if (response) {
                toast.success("Successfully registered with Google");
                setTimeout(() => {
                  navigate("/dashboard", { state: response.token });
                  setAccessToken(response.token);
                }, 800);
              }
            } catch (error) {
              console.log("error message :", error);
              toast.error("Failed to register with Google");
            }
          }
        } catch (err) {
          console.log("APi google error :", err);
        }
      }
      // handleLoginWithGoogleSuccess(result);
    },
  });

  

  const handleSubmit = async (value) => {
    console.log("Submitting value:", value);

    try {
      const response = await postLogin(value).unwrap();
      console.log("Login successful, response:", response);
      setAccessToken(response.token);

      let token = response.token ? true : false;
      console.log("Token status:", token);
      setSubmit(token);

      setTimeout(() => {
        console.log("responToken :", response.token);
        if (token) {
          toast.success("Login successful!");
          setTimeout(() => {
            navigate("/dashboard", { state: { token: response.token } });
          }, 800);
        } else {
        }
      }, 100);
    } catch (err) {
      console.error(
        "Login failed:",
        err?.data?.message || err.message || "Unknown error"
      );
      toast.error(err?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="relative w-full min-h-screen overflow-hidden dark:bg-[#121321]">
        <BackgroundForLogin />
        <div className="absolute flex items-center justify-center w-full mx-auto my-4 align-middle sm:my-10 md:my-20 ">
          <div className="flex flex-col items-center p-16 pt-8 space-y-4 transition-all duration-500 ease-out bg-white rounded-lg shadow dark:rounded-lg dark:text-white dark:bg-white/10 hover:dark:bg-white/30 backdrop-opacity-5 backdrop-invert backdrop-blur-3xl ">
            <Link to="/"  className="relative items-start w-full right-8">
              <ArrowLeft />
            </Link>
 <motion.img
      src={TaskifyLogoV2 || "/placeholder.svg"}
      alt="Taskify Logo"
      width={150}
      height={100}
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.1, 1] }} // Zoom in and out
      transition={{
        duration: 2, // Duration of one cycle (1 second)
        repeat: Infinity, // Repeat the animation forever
        ease: "easeInOut"
      }}
    />

            <p className="font-medium text-txt16 md:text-txt18 lg:text-[24px] text-primary dark:text-white">
            Log in to your account
            </p>

            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                console.log("values", values);
                handleSubmit(values);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="w-full space-y-4">
                  <UserNameInput />
                  <PasswordInput />

                  <button
                    type="submit"
                    className={
                      submit
                        ? `cursor-not-allowed opacity-70 w-full h-10 text-white rounded-lg bg-primary hover:bg-subaccent text-txt12 md:text-txt14 lg:text-txt16`
                        : `w-full h-10 text-white rounded-lg bg-primary hover:bg-subaccent text-txt16 font-semibold md:text-txt14 lg:text-txt16`
                    }
                    // disabled={submit}
                  >
                    {isLoading ? "Logging in..." : "Log In"}
                  </button>
                </Form>
              )}
            </Formik>

            <p className="text-gray-600 text-txt14 dark:text-white">Or continue with: </p>

            <button
              onClick={LoginWithGoogle}
              type="button"
              className="flex items-center justify-center w-full h-10 font-bold text-gray-500 border-2 rounded-md border-primary hover:bg-subaccent hover:text-white dark:text-white"
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                width={20}
                height={20}
                className="mr-2 "
              />
             <h1> Google</h1>
            </button>

            <div className="text-sm text-center">
              <Link href="/" className="text-primary hover:underline dark:text-white">
                Cannot Log in? Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
