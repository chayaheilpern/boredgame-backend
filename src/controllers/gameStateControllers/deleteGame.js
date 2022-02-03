import GameState from "../../models/gameStateSchema.js";
import errorHandler from "../../utilities/error.js";

// Delete game:
export const deleteGame = (req, res) => {
    try {
        GameState.findByIdAndRemove (
            req.params.id,
            { new: true },
            (error, deletedGame) => {
                if (deletedGame) {
                    return res.json(errorHandler(false, "Deleting game...", deletedGame))
                } else {
                    return res.json(errorHandler(true, "Error deleting game."))
                };
            }
        );
    } catch (error) {
        return res.json(errorHandler(true, "Error deleting game."));
    };
};
