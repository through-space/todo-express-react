import {
	createTask,
	deleteTask,
	getAllTasks,
	getTaskByID,
	updateTask,
	updateTaskStatus,
} from "./consts.js";
import { type ITaskController } from "./types.js";

export const taskController: ITaskController = {
	getAllTasks,
	getTaskByID,
	createTask,
	updateTask,
	updateTaskStatus,
	deleteTask,
};
