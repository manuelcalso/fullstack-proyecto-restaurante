import express from "express"

const app = express()

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

app.get("/", (req, res) => {

    res.json({
        msg: "Hola mundo",
        data: data
    })

})

app.post("/", (req, res) => {

    data.push({
        id: 2,
        title: "Reservacion 3" ,
        description: "Quiero una reservacion a Sydney",
    })

    res.json({
        msg: "reservacion agregada",
        data: data,
    })

})


app.listen(3005, () => console.log("servidor encendido"))