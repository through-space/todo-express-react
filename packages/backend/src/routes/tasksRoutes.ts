import { Router } from "express";

export const tasksRouter = Router();

tasksRouter.get("/", (req, res, next) => {
	res.send("taskRouter response4");
	next();
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
