import { pool } from '../db.js'

// -------------------------------------- METODO GET (all) --------------------------------------------------
export const getAnimes = async (req, res) => {

    try {
       // throw new Error('Probando Error') // Test error
        const [rows] = await pool.query('SELECT * FROM animes')
        res.json(rows)

    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor'
        })
    }
}

// -------------------------------------- METODO GET (id) --------------------------------------------------
export const getAnime = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM animes WHERE idAnime = ?', [req.params.id])

        if (rows.length <= 0) return res.status(404).json({
            message: 'Anime not found'
        })

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor'
        })
    }
}

// -------------------------------------- METODO POST --------------------------------------------------
export const createAnime = async (req, res) => {
    const { anime, genero, info, calificacion } = req.body

    try {
        const [rows] = await pool.query('INSERT INTO animes(anime, genero, info, calificacion) VALUES (?,?,?,?)',
            [anime, genero, info, calificacion])
        res.send({
            id: rows.insertId,
            anime,
            genero,
            info,
            calificacion,
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor'
        })
    }
}

// -------------------------------------- METODO DEL --------------------------------------------------
export const deleteAnime = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM animes WHERE idAnime = ?', [req.params.id])

        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Anime not found'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor'
        })
    }
}

// -------------------------------------- METODO PUT --------------------------------------------------
export const updateAnimePut = async (req, res) => {
    const { id } = req.params
    const { anime, genero, info, calificacion } = req.body

    try {
        const [result] = await pool.query('UPDATE animes SET anime = ?, genero = ?, info = ?, calificacion = ? WHERE idAnime = ?',
            [anime, genero, info, calificacion, id])

        console.log(result)

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Anime no encontrado'
        })

        const [rows] = await pool.query('SELECT * FROM animes WHERE idAnime = ?', [id])

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor'
        })
    }
}

// -------------------------------------- METODO PATCH --------------------------------------------------
export const updateAnimePatch = async (req, res) => {
    const { id } = req.params
    const { anime, genero, info, calificacion } = req.body

    try {
        const [result] = await pool.query('UPDATE animes SET anime = IFNULL(?, anime), genero = IFNULL(?, genero), info = IFNULL(?, info), calificacion = IFNULL(?, calificacion) WHERE idAnime = ?',
            [anime, genero, info, calificacion, id])

        console.log(result)

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Anime no encontrado'
        })

        const [rows] = await pool.query('SELECT * FROM animes WHERE idAnime = ?', [id])

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor'
        })
    }
}

