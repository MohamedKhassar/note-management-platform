"use client"; // This is a client component 👈🏽

import { FormEvent, useState } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { addNote } from "@/store/notes/noteThunk";
import { redirect, useRouter } from 'next/navigation'
import { revalidatePath } from 'next/cache'




const page = () => {
    const [title, setTitle] = useState(""); // I can use client hooks 
    const [content, setContent] = useState("");
    const [added, setAdded] = useState("");
    const dispatch = useDispatch<AppDispatch>();
    const router=useRouter()
     
    // const fieldEmpty = () => {
    //     return title === "" || content === "";
    // };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        dispatch(addNote({title, content})).then(()=>
       router.push("/"))
    };
    
    return (
        <div className="w-full flex justify-center">
            <section className="w-6/12 min-w-96 max-w-xl bg-slate-950 p-4 mt-4 h-full rounded-md ">
                <h2 className="text-center text-gray-100 text-2xl font-semibold">
                Create A New Note
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
                        <div className="w-full text-center">
                            <p className="text-green-400 p-4 text-lg">{added}</p>
                        </div>
                        <button type="submit" className="py-2 px-4 bg-green-500 hover:bg-green-400 text-gray-300 rounded-md shadow-sm font-medium">
                            Add note
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default page
