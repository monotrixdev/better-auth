import { timeStamp } from "console";
import mongoose, { mongo } from "mongoose";

const lookSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: String, default: true},
    phoneNumber: String,
    timeStamp: { type: Date, default: Date.now }
})

export const Look = mongoose.models.Look || mongoose.model('Look', lookSchema)