import express from "express";
import reservacionesController from "../controllers/reservacionesController.js";

const router = express.Router();

router.post("/", reservacionesController.readAll);

export default router;
