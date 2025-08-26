import { Prisma, type Task } from "@prisma/client";

export interface ITaskRepository {
	getTasks: () => Promise<Task[]>;
	getTaskByID: (id: Task["id"]) => Promise<Task | null>;
	createTask: (task: Prisma.TaskCreateInput) => Promise<Task>;
	updateTask: (id: Task["id"], task: Prisma.TaskUpdateInput) => Promise<Task>;
	updateTaskStatus: (id: Task["id"], status: Task["status"]) => Promise<Task>;
	deleteTask: (id: Task["id"]) => Promise<Task>;
}

export enum ETaskRepositoryError {
	TASK_NOT_FOUND,
	TASK_VALIDATION_ERROR,
}

export enum EPrismaError {
	RECORD_NOT_FOUND = "P2025",
}

export class TaskRepositoryError extends Error {
	cause: ETaskRepositoryError;
	constructor(message: string, cause: ETaskRepositoryError) {
		super(message);
		this.name = "TaskValidationError";
		this.cause = cause;
	}
}
