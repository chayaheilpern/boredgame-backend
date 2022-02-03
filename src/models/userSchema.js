import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        userName: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true },
        password_digest: { type: String, required: true },
        // games: [{gameSchema}]
    },
    { timestamps: true }      
);

const User = mongoose.model("user", userSchema);

export default User;
