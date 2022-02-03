import { Router } from 'express';
import defaultController from '../controllers/defaultController.js';
import routesGame from './routesGameStates.js';
import routesTerr from './routesTerr.js';
import routesUsers from './routesUsers.js';

const router = Router()

router.get('/', defaultController)

router.use('/', routesUsers)
router.use('/', routesTerr)
router.use('/', routesGame)

export default router