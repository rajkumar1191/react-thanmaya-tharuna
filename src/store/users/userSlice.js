import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchUsersApi, createUserApi, deleteUserApi } from "./userApi";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetchUsersApi();
  return response.data;
});

export const createUser = createAsyncThunk("users/createUser", async (user) => {
  const response = await createUserApi(user);
  return response.data;
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  await deleteUserApi(id);
  return id;
});

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter((user) => user.id !== action.payload);
            });
    },
});

export default userSlice.reducer;