// url del post: https://fullstack-proyecto-restaurante.onrender.com/
//IMPORTACIONES
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//importaciones de archivos
import userRoute from "./routes/users.js";
import reservacionesRoute from "./routes/reservaciones.js";

//INICIALIZADORES
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const port = process.env.BASE_URL_PORT || 3005;

//RUTAS
app.use("/api/v1/users", userRoute);
app.use("/api/v1/reservaciones", reservacionesRoute);

app.listen(port, () => console.log("servidor encendido"));
