const list = [
  "Alaska",
  "Northwest Territory",
  "Greenland",
  "Alberta",
  "Ontario",
  "Quebec",
  "Western United States",
  "Eastern United States",
  "Central America",
  "Venezuela",
  "Peru",
  "Brazil",
  "Atgentina",
  "North Africa",
  "Egypt",
  "East Africa",
  "Congo",
  "South Africa",
  "Madagascar",
  "Iceland",
  "Scandinavia",
  "Ukraine",
  "Great Britian",
  "Northern Europe",
  "Southern Europe",
  "Western Europe",
  "Indonesia",
  "NewGuinea",
  "Western Australia",
  "Eastern Australia",
  "Siam",
  "India",
  "China",
  "Mongolia",
  "Japan",
  "Irkkutsk",
  "Yakutsk",
  "Kamchatka",
  "Siberia",
  "Afghanistan",
  "Ural",
  "Middle East"
];

// const terr = list.forEach((item) => { console.log(item) })
// console.log(terr)

import GameState from "../../models/gameStateSchema.js";
import errorHandler from "../../utilities/error.js";
import mongoose from "mongoose";

// export const addTerr = async (req, res) => {
//   try {
//     const newTerr = new Territory(
//       {
//         territory: req.body.territory,
//         cardOwner: req.body.cardOwner,
//         troops: req.body.troops,
//         territoryOwner: req.body.territoryOwner
//       }
//     )
//     await newTerr.save();
//     if (newTerr) {
//       res.json(errorHandler(false, "New territory created!"));
//     } else {
//         return res.json(errorHandler(true, "Error creating a new territory."))
//     };
//   } catch (error) {
//     res.json(errorHandler(true, "error adding a new territory"))
//   }
// }

export const addTerr = async (req, res) => {
  try {
    const body = req.body
    GameState.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(req.params.id) },
      {$push: {
        terr: {
            ...body
          } 
        }
      },
      { new: true },
      (error, updatedGame) => {
        if (updatedGame) {
          res.json(errorHandler(false, "creating post", updatedGame))
        } else {
          return res.json(errorHandler(true, "Error creating terr", {
            error: error.message
          }))
        }
      }
    )
  } catch (error) {
    res.json(errorHandler(true, "error adding new territory"))
  }
}