import { ITaskListSettings } from "@stores/task-store/types";

export enum ETaskStatus {
	OPEN = "OPEN",
	IN_PROGRESS = "IN_PROGRESS",
	DONE = "DONE",
}

export interface ITask {
	id: string;
	title: string;
	description: string;
	status?: ETaskStatus;
	created_at?: string;
	updated_at?: string;
	isPending?: boolean;
}

export interface ITaskService {
	getTasks: (options: Partial<ITaskListSettings>) => Promise<ITask[]>;
	getTaskByID: (id: ITask["id"]) => Promise<ITask>;
	createTask: (task: Partial<ITask>) => Promise<ITask>;
	updateTask: (id: ITask["id"], task: Partial<ITask>) => Promise<ITask>;
	updateTaskStatus: (id: ITask["id"], status: ETaskStatus) => Promise<ITask>;
	deleteTask: (id: ITask["id"]) => Promise<void>;
}
