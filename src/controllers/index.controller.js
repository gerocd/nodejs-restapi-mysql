import {pool} from '../db.js';

export const allAnimes = async (req, res) => {
    const [result] = await pool.query('SELECT * from animes')
    res.json(result)
 }