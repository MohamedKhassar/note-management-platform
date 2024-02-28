import NoteModel from "@/Models/NotesModel"
import "@/lib/connectDB"
import { NextRequest, NextResponse } from "next/server"
export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const { id } = params
        const body = await req.json()
        const note = await NoteModel.findByIdAndUpdate(id, body)
        return NextResponse.json(note, { status: 201 })
    } catch (error) {
        const message = (error as Error).message
        return NextResponse.json({ message }, { status: 500 })
    }
}

export const GET = async (_: any, { params }: { params: { id: string } }) => {
    try {
        const { id } = params
        const note = await NoteModel.findById(id)
        return NextResponse.json(note, { status: 200 })
    } catch (error) {
        const message = (error as Error).message
        return NextResponse.json({ message }, { status: 500 })

    }
}

export const DELETE = async (_: any, { params }: { params: { id: string } }) => {
    try {
        const { id } = params
        await NoteModel.findByIdAndDelete(id)
        return NextResponse.json({ message: "Note Deleted" }, { status: 201 })
    } catch (error) {
        const message = (error as Error).message
        return NextResponse.json({ message }, { status: 500 })
    }
}