import GameState from "../../models/gameStateSchema.js";
import errorHandler from "../../utilities/error.js";

// Update game state:
export const updateGameById = (req, res) => {
    try {
        GameState.findOneAndUpdate (
            { _id: req.params.id },
            req.body,
            { new: true },
            (error, updatedGame) => {
                if (updatedGame) {
                    res.json(errorHandler(false, "Updated game!", updatedGame))
                } else {
                    return res.json(errorHandler(true, "Error updating game.", { error }))
                };
            }
        );
    } catch (error) {
        return res.json(true, "Error updating game. Please contact project owner.")
    };
};
