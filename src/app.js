// TODA LA CONFG DE EXPRESS

import express from "express";
import animesRoutes from './routes/animes.routes.js'
import indexRoutes from './routes/index.routes.js'

// import { PORT } from "./config.js"; 

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api', animesRoutes)


// ------------------ Not Found Error --------------------------------
app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint no fue encontrado, verifique la direccion'
    })
})

export default app;