import { Schema, Document, model } from "mongoose";

export interface ISubject extends Document {
    name: string;
    description: string;
    chapters: Schema.Types.ObjectId[];
}

const subjectSchema = new Schema<ISubject>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    chapters: [{ type: Schema.Types.ObjectId, ref: 'Chapter' }],
});

const Subject = model<ISubject>("Subject", subjectSchema);

export default Subject;