import { Router } from "express";
import { allAnimes } from "../controllers/index.controller.js";

const router = Router()

router.get('/allanimes', allAnimes);

export default router