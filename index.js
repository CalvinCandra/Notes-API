import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { koneksi } from "./Database/database.js";
import Router from "./Router/index.js";

// init .env
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(Router);

app.listen(process.env.APP_PORT, async () => {
  await koneksi();
  console.log(`Server is running on http://localhost:${process.env.APP_PORT}`);
});
