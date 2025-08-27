import { ITask } from "@services/task-service/types";

export interface ITaskStore {
	tasks: ITask[];
	getTaskById: (id: ITask["id"]) => ITask | null;
	setTasks: (tasks: ITask[]) => void;
	addTask: (task: ITask) => void;
	updateTask: (id: ITask["id"], task: Partial<ITask>) => void;
	deleteTask: (id: ITask["id"]) => void;
	// updateTaskStatus: (taskID: ITask["id"], status: ITask["status"]) => void;
	editedTask: ITask | null;
	setEditedTask: (task: ITask | null) => void;
}
