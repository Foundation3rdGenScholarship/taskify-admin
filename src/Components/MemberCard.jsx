import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { X } from "lucide-react";
import { useGetMebyEmailQuery } from "../features/auth/authApiSlice";
import { useEffect, useState } from "react";
import { usePostMemboerMutation } from "../features/workspaceApi";
import { v4 as uuidv4 } from "uuid";

const AddMemberForm = ({ workspace_id, isOpen, closeModal }) => {
  if (!isOpen) return null;
  const [email, setEmail] = useState("");
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false); // Track if the email is submitted

  console.log("workspace id in Member card:", workspace_id);

  const {
    data: meByEmail,
    isError,
    isLoading,
    isSuccess,
  } = useGetMebyEmailQuery(email, { skip: !email });

  const [postMember, { isLoading: isPosting }] = usePostMemboerMutation();

  useEffect(() => {
    // Only proceed if email is submitted and user data is available
    if (meByEmail?.id && isEmailSubmitted) {
      const postUsertoWorkspace = {
        id: uuidv4(),
        user_id: meByEmail.id, // FIXED: Using correct variable
        workspace_id: workspace_id,
        is_full_control: true,
      };

      console.log("postUsertoWorkspace :>> ", postUsertoWorkspace);

      const addMember = async () => {
        try {
          const response = await postMember(postUsertoWorkspace).unwrap();
          console.log("response add member :>> ", response);
          console.log("User added to workspace successfully");
          closeModal();
        } catch (error) {
          console.error("Error adding user to workspace:", error.message);
        }
      };

      addMember();
    }
  }, [meByEmail, isEmailSubmitted, workspace_id, postMember, closeModal]);

  const handleAddMember = (values) => {
    console.log("Adding member with email:", values.email);
    setEmail(values.email); // Trigger API call and set email state
    setIsEmailSubmitted(true); // Mark email as submitted
  };

  if (isError) {
    return (
      <p className="text-red-500">
        Error fetching user data. Please try again.
      </p>
    );
  }

  if (isLoading || isPosting) {
    return <p className="text-blue-500">Loading user data...</p>;
  }

  if (isSuccess && meByEmail) {
    return (
      <p className="text-green-500">
        Found user: <strong>{meByEmail.name}</strong>
      </p>
    );
  }

  return (
         
  
    <div
      className="sticky h-[100vh] top-0 bottom-0 inset-0 z-9 flex items-center justify-center bg-black bg-opacity-50 font-roboto"
      onClick={closeModal}
    >
      <div
        className="sticky max-w-[550px] w-full bg-white dark:bg-[#292A2B] rounded-lg shadow-lg p-[25px]"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close Button */}
       <button
          onClick={closeModal}
          className="absolute text-gray-400 top-2 right-2 hover:text-gray-600"
        >
          <X size={20} />
        </button>
  
        <h2 className="text-[20px] font-bold text-primary mb-4 dark:text-white">
          Add Member by Email
        </h2>
  
        {/* Form */}
        <Formik
          initialValues={{ email: '' }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required('Email is required'),
          })}
          onSubmit={handleAddMember}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {/* Email Input */}
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter member's email"
                  className="border rounded-[8px] p-2 focus:border-primary border-primary focus:ring-1 focus:ring-blue-300 w-full h-[40px] dark:bg-[#242424] focus:outline-none dark:text-white dark:placeholder:text-gray-300"
                />
                <div className="min-h-[20px]">
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>
              </div>
  
              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-[130px] h-[40px] rounded-[8px] text-white ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-primary hover:bg-blue-600'
                  }`}
                >
                  {isSubmitting ? 'Adding...' : 'Add Member'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );

};

export default AddMemberForm;
