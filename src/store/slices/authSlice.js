import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        token:null,
        isAuthenticated:false,
        isLoading:false,
        error:null
    },
    reducers:{
         loginRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    loginFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

        logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },

    
    restoreAuth(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user || null;
      state.isAuthenticated = !!action.payload.token;
    },

    }
})

export const {loginRequest, loginSuccess, loginFailure, logout, restoreAuth} = authSlice.actions
export default authSlice.reducer