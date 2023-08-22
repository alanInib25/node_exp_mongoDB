import express from "express";
import userRouter from "./routes/user.routes.js";
import tracksRouter from "./routes/tracks.routes.js";
import storageRouter from "./routes/storage.routes.js";
import authRouter from "./routes/auth.routes.js";
import cors from "cors";

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static("storage"));
//routes
app.use("/api", userRouter);
app.use("/api", tracksRouter);
app.use("/api", storageRouter);
app.use("/api", authRouter)
export default app;
