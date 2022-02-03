import mongoose from "mongoose";
import GameState from "../../models/gameStateSchema.js";
import errorHandler from "../../utilities/error.js";

export const fetchAllTerr = async (req, res) => {
  try {
    GameState.findById(mongoose.Types.ObjectId(req.params.gameid)).populate("territories").exec((error, territories) => {
      if (territories) {
        res.json(errorHandler(false, "Here are all your Posts", {territories}));
      } else {
        res.json(errorHandler(true, "An error occurred getting your data",{error}))
      }
    });
  } catch (error) {
    res.json(errorHandler(true, "unable to fetch all users"))
  }
}
