import {pool} from '../db.js'

export const getAnimes = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM animes')
    res.json(rows)
}

export const getAnime = async (req, res) => {
    console.log(req.params.id)
    const [rows] = await pool.query('SELECT * FROM animes WHERE idAnime = ?', [req.params.id]) // en[] va los parametros que le paso al ?, osea el ID que pongo en param.id
    
    if (rows.length <= 0 ) return res.status(404).json({
        message: 'Anime not found'
    })
    
    res.json(rows[0])
}

export const createAnime = async (req, res) => {

    const {anime, genero, info, calificacion} = req.body
    const [rows] = await pool.query('INSERT INTO animes(anime, genero, info, calificacion) VALUES (?,?,?,?)', 
    [anime, genero, info, calificacion]) // importante ponerlo en orden, son los parametros que le pasaremos
    res.send({
        id: rows.insertId,
        anime,
        genero,
        info,
        calificacion,
    })
}

export const updateAnime = (req, res) => res.send('actualizando empleados')

export const deleteAnime = (req, res) => res.send('borrando empleados')