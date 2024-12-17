import { Schema, Document, model } from "mongoose";

export interface IExercise extends Document {
    question: string;
    answer: string;
    options: string[];
}

const exerciseSchema = new Schema<IExercise>({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    options: [{ type: String, required: true }],
});

const Exercise = model<IExercise>("Exercise", exerciseSchema);

export default Exercise;