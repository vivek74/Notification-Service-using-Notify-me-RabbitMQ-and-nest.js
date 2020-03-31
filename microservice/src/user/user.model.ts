import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNo: { type: String, required: true },
    password: { type: String, required: true }
});

export interface User {
    id: string;
    firstName: String;
    lastName: String;
    email: String;
    phoneNo: String;
    password: String;
}