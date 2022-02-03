import { Territory } from "../../models/gameStateSchema.js";
import errorHandler from "../../utilities/error.js";

export const updateTerr = async (req, res) => {
  try {
    Territory.findOneAndUpdate(
      { _id: req.params.id },
      // req.body.cardOwner,
      // req.body.troops,
      // req.body.territoryOwner,
      req.body,
      { new: true },
      (error, updatedTerr) => {
        if (updatedTerr) {
          res.json(errorHandler(false, "Updated territory", updatedTerr))
        } else {
          return res.json(errorHandler(true, "Error updating terr", { error }))
        }
      }
    )
  } catch (error) {
    res.json(errorHandler(true, "unable to update terr"))
  }
}

