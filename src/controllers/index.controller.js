import {pool} from '../db.js';

export const ping = async (req, res) => {
    const [result] = await pool.query('SELECT * from animes')
    res.json(result[9])
 }