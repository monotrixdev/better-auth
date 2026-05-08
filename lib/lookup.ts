import { string } from "better-auth";
import mongoose from "mongoose";

const lookSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    status: { type: Boolean, default: true},
    phoneNumber: String,
    timeStamp: { type: Date, default: Date.now }
})

export const Look = mongoose.models.Look || mongoose.model('Look', lookSchema)