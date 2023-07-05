import { Router } from "express";
import { deleteAnime, createAnime, getAnimes, updateAnimePut, updateAnimePatch,getAnime} from '../controllers/animes.controller.js'


const router = Router ()

router.get('/animes', getAnimes) // obtener todos los datos

router.get('/animes/:id', getAnime) // obtener solo por id

router.post('/animes', createAnime) // guardar datos

router.put('/animes/:id', updateAnimePut) // actualizar datos por PUT

router.patch('/animes/:id', updateAnimePatch) // actualizar datos por PATCH

router.delete('/animes/:id', deleteAnime) // borrar datos por id

export default router