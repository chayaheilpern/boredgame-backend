import mongoose from "mongoose";
import territorySchema from "./territorySchema.js";

// Schema of state of a game when saving to DB:
export const gameStateSchema = mongoose.Schema(
    {
        playerNum: { type: Number, required: true },    // Number of players entered on starting a new game.
        territories: [territorySchema],                 // 42 Territories on a board. This also represents the territory cards.
        turn: { type: Number, required: true }          // Turn number representing the number of the player who's turn it is.
    },
    { timestamps: true }      
);


const GameState = mongoose.model("gameState", gameStateSchema);

export default GameState;