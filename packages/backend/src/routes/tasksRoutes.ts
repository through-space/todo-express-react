import { Router } from "express";
import { taskController } from "@controllers/taskController/taskController";

export const tasksRouter = Router();

tasksRouter.get("/", (req, res, next) => {
	// console.log("tasksRouter");
	// res.send("tasksRouter response");
	// return;
	taskController.getAllTasks(req, res);
	// next();
});

// authRouter.get("/", (req, res, next) => {
// 	console.log("authRouter");
// 	res.send("authRouter response");
// 	next();
// });
// authRouter.post("/register", register);
// taskRouter.post("/register", (req, res, next) => {
// 	authController.register(req, res);

// res.send("register response");
// next();
// });
// router.post("/login", login);
