import {pool} from '../db.js';

export const ping = async (req, res) => {
    const [result] = await pool.query('SELECT * from test')
    res.json(result[9])
 }