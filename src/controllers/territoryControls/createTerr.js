import mongoose from "mongoose";
import GameState from "../../models/gameStateSchema.js";
import errorHandler from "../../utilities/error.js";

//creates a new territory in a given game//
export const addTerr = async (req, res) => {
  try {
    GameState.findOneAndUpdate(
      //gets the game id
      { _id: mongoose.Types.ObjectId(req.params.gameid) },
      //pushs the new info into the array
      {$push: {
        territories: {
            ...req.body
          } 
        }
      },
      { new: true },
      (error, updatedGame) => {
        if (updatedGame) {
          res.json(errorHandler(false, "creating terr", updatedGame))
        } else {
          return res.json(errorHandler(true, "Error creating terr", {
            error: error.message
          }))
        }
      }
    )
  } catch (error) {
    res.json(errorHandler(true, "error adding new territory"))
  }
}