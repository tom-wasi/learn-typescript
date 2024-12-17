import { Schema, Document, model } from "mongoose";

export interface IModule extends Document {
    name: string;
    description: string;
    content: string;
    subjects: Schema.Types.ObjectId[];
    exam: Schema.Types.ObjectId;
}

const moduleSchema = new Schema<IModule>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
    exam: { type: Schema.Types.ObjectId, ref: 'Exam' },
});

const Module = model<IModule>("Module", moduleSchema);

export default Module;