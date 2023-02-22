/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTotalComplaintsPerDay = createAsyncThunk('dashboard/fetchTotalComplaintsPerDay', async () => {
    const response = await fetch('https://powermap-backend-production.up.railway.app/api/v1/dashboard/total_complaints_day');
    if (!response.ok) {
        throw new Error('Failed to fetch total complaints per day');
    }
    const data = await response.json();
    console.log('received:');
    console.table(data);
    return data;
});

export const fetchTotalComplaintsPerArea = createAsyncThunk('dashboard/fetchTotalComplaintsPerArea', async () => {
    const response = await fetch('https://powermap-backend-production.up.railway.app/api/v1/dashboard/total_complaints_area');
    if (!response.ok) {
        throw new Error('Failed to fetch total complaints per area')
    }
    const data = await response.json();
    return data;
});

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        statusPerDay: 'idle',
        statusPerArea: 'idle',
        error: null,
        totalComplaintsPerDay: [],
        totalComplaintsPerArea: [],
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTotalComplaintsPerDay.pending, (state) => {
                state.statusPerDay = 'loading';
            })
            .addCase(fetchTotalComplaintsPerDay.fulfilled, (state, action) => {
                state.statusPerDay = 'succeeded';
                state.totalComplaintsPerDay = action.payload;
            })
            .addCase(fetchTotalComplaintsPerDay.rejected, (state, action) => {
                state.statusPerDay = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchTotalComplaintsPerArea.pending, (state) => {
                state.statusPerArea = 'loading';
            })
            .addCase(fetchTotalComplaintsPerArea.fulfilled, (state, action) => {
                state.statusPerArea = 'succeeded';
                state.totalComplaintsPerArea = action.payload;
            })
            .addCase(fetchTotalComplaintsPerArea.rejected, (state, action) => {
                state.statusPerArea = 'failed';
                state.error = action.error.message;
            });
    }
});

export default dashboardSlice.reducer;