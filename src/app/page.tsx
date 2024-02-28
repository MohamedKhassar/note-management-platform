"use client"
import { AppDispatch } from '@/store'
import { getNotes } from '@/store/notes/noteThunk'
import { Loader2, Paperclip, Pencil, Plus, Trash2 } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

type Note = {
  _id: number,
  title: string,
  content: string,
  date: Date
}

const page = () => {
  const data = useSelector((state: any) => state.note)
  const notes: Note[] = data.notes
  const loading = data.loading
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    const getAllNotes = () => {
      dispatch(getNotes())
    }
    getAllNotes()
  }, [dispatch])
  return (
    <div>
      <div className='bg-slate-950 rounded-full text-white p-2 m-3 w-fit'>
        <Link href="/create">
          <Plus color="white" />
        </Link>
      </div>
      <div className='grid grid-cols-5 gap-14 justify-items-center'>
        {!loading ? notes.map(note =>
          <div className='bg-slate-950 rounded-md text-white p-7 flex flex-col gap-y-7 h-60 w-64'>
            <Paperclip className='absolute translate-x-52 -translate-y-8' color='darkblue' size={30} />
            <h1 className='text-2xl capitalize'>{note.title}</h1>
            <p>{note.content}</p>
            <div className='flex items-end h-full justify-end gap-x-5 text-gray-600'>
              <small>{new Date(note.date).toDateString().replaceAll(" ", "-")}</small>
            </div>
            <div className='flex items-end h-full justify-end gap-x-5'>
              <div className='bg-red-700 rounded-full p-2 cursor-pointer'>
                <Trash2 size={20} color='#000000' />
              </div>
              <Link href={`/${note._id}`}>
                <div className='bg-blue-900 rounded-full p-2 cursor-pointer'>
                  <Pencil size={20} color='#000000' />
                </div>
              </Link>
            </div>
          </div>
        ) : <div className='flex justify-center'><Loader2 size={90} className='animate-spin' /></div>}
      </div>
    </div>
  )
}

export default page
