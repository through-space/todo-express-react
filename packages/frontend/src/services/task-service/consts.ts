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

const handleError = (err: any) => {
	console.log("err", err);
};

const fetchJson = async (url: string, options: RequestInit) => {
	const res = await fetch(url, options);

	let body: any = null;
	try {
		body = await res.json();
	} catch {}

	if (!res.ok) {
		throw new Error(`Network Error: ${body?.error}`);
	}

	return body;
};

export const getTasks = async (): Promise<ITask[]> => {
	return fetchJson(API_URL, {})
		.then((tasks) => tasks)
		.catch(handleError);
};
