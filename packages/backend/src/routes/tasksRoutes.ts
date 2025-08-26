import { Router } from "express";
import { taskController } from "@controllers/taskController/taskController";

export const tasksRouter = Router();

tasksRouter.get("/", taskController.getAllTasks);
tasksRouter.get("/:id", taskController.getTaskByID);

tasksRouter.post("/", taskController.createTask);

tasksRouter.put("/:id", taskController.updateTask);
tasksRouter.patch("/:id", taskController.updateTaskStatus);

tasksRouter.delete("/:id", taskController.deleteTask);
