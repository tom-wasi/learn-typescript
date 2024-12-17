import { Schema, Document, model } from "mongoose";

export interface IChapter extends Document {
    name: string;
    description: string;
    exercises: Schema.Types.ObjectId[];
}

const chapterSchema = new Schema<IChapter>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }],
});

const Chapter = model<IChapter>("Chapter", chapterSchema);

export default Chapter;

