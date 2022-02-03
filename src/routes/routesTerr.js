import express from "express";
import { addTerr, addTerrArr } from "../controllers/territoryControls/createTerr.js"

const routesTerr = express.Router();

routesTerr
  
//add new terr
.post("/addterr", addTerr)
.post("/addterr/:id", addTerrArr)

export default routesTerr;