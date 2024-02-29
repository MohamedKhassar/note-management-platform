"use client"; // This is a client component 👈🏽

import { FormEvent, useState } from "react";
import axios from 'axios';

const page = () => {
    const [title, setTitle] = useState(""); // I can use client hooks 
    const [content, setContent] = useState("");
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();        
        try{
            await axios.post('api/notes', { title, content })
            .then(() => alert('Note Added'));
            
            setTitle("");
            setContent("")
        } catch(err){
            console.log(err);
        }
    };
    
    return (
        <div>
            <section className="max-w-full bg-slate-950 p-4 mt-4 h-full rounded-md">
                <h2 className="text-center text-gray-100 text-2xl font-semibold">Create Note</h2>
                <div className="max-w-lg mx-auto">
                    <form onSubmit={handleSubmit} className="p-4 bg-gray-900 mt-5 mb-4 rounded-md flex flex-col">
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
                        Add note
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default page
