import { ETaskStatus, ITask, ITaskService } from "@services/task-service/types";
import {
	createTask,
	deleteTask,
	getTaskByID,
	getTasks,
	updateTask,
	updateTaskStatus,
} from "@services/task-service/consts";

export const taskService: ITaskService = {
	getTasks,
	getTaskByID,
	createTask,
	updateTask,
	updateTaskStatus,
	deleteTask,
};
