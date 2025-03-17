import { getAceAccessToken } from "../../lib/secureLocalStorage";
import { apiSlice } from "../api/apiSlice";
export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        //REGISTER
        register: builder.mutation({
            query: (body) => ({
                url: "/rpc/register",
                method: "POST",
                body
            })
        }),
        login: builder.mutation({
            query: (body) => ({
                url: "/rpc/login",
                method: "POST",
                body
            })
        }),
        getMe: builder.query({
          query: ()=>({
            url:"/rpc/me",
            method: "GET",
            headers: {
                Authorization: `Bearer ${getAceAccessToken()}`,  // Include the correct token
                "Content-Type": "application/json", // Ensure content type is set
            }
          })  
        }),
        editpassword: builder.mutation({
            query: (body) => ({
                url: "/rpc/change_password",
                method: "POST",
                body
            })

        })
    })
})

export const { useRegisterMutation,useLoginMutation,useGetMeQuery,useEditpasswordMutation } = authApiSlice;
