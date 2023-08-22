import app from './app.js';
import { PORT } from './utils/config.js';
import './database.js';
app.listen(PORT)
console.log(`listener on port`, PORT)