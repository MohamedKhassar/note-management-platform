import { NotebookPen } from 'lucide-react'
import React from 'react'

const NavBar = () => {
    return (
        <div className='flex justify-center gap-x-5 items-center bg-slate-950 p-6'>
            <NotebookPen color='white' />
            <h1 className='capitalize text-white text-xl'>note management platform</h1>
        </div>
    )
}

export default NavBar
