import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    postsLoading: false,
    message: "",
    postOnModal: {}
};

export const getPosts = createAsyncThunk(
    "posts/fetchbyUrl",
    async ({ section = "hot", mature = false, viral = false, sort = "viral", window = "all" }) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer 3df7b4400233ada1e6459097fddeb48dac91641e");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(`https://api.imgur.com/3/gallery/${section}/${sort}/${window}/1?showViral=${viral}&mature=${mature}&album_previews=false&page=1`, requestOptions).catch(error => console.log('error', error));
        const data = await response.json();
        return { data };
    }
);

const PostsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postOnModal: (state, action) => {
            console.log(action.payload);
            state.postOnModal = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state, action) => {
            state.postsLoading = true;
        });
        builder.addCase(getPosts.rejected, (state, action) => {
            state.postsLoading = false;
            state.message = " Oops something goes wrong... :("
        });
        builder.addCase(getPosts.fulfilled, (state, action) => {
            console.log(action.payload);
            state.postsLoading = false;
            state.message = " Oops something goes wrong... :("
            state.posts = action.payload.data
        });
    },
});

export const { postOnModal } = PostsSlice.actions;
export default PostsSlice.reducer;