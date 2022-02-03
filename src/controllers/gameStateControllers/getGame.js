import GameState from "../../models/gameStateSchema.js";
import errorHandler from "../../utilities/error.js";

// Read current game state:
export const getGame = (req, res) => {
    try {
        GameState.findById(req.params.id, (error, foundGame) => {
            if (foundGame) {
                const { playerNames, territories, turn } = foundGame;
                return res.json(errorHandler(false, `Found game ${req.params.id}!`, {
                    Game:
                        {
                            playerNames: `${playerNames}`,
                            territories: `${territories}`,
                            turn: `${turn}`,
                        }
                }));
            } else {
                return res.json(errorHandler(true, "Error finding game."));
            }
        });
    } catch (error) {
        res.json(errorHandler(true, "Error finding game."))
    };
};
