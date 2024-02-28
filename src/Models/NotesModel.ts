import mongoose from "mongoose";

type Note = {
    title: string,
    content: string,
    date: Date
}

const NoteSchema = new mongoose.Schema<Note>({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const NoteModel = mongoose.models.notes || mongoose.model("Note", NoteSchema);
export default NoteModel;