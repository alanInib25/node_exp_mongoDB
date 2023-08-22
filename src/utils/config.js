import { config } from "dotenv";
config();

// configuración de puerto;
export const PORT = process.env.PORT || 3001;
//configuración uri bd
export const MONGODB =
  process.env.MONGODB || "mongodb://127.0.0.1:27017/alan-crud";
//ruta pública
export const PUBLIC_URL = process.env.PUBLIC_URL || "http://localhost:3000";
//JWT
export const JWT_SECRET = process.env.JWTKEY;
