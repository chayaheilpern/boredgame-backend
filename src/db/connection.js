import "dotenv/config";
import mongoose from "mongoose";

// Connecs to mongoose database.
const db = mongoose.connect;

// Connection string for mongoDB Atlas.
const MONGODB_URI = process.env.MONGODB_URI;

// Connects to mongoDB Atlas.
export const initMongoServer = () => {
    try {
        db(MONGODB_URI).catch(error => {
            throw error;
        });
        console.log("Connected to the Mongo Database.");
    } catch (error) {
        console.error(error);
        throw error;
    };
};
