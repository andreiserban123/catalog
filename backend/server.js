import express from "express";
import dotenv from "dotenv";
import { createPool } from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const port = process.env.port || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// start db
createPool();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is ready"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on ${port}`));
