import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "blog",
  initialState: {
    posts: [],
    selectedPost: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchPostsRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchPostsSuccess: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    fetchPostsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    fetchPostByIdRequest: (state) => {
      state.isLoading = true;
      state.error = null;
      state.selectedPost = null;
    },
    fetchPostByIdSuccess: (state, action) => {
      state.isLoading = false;
      state.selectedPost = action.payload;
    },
    fetchPostByIdFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchPostByIdRequest,
  fetchPostByIdSuccess,
  fetchPostByIdFailure,
} = postsSlice.actions;
export default postsSlice.reducer;
