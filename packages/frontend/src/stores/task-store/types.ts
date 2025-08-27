import { ITask } from "@services/task-service/types";

export interface ITaskStore {
	tasks: ITask[];
	setTasks: (tasks: ITask[]) => void;
	addTask: (task: ITask) => void;
	updateTask: (id: ITask["id"], task: Partial<ITask>) => void;
	deleteTask: (id: ITask["id"]) => void;
	// updateTaskStatus: (taskID: ITask["id"], status: ITask["status"]) => void;
	editedTask: ITask | null;
	setEditedTask: (taskID: ITask | null) => void;
}
