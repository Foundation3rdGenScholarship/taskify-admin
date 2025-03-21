import { getAceAccessToken } from "../../lib/secureLocalStorage";
import { apiSlice } from "../api/apiSlice";
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //REGISTER
    register: builder.mutation({
      query: (body) => ({
        url: "/rpc/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/rpc/login",
        method: "POST",
        body,
      }),
    }),
    getMe: builder.query({
      query: () => ({
        url: "/rpc/me",
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAceAccessToken()}`, // Include the correct token
          "Content-Type": "application/json", // Ensure content type is set
        },
      }),
    }),
    editpassword: builder.mutation({
      query: (body) => ({
        url: "/rpc/change_password",
        method: "POST",
        body,
      }),
    }),
    getMebyEmail: builder.query({
      query: (email) => ({
        url: `/rpc/find_user_by_email?user_email=${email}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAceAccessToken()}`, // Include the correct token
          "Content-Type": "application/json", // Ensure content type is set
        },
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetMeQuery,
  useEditpasswordMutation,
  useGetMebyEmailQuery,
} = authApiSlice;
