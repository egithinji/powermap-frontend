import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from '../components/dashboard/dashboardSlice';

export default configureStore({
    reducer: {
        dashboard: dashboardReducer
    }
});