import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
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
        await axios.post("http://localhost:3000/api/notes", credentials)
    } catch (error) {
        const message = (error as Error).message
        return rejectWithValue(message);
    }
})
export const updateNote = createAsyncThunk("note/updateNote", async (credentials: { id: string, title: string, content: string }, { rejectWithValue }) => {
    try {
        await axios.put(`http://localhost:3000/api/notes/${credentials.id}`, { title: credentials.title, content: credentials.content })
    } catch (error) {
        const message = (error as Error).message
        return rejectWithValue(message);
    }
})
export const deleteNote = createAsyncThunk("note/deleteNote", async (id: string, { rejectWithValue }) => {
    console.log(id)
    try {
        await axios.delete(`http://localhost:3000/api/notes/${id}`)
    } catch (error) {
        const message = (error as Error).message
        return rejectWithValue(message);
    }
})
export const getOneNote = createAsyncThunk("note/getOneNote", async (id: string, { rejectWithValue }) => {
    try {
        const res = await axios.get(`http://localhost:3000/api/notes/${id}`)
        const data = await res.data
        return data
    } catch (error) {
        const message = (error as Error).message
        return rejectWithValue(message);
    }
})