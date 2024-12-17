import { Schema, Document, model } from "mongoose";

export enum Role {
    USER = "USER",
    ADMIN = "ADMIN",
}

export interface IUser extends Document {
    email: string;
    password: string;
    progress: {
        modules: Set<Schema.Types.ObjectId>;
        subjects: Set<Schema.Types.ObjectId>;
        chapters: Set<Schema.Types.ObjectId>;
        exercises: Set<Schema.Types.ObjectId>;
    };
    roles?: Role[];
}

const userSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    progress: {
        modules: { type: Set, of: Schema.Types.ObjectId, ref: 'Module' },
        subjects: { type: Set, of: Schema.Types.ObjectId, ref: 'Subject' },
        chapters: { type: Set, of: Schema.Types.ObjectId, ref: 'Chapter' },
        exercises: { type: Set, of: Schema.Types.ObjectId, ref: 'Exercise' },
    },
    roles: [{ type: String }],
});

const User = model<IUser>("User", userSchema);

export default User;