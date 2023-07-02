import {pool} from '../db.js'

export const getEmployees = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM test')
    res.json(rows)
}

export const getEmployee = async (req, res) => {
    console.log(req.params.id)
    const [rows] = await pool.query('SELECT * FROM test WHERE idAnime = ?', [req.params.id]) // en[] va los parametros que le paso al ?, osea el ID que pongo en param.id
    
    if (rows.length <= 0 ) return res.status(404).json({
        message: 'Anime not found'
    })
    
    res.json(rows[0])
}

export const createEmployee = async (req, res) => {

    const {anime, genero, inform} = req.body
    const [rows] = await pool.query('INSERT INTO test(anime, genero, inform) VALUES (?,?,?)', 
    [anime, genero, inform]) // importante ponerlo en orden, son los parametros que le pasaremos
    res.send({
        id: rows.insertId,
        anime,
        genero,
        inform,
    })
}

export const updateEmployee = (req, res) => res.send('actualizando empleados')

export const deleteEmployee = (req, res) => res.send('borrando empleados')