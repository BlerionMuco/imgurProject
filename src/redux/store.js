import { configureStore } from "@reduxjs/toolkit";
import PostsSlice from "./slice";

export const store = configureStore({
    reducer: {
        posts: PostsSlice,
    },
});