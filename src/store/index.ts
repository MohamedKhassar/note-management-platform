import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./notes/noteSlice";

const store = configureStore({
    reducer: {
        note: noteSlice.reducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch