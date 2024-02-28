import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNotes = createAsyncThunk("note/getNotes", async () => {
    try {
        const res = await fetch("http://localhost:3000/api/notes")
        const data = await res.json()
        return data
    } catch (error) {
        const message = (error as Error).message
        throw Error(message);
    }
});

export const addNote = createAsyncThunk("note/addNote", async (credentials: { title: string, content: string }, thunkAPI) => {
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
        return thunkAPI.rejectWithValue(message);
    }
})
export const updateNote = createAsyncThunk("note/updateNote", async (credentials: { id: string, title: string, content: string }, thunkAPI) => {
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
        return thunkAPI.rejectWithValue(message);
    }
})
export const deleteNote = createAsyncThunk("note/deleteNote", async (credentials: { id: string }, thunkAPI) => {
    try {
        const res = await fetch("", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "DELETE",
        })
        const data = await res.json()
        return data
    } catch (error) {
        const message = (error as Error).message
        return thunkAPI.rejectWithValue(message);
    }
})