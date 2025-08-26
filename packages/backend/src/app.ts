import express from "express";
import cors from "cors";
import { tasksRouter } from "@routes/tasksRoutes";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks/", tasksRouter);

app.use((req, res, next) => {
	res.status(404).json({ error: "Path Not found" });
});
