export enum ETaskStatus {
	OPEN,
	IN_PROGRESS,
	DONE,
}

export interface ITask {
	id: string;
	title: string;
	description: string;
	status?: ETaskStatus;
	created_at?: string;
	updated_at?: string;
}

export interface ITaskService {
	getTasks: () => Promise<ITask[]>;
	getTaskByID: (id: ITask["id"]) => Promise<ITask>;
	createTask: (task: Partial<ITask>) => Promise<ITask>;
	updateTask: (id: ITask["id"], task: Partial<ITask>) => Promise<ITask>;
	updateTaskStatus: (id: ITask["id"], status: ETaskStatus) => Promise<ITask>;
	deleteTask: (id: ITask["id"]) => Promise<void>;
}
