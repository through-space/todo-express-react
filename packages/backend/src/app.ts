import express from "express";
import cors from "cors";
import { tasksRouter } from "./routes/tasksRoutes.js";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", tasksRouter);

// app.use("api/auth", authRouter);
// app.use("api/auth", authRouter);
// app.use("api/auth", authRouter);

// app.get("/", (req: Request, res: Response) => {
// 	res.send("Backend is running");
// });

// const r2 = express.Router();
// r2.get("/", (req, res, next) => {
// 	console.log("r2");
// 	res.send("r2 response");
// 	next();
// });
//
// app.use("/", r2);

//
// app.post("/login", async (req: Request, res: Response) => {
// 	res.send("Login1234");
// });
//
// app.post("/register", async (req: Request, res: Response) => {
// 	console.log("register path reached");
// 	console.log(req.body);
// 	res.send("Login1234");
// });

// Example: list users
// app.get("/users", async (req: Request, res: Response) => {
//     const users = await prisma.user.findMany();
//     res.json(users);
// });
//
