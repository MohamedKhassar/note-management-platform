"use client"
import { createSlice } from "@reduxjs/toolkit";
import { addNote, deleteNote, getNotes, getOneNote, updateNote } from "./noteThunk";
import { redirect } from "next/navigation";

type CustomInit = {
    notes: [],
    loading: boolean,
    error: string | null | unknown
}

const initialState: CustomInit = {
    notes: [],
    loading: false,
    error: null
}

const noteSlice = createSlice({
    name: "note",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getNotes.pending, (state) => {
            state.loading = true
        }).addCase(getNotes.fulfilled, (state, action) => {
            state.loading = false
            state.notes = action.payload
        }).addCase(getNotes.rejected, (state, action) => {
            state.loading = false
            state.error = action.error
        })
        builder.addCase(addNote.pending, (state) => {
            state.loading = true
        }).addCase(addNote.fulfilled, (state) => {
            state.loading = false
        }).addCase(addNote.rejected, (state, action) => {
            state.loading = false
            state.error = action.error
        })
        builder.addCase(updateNote.pending, (state) => {
            state.loading = true
        }).addCase(updateNote.fulfilled, (state) => {
            state.loading = false
        }).addCase(updateNote.rejected, (state, action) => {
            state.loading = false
            state.error = action.error
        })
        builder.addCase(deleteNote.pending, (state) => {
            state.loading = true
        }).addCase(deleteNote.fulfilled, (state) => {
            state.loading = false
        }).addCase(deleteNote.rejected, (state, action) => {
            state.loading = false
            state.error = action.error
        })
        builder.addCase(getOneNote.pending, (state) => {
            state.loading = true
        }).addCase(getOneNote.fulfilled, (state, action) => {
            state.loading = false
            state.notes = action.payload
        }).addCase(getOneNote.rejected, (state, action) => {
            state.loading = false
            state.error = action.error
        })
    }
})

export default noteSlice;