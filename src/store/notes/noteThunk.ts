import { createAsyncThunk } from "@reduxjs/toolkit";
import { redirect } from "next/navigation";

export const getNotes = createAsyncThunk("note/getNotes", async (_, { rejectWithValue }) => {
    try {
        const res = await fetch("http://localhost:3000/api/notes")
        const data = await res.json()
        return data
    } catch (error) {
        const message = (error as Error).message
        return rejectWithValue(message);
    }
});

export const addNote = createAsyncThunk("note/addNote", async (credentials: { title: string, content: string }, { rejectWithValue }) => {
    try {
        const res = await fetch("", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(credentials)
        })
        const data = await res.json()
        return data
    } catch (error) {
        const message = (error as Error).message
        return rejectWithValue(message);
    }
})
export const updateNote = createAsyncThunk("note/updateNote", async (credentials: { id: string, title: string, content: string }, { rejectWithValue }) => {
    try {
        const res = await fetch("", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify({ title: credentials.title, content: credentials.content })
        })
        const data = await res.json()
        return data
    } catch (error) {
        const message = (error as Error).message
        return rejectWithValue(message);
    }
})
export const deleteNote = createAsyncThunk("note/deleteNote", async (id: string, { rejectWithValue }) => {
    console.log(id)
    try {
        const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "DELETE",
        })
    } catch (error) {
        const message = (error as Error).message
        return rejectWithValue(message);
    }
})