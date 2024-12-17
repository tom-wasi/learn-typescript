import { Schema, Document, model } from "mongoose";

export interface IExam extends Document {
    module: Schema.Types.ObjectId;
    questions: Schema.Types.ObjectId[];
}

const examSchema = new Schema<IExam>({
    module: { type: Schema.Types.ObjectId, ref: 'Module' },
    questions: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
});

const Exam = model<IExam>("Exam", examSchema);

export default Exam;