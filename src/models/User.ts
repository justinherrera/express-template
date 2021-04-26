import mongoose, { Schema, Document } from 'mongoose'
import bcrypt from 'bcrypt'

import { NextFunction } from "express"

export interface UserInterface extends Document {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
    active: boolean;
}

const User: Schema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    passwordConfirm: {
        type: String,
    },
    active: {
        type: Boolean,
        default: true,
        select: false
    }
})
.pre<UserInterface>("save", async function (next: NextFunction) {

    if (!this.isModified("password")) return next();
  
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
  
    next();
});
  
export default mongoose.model<UserInterface>('User', User)