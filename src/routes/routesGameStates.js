import { Router } from "express";

import { createGame, link, populateOne } from "../controllers/gameStateControllers/createGame.js";
import { getGame } from "../controllers/gameStateControllers/getGame.js";
import { updateGameById } from "../controllers/gameStateControllers/updateGameById.js";
import { deleteGame } from "../controllers/gameStateControllers/deleteGame.js";
import { authRequired } from "../controllers/userControls/authRequired.js";

const routesGame = Router();

routesGame

    // Create new game:
    .post("/gamestate", createGame)

    //linkes game to user
    .get("/gamestate/:userid/:gameid", link)
  
    //fetches a single user with there games
    .get("/games/:userid", populateOne)

    // Read current game state:
    .get("/gamestate/:id", getGame)

    // Update game state:
    .put("/gamestate/:id", updateGameById)

    // Delete game:
    .delete("/gamestate/:id", deleteGame);

export default routesGame;
