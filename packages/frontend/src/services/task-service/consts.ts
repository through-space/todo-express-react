import { ETaskStatus, ITask } from "@services/task-service/types";
import { networkConfig } from "@config/network";

// getTasks: () => Promise<ITask[]>;
// getTaskByID: (id: ITask["id"]) => Promise<ITask>;
// createTask: (task: Partial<ITask>) => Promise<ITask>;
// updateTask: (id: ITask["id"], task: Partial<ITask>) => Promise<ITask>;
// updateTaskStatus: (id: ITask["id"], status: ETaskStatus) => Promise<ITask>;
// deleteTask: (id: ITask["id"]) => Promise<void>;

const BE_URL = networkConfig.BACKEND_URL;
const API_URL = `${BE_URL}/api/tasks`;

export const getTasks = async (): Promise<ITask[]> => {
	return fetch(`${API_URL}/`)
		.then((res) => res.json())
		.then((tasks) => tasks);
};
