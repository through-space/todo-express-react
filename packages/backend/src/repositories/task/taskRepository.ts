import type { ITaskRepository } from "./types";
import {
	createTask,
	deleteTask,
	getTaskByID,
	getTasks,
	updateTask,
	updateTaskStatus,
} from "./consts";

export const taskRepository: ITaskRepository = {
	getTasks,
	getTaskByID,
	createTask,
	updateTask,
	updateTaskStatus,
	deleteTask,
};
