//importaciones librerias
import express from "express";

//importaciones archivos
import userController from "./../controllers/userController.js";

//datos

//inicializadores
const router = express.Router();

//controladores
router.post("/", userController.readAll);

//exportacion
export default router;
