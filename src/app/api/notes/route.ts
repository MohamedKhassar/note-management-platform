import NoteModel from "@/Models/NotesModel"
import "@/lib/connectDB"
import { NextRequest, NextResponse } from "next/server"
export const GET = async (req: NextRequest) => {
    try {
        const query = req.nextUrl.searchParams.get("query")
        const notes = query ? await NoteModel.where("title", { $regex: query }) : await NoteModel.find()
        return NextResponse.json(notes, { status: 200 })
    } catch (error) {
        const message = (error as Error).message
        return NextResponse.json({ message }, { status: 500 })
    }
}

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json()
        const note = await NoteModel.create(body)
        return NextResponse.json(note, { status: 201 })
    } catch (error) {
        const message = (error as Error).message
        return NextResponse.json({ message }, { status: 500 })
    }
}