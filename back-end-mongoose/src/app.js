import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookRouter from "./routers/book"
import userRouter from "./routers/auth"
import commentRouter from "./routers/comment"

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api",bookRouter)
app.use("/api",userRouter)
app.use("/api",commentRouter)
mongoose.connect(`mongodb://127.0.0.1:27017/bai-thi`);

export const viteNodeApp = app;
