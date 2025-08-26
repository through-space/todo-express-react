import type { Task } from "@prisma/client";

//TODO: check for a better solution for id
export interface ITaskRepository {
	getTasks: () => Promise<Task[]>;
	getTaskByID: (id: Task["id"]) => Promise<Task | null>;
	createTask: (task: Task) => Promise<Task>;
	updateTask: (id: Task["id"], task: Task) => Promise<Task>;
	updateTaskStatus: (id: Task["id"], status: Task["status"]) => Promise<Task>;
	//todo: what to return here
	deleteTask: (id: Task["id"]) => void;
}
