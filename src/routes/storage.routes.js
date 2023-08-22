import { Router } from 'express';
import * as storageControllers from '../controllers/storage.js';
import {uploadMiddleware} from '../utils/handleStorage.js';
const storageRouter = Router();

storageRouter.post('/storage/add', uploadMiddleware.single("myFile"), storageControllers.addStorage);
storageRouter.get('/storage', storageControllers.getStorage);



export default storageRouter;