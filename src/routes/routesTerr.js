import express from "express";
import { addTerr } from "../controllers/territoryControls/createTerr.js"

const routesTerr = express.Router();

routesTerr
  
//add new terr
.post("/addterr", addTerr)

export default routesTerr;