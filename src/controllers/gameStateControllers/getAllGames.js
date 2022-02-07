import GameState from "../../models/gameStateSchema.js";
import errorHandler from "../../utilities/error.js";

// Read all current game states:
export const getAllGames = async (req, res) => {
    try {
        const allGames = await GameState.find(
            {},
            {
                _id: 1,
                playerNum: 1,
                territories: 1,
                turn: 1,
            }
        );

        if (allGames) {
            return res.json(errorHandler(false, `Fetching games.`, allGames));
        } else {
            return res.json(errorHandler(true, "Game not found. Please contact project owner."));
        };
    } catch (error) {
        res.json(errorHandler(true, "Error finding games. Please contact project owner."))
    };
};
