import GameState from "../../models/gameStateSchema.js";
import errorHandler from "../../utilities/error.js";

// Create new game:
export const createGame = async (req, res) => {
    try {
        // This is what will be saved when the user saves their game:
        const newGame = new GameState (
            {
                playerNum: req.body.playerNum,      // Number of players entered on starting a new game.
                territories: req.body.territories,  // 42 Territories on a board. This also represents the territory cards.
                turn: req.body.turn,                // Turn number representing the number of the player who's turn it is.
            }
        );

        await newGame.save();

        if (newGame) {
            // If new game has been created, tell the user.
            res.json(errorHandler(false, "New game created!"));
        } else {
            return res.json(errorHandler(true, "Error creating a new game. Please contact project owner."));
        };
    } catch (error) {
        return res.json(errorHandler(true, "Error creating a new game. Please contact project owner."))
    };
};
