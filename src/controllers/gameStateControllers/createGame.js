import GameState from "../../models/gameStateSchema.js";
import errorHandler from "../../utilities/error.js";

// Create new game:
export const createGame = async (req, res) => {
    try {
        const newGame = new GameState (
            {
                playerNames: req.body.playerNames,
                territories: req.body.territories,
                turn: req.body.turn,
            }
        );

        await newGame.save();

        if (newGame) {
            res.json(errorHandler(false, "New game created!"));
        } else {
            return res.json(errorHandler(true, "Error: creating a new game."))
        };
    } catch (error) {
        return res.json(errorHandler(true, "Error creating a new game."))
    };
};
