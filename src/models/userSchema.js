import mongoose from "mongoose";
import {gameStateSchema} from "./gameStateSchema.js";

const userSchema = mongoose.Schema (
    {
        userName: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true },
        password_digest: { type: String, required: true },
        games: [{ type: mongoose.Schema.Types.ObjectId, ref: "gamestates"}]
    },
    { timestamps: true }      
);

const User = mongoose.model("users", userSchema);

export default User;
