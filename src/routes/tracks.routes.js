import { Router } from 'express';
import * as tracksControllers from '../controllers/tracks.js';
import { validateObjectId } from '../validators/objectId.js';
import { validateCreateTrack } from '../validators/tracks.js';
import { authMiddleware } from "../middlewares/session.js";
import { checkRol } from "../middlewares/checkRol.js";

const tracksRouter = Router();
tracksRouter.get('/tracks', authMiddleware, checkRol, tracksControllers.getTracks);
tracksRouter.get('/tracks/:id', authMiddleware, validateObjectId, tracksControllers.getTrack);
tracksRouter.post('/tracks/add', authMiddleware, validateCreateTrack, tracksControllers.addTrack);
tracksRouter.put('/tracks/edit/:id', authMiddleware, validateObjectId, validateCreateTrack, tracksControllers.updateTrack);
tracksRouter.delete('/tracks/delete/:id', authMiddleware, validateObjectId, tracksControllers.deleteTrack);
tracksRouter.delete('/tracks/delete', authMiddleware, tracksControllers.deleteTracks);
export default tracksRouter;