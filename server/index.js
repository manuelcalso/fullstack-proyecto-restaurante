// url del post: https://fullstack-proyecto-restaurante.onrender.com/
//IMPORTACIONES
import express from "express"
import cors from "cors"

//INICIALIZADORES
const app = express()

app.use(cors())
app.use(express.json())

const data = [{
    id: 0,
    title: "reservacion 1",
    description: "Reservacion a cancun"
},
{
    id: 1,
    title: "reservacion 2",
    description: "Reservacion a Toluca"
}]


//RUTAS
app.get("/", (req, res) => {

    res.json({
        msg: "Hola mundo",
        data: data
    })

})

app.post("/", (req, res) => {

    const {
        title, description
    } = req.body

    data.push({
        title, description
    })

    

    res.json({
        msg: "reservacion agregada",
        data: data,
    })

})


app.listen(3005, () => console.log("servidor encendido"))