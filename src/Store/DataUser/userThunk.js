import { createAsyncThunk } from "@reduxjs/toolkit";
import { currentUser, loginUser, logoutUser, signUpUser, token } from "Service/userAPI";

export const signUpThunk = createAsyncThunk(
    'auth/signUp',
    async (credentials, { rejectWithValue }) => {
        try {
            const data = await signUpUser(credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const data = await loginUser(credentials)
            token.set(data.token)
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const logoutThunk = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await logoutUser()
            token.unSet()
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const refreshUserThunk = createAsyncThunk(
    'auth/refreshUser',
    async (_, { rejectWithValue, getState }) => {
        try {
            const sessionToken = getState().auth.token
            if (!sessionToken) {
                return rejectWithValue('Please login')
            }
            token.set(sessionToken)
            const data = await currentUser()
            return data.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)