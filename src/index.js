import express from "express";
import animesRoutes from './routes/animes.routes.js'
import indexRoutes from './routes/index.routes.js'


const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api',animesRoutes)


// ------------------ Not Found Error --------------------------------
app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint no fue encontrado, verifique la direccion'
    })
})

app.listen(3000)
console.log("Server running on port 3000")

