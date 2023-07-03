import { Router } from "express";
import { deleteAnime, createAnime, getAnimes, updateAnime, getAnime} from '../controllers/animes.controller.js'


const router = Router ()

router.get('/animes', getAnimes)

router.get('/animes/:id', getAnime)

router.post('/animes', createAnime)

router.put('/animes', updateAnime)

router.delete('/animes', deleteAnime)

export default router