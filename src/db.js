import { createPool } from "mysql2/promise"; // pool: conjunto de conexiones que podemos utilizar facil,emte

//objeto de conexion

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '12345',
    port: 3306,
    database: 'apitest'
})

// const [rows, fields] = await pool.query('SELECT * FROM test');
// console.log(rows);