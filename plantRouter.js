import express from "express";
import { getPlants } from "../controller/plantController.js";

const router = express.Router();

router.route("/plants").get(getPlants);

export default router;
