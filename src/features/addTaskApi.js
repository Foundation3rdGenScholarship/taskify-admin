import { getAceAccessToken } from "../lib/secureLocalStorage";
import { apiSlice } from "./api/apiSlice";

export const addTaskApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createTask: builder.mutation({
            query: (body) => {
                const token = getAceAccessToken(); 
                return {
                    url: "/tasks",
                    method: "POST",
                    body,
                    headers: {
                        Authorization: `Bearer ${token}`,  
                        "Content-Type": "application/json", 
                    }
                };
            }
        }),
        getTasks: builder.query({
            query: ({ limit, offset }) => {
                const token = getAceAccessToken();
                return {
                    url: `/tasks?limit=${limit}&offset=${offset}`,
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                };
            }
        }),
        deleteTask: builder.query({
            query:(task_id) =>{
                const token = getAceAccessToken();
                return{
                    url: `/tasks?id=eq.${task_id}`,
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            }
        }),
        getTodoTask:builder.query({
            query:({userId,limit,offset}) =>({
                url:`/tasks?user_id=eq.${userId}&limit=${limit}&offset=${offset}`,
                method:"GET",
                headers: {
                    Authorization: `Bearer ${getAceAccessToken()}`,
                    "Content-Type": "application/json"
                }
            })

        })

    })
});

export const { useCreateTaskMutation ,useGetTasksQuery, useDeleteTaskQuery,useGetTodoTaskQuery } = addTaskApi;
