import mongoose from "mongoose";
import GameState from "../../models/gameStateSchema.js";
import errorHandler from "../../utilities/error.js";

//upudates a terr based on the game id and the terr id
export const updateTerr = async (req, res) => {
  try {
    GameState.findOneAndUpdate({
      //gets the game id
      _id: mongoose.Types.ObjectId(req.params.gameid),
      //gets the terr id
      territories: { $elemMatch: { _id: mongoose.Types.ObjectId(req.params.id) }}},
      {
        //req
        $set: {
          'territories.$': req.body,
        }
      },
      { new: true, upsert: true },
      (error, terr) => {
        if (error) {
          res.json(errorHandler(true, "unable to update terr!"))
        } else {
          res.json(errorHandler(false, "updating terr", terr))
        }
      }
    )
  } catch (error) {
    res.json(errorHandler(true, "unable to update terr"))
  }
}