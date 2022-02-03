import express from "express";
import { fetchAllTerr } from "../controllers/territoryControls/fetchAllTerr.js";
import { addTerr } from "../controllers/territoryControls/createTerr.js"
import { updateTerr } from "../controllers/territoryControls/UpdateTerr.js";

const routesTerr = express.Router();

routesTerr
  //get all territories by game
  .get("/fetchallterr/:gameid", fetchAllTerr)
  
  //add new terr
  .post("/terrcreate/:gameid", addTerr)

  //update a terr
  .put("/terrupdate/:gameid/:id", updateTerr)

export default routesTerr;