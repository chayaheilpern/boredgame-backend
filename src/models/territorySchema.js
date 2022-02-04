import mongoose from "mongoose";

//this is not a model its just a schema for the game array 
const territorySchema = mongoose.Schema(
  {
    territory: { type: String, required: true }, //name of the terr
    cardOwner: Number, //player
    troops: { type: Number, required: true },// amount of troops
    territoryOwner: { type: Number, required: true }
  },
);

export default territorySchema;