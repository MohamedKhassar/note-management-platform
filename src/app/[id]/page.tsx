"use client"; // This is a client component 👈🏽

import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { updateNote } from "@/store/notes/noteThunk"; // Assumed updateNote thunk is available
import { useParams, useRouter } from 'next/navigation';

const page = () => {
    const { id } = useParams<{id: string}>(); // Get note ID from URL
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        await dispatch(updateNote({id, title, content}))
        .then(() => {
            router.push('/'); 
        });
    };
    
    return (
        <div className="w-full flex justify-center">
            <section className="w-6/12 min-w-96 max-w-xl bg-slate-950 p-4 mt-4 h-full rounded-md ">
                <h2 className="text-center text-gray-100 text-2xl font-semibold">
                Updaet Note
                </h2>
                <div className="max-w-lg  mx-auto">
                    <form onSubmit={handleSubmit} className="p-4 text-lg text-gray-800 bg-gray-900 mt-5 mb-4 rounded-md flex flex-col">
                        <div className="mb-4">
                            <input
                                onChange={(event) => setTitle(event.target.value)}
                                className="bg-gray-300 p-4 w-full rounded-md shadow-sm"
                                type="text"
                                id="title"
                                placeholder="Title"
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                onChange={(event) => setContent(event.target.value)}
                                className="bg-gray-300 p-4 w-full rounded-md shadow-sm"
                                id="content"
                                placeholder="Content"
                            ></textarea>
                        </div>
                        <button type="submit" className="py-2 px-4 bg-green-500 hover:bg-green-400 text-gray-100 rounded-md shadow-sm font-medium">
                            Update note
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default page
