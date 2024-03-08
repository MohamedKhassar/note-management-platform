"use client"
import { AppDispatch } from '@/store'
import { deleteNote, getNotes, getOneNote } from '@/store/notes/noteThunk'
import { Loader2, Paperclip, Pencil, Plus, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

type Note = {
  _id: string,
  title: string,
  content: string,
  date: Date
}

const page = () => {
  const nav = useRouter()
  const data = useSelector((state: any) => state.note)
  const [query,setQuery]=useState("")
  const notes: Note[] = data.notes
  const loading = data.loading
  const dispatch = useDispatch<AppDispatch>()
  const getAllNotes = () => {
    dispatch(getNotes(query))
  }
  useEffect(() => {
    getAllNotes()
  }, [query])

  const deleteOneNote = (id: string) => {
    dispatch(deleteNote(id)).then(() =>
      getAllNotes()
    )
  }
  return (
    <div>
      <div className='flex justify-between mb-12'>
        <div className='bg-slate-950 rounded-full text-white p-2 m-3 w-fit'>
          <Link href="/create">
            <Plus color="white" />
          </Link>
        </div> 
          <input
            onChange={(event) => setQuery(event.target.value)}
            className="bg-gray-300 w-1/2 text-gray-500 p-4 rounded-md shadow-sm"
            type="text"
            id="title"
            placeholder="Title"
          />
        </div>
      <div className={!loading ? `grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 lg:gap-14 gap-7 justify-items-center` : 'w-full h-[70vh] flex items-center justify-center'}>
        {!loading ? notes.map(note =>
          <div className='bg-slate-950 rounded-md text-white p-7 flex flex-col gap-y-7 h-60 w-64' key={note._id}>
            <Paperclip className='absolute translate-x-52 -translate-y-8' color='darkblue' size={30} />
            <h1 className='text-2xl capitalize' >{note.title}</h1>
            <p>{note.content}</p>
            <div className='flex items-end h-full justify-end gap-x-5 text-gray-600'>
              <small>{new Date(note.date).toDateString().replaceAll(" ", "-")}</small>
            </div>
            <div className='flex items-end h-full justify-end gap-x-5'>
              <div className='bg-red-700 rounded-full p-2 cursor-pointer'>
                <Trash2 onClick={() => deleteOneNote(note._id)} size={20} color='#000000' />
              </div>
              <Link href={`/${note._id}`}>
                <div className='bg-blue-900 rounded-full p-2 cursor-pointer'>
                  <Pencil size={20} color='#000000' />
                </div>
              </Link>
            </div>
          </div>
        ) : <div className='w-full flex justify-center'><Loader2 size={90} className='animate-spin' /></div>}
      </div>
    </div>
  )
}

export default page
