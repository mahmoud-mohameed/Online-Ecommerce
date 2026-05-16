import { configureStore } from "@reduxjs/toolkit";
import AppSlice from './AppSlice'

export const Store =configureStore({
    reducer:{
        item: AppSlice,
    }
})