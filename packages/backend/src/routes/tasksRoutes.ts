import { Router } from "express";
import { taskController } from "@controllers/taskController/taskController";

export const tasksRouter = Router();

tasksRouter.get("/stats", taskController.getStats);
tasksRouter.get("/:id", taskController.getTaskByID);

tasksRouter.put("/:id", taskController.updateTask);
tasksRouter.patch("/:id", taskController.updateTaskStatus);

tasksRouter.delete("/:id", taskController.deleteTask);

tasksRouter.get("/", taskController.getAllTasks);
tasksRouter.post("/", taskController.createTask);
