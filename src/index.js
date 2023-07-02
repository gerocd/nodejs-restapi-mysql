import express from "express";
import employeeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'


const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api',employeeesRoutes)


app.listen(3000)
console.log("Server running on port 3000")

