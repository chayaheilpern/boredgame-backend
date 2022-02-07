import GameState from "../../models/gameStateSchema.js";
import User from "../../models/userSchema.js";
import errorHandler from "../../utilities/error.js";
import mongoose from "mongoose";

// Create new game:
export const createGame = async (req, res) => {
  try {
    // This is what will be saved when the user saves their game:
    const newGame = new GameState({
      playerNum: req.body.playerNum,
      territories: req.body.territories,
      turn: req.body.turn,
    });

    await newGame.save()

    if (newGame) {
      // If new game has been created, tell the user.
      res.json(errorHandler(false, "New game created!", newGame));
  } else {
      return res.json(errorHandler(true, "Error creating a new game. Please contact project owner!"));
  };
  } catch (error) {
    return res.json(
      errorHandler(
        true,
        "Error creating a new game. Please contact project owner."
      )
    );
  }
};

export const link = async (req, res) => {
  try {
    const gameid = mongoose.Types.ObjectId(req.params.gameid)
    const user = await User.findById(req.params.userid)
    user.games.push(gameid)
    user.save()
    res.json(errorHandler(false, "linked", user))
  } catch (error) {
    return res.json(
      errorHandler(
        true,
        "Error linking."
      )
    );
  }
}

export const populateOne = async (req, res) => {
  try {
    const games = await User.findById(req.params.userid).populate({ path: "games", model: "gameState" });
    res.json(errorHandler(
      false,
      "fetching data",
      games
    ))
  } catch (error) {
    res.json(errorHandler(true, "error fetching data"))
  }
}