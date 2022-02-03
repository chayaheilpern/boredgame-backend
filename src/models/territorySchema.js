import mongoose from "mongoose";

const territorySchema = mongoose.Schema(
  {
      territory: { type: String, required: true }, //name of the terr
      cardOwner: String, //player
      troops: { type: Number, required: true },// amount of troops
      territoryOwner: { type: String, required: true }
  },
);

const Territory = mongoose.model("territory", territorySchema);

export default Territory;