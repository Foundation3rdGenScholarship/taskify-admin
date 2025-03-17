// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const AddMemberForm = () => {
//   const handleAddMember = async (values, { resetForm }) => {
//     console.log('Adding member with email:', values.email);

//     try {
//       const response = await fetch('http://34.101.205.26:3000/add-member', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(values),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to add member');
//       }

//       console.log('Member added successfully');
//       resetForm();
//     } catch (error) {
//       console.error('Error adding member:', error.message);
//     }
//   };

//   return (
//     <div className="max-w-[550px] mx-auto mt-10 p-[25px] border border-gray-300 rounded-lg shadow-lg">
//       <h2 className="text-[20px] font-bold text-pri mb-4">Add Member by Email</h2>
//       <Formik
//         initialValues={{ email: '' }}
//         validationSchema={Yup.object({
//           email: Yup.string()
//             .email('Invalid email address')
//             .required('Email is required'),
//         })}
//         onSubmit={handleAddMember}
//       >
//         {({ isSubmitting }) => (
//           <Form className="space-y-4">
//             {/* Email Input */}
//             <div>
//               <Field
//                 type="email"
//                 name="email"
//                 placeholder="Enter member's email"
//                 className="border rounded-[8px] p-2 w-full h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               {/* Reserve space for error message to avoid shifting */}
//               <div className="min-h-[20px]">
//                 <ErrorMessage
//                   name="email"
//                   component="div"
//                   className="text-red-500 text-sm mt-1"
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`w-[130px] h-[40px] rounded-[8px] text-white ${
//                   isSubmitting
//                     ? 'bg-gray-400 cursor-not-allowed'
//                     : 'bg-blue-500 hover:bg-blue-600'
//                 }`}
//               >
//                 {isSubmitting ? 'Adding...' : 'Add Member'}
//               </button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default AddMemberForm;
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { X } from 'lucide-react';

const AddMemberForm = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  const handleAddMember = async (values, { resetForm }) => {
    console.log('Adding member with email:', values.email);

    try {
      const response = await fetch('http://34.101.205.26:3000/add-member', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to add member');
      }

      console.log('Member added successfully');
      resetForm();
      closeModal(); // Close the modal after success
    } catch (error) {
      console.error('Error adding member:', error.message);
    }
  };

 return (
  <div
    className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center  md:justify-end z-9"
    onClick={closeModal}
  >
    <div
      className="
        max-w-[550px] w-full bg-white dark:bg-gray-500 rounded-lg shadow-lg p-[25px] relative 
        -top-[650px] md:right-[32px] md:-top-[455px] md:translate-y-0 
        lg:right-[35px] lg:-top-[620px] lg:-translate-y-1/2
      "
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
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
                className="border rounded-[8px] p-2 w-full h-[40px] dark:bg-gray-400 focus:outline-none dark:text-white focus:ring-2 focus:ring-blue-500 dark:placeholder:text-white"
              />
              {/* Reserve space for error message */}
              <div className="min-h-[20px]">
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
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
