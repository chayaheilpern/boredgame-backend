import { Router } from "express";

import { createGame } from "../controllers/gameStateControllers/createGame.js";
import { getGame } from "../controllers/gameStateControllers/getGame.js";
import { updateGameById } from "../controllers/gameStateControllers/updateGameById.js";
import { deleteGame } from "../controllers/gameStateControllers/deleteGame.js";
import { getAllGames } from "../controllers/gameStateControllers/getAllGames.js";

const routesGame = Router();

routesGame

    // Create new game:
    .post("/gamestate", createGame)

    // Read current game state:
    .get("/gamestate/:id", getGame)

    // Read all game states:
    .get("/gamestate", getAllGames)

    // Update game state:
    .put("/gamestate/:id", updateGameById)

    // Delete game:
    .delete("/gamestate/:id", deleteGame);

export default routesGame;
