import dotenv from "dotenv";
import express from "express";
import travelRoutes from "./routes/travelRoutes";
import getConnection from "./config/db";

getConnection();

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", travelRoutes);

export default app;
