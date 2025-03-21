import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "../features/api/apiSlice";
import { counterSlice } from "../features/counter/counterSlic"; // ✅ FIXED: Import the reducer

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [counterSlice.reducerPath]: counterSlice.reducer, // ✅ FIXED: Use the correct reducer reference
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
