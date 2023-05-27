import express from "express";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.port || 5000;
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("hello world"));

app.listen(port, () => console.log(`Server started on ${port}`));
