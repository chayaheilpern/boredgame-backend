import express from "express";
import { addTerr } from "../controllers/territoryControls/create.js"

const Router = express.Router();

Router
  
//add new terr
.post("/addterr", addTerr)

export default Router