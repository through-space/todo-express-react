import { ETaskStatus, ITask } from "@services/task-service/types";
import { networkConfig } from "@config/network";
import { handleError, TaskServiceError } from "@services/task-service/errors";
import { ITaskListSettings } from "@stores/task-store/types";

const BE_URL = networkConfig.BACKEND_URL;
const API_URL = `${BE_URL}/api/tasks`;

const fetchJson = async (url: string, options: RequestInit) => {
	options.headers = {
		"Content-Type": "application/json",
	};

	const res = await fetch(url, options);

	let body: any = null;
	try {
		body = await res.json();
	} catch {}

	if (!res.ok) {
		throw new TaskServiceError(`${body?.error}`, res.status);
	}

	return body;
};

export const getTasks = async (
	options: Partial<ITaskListSettings>,
): Promise<ITask[]> => {
	const { statusFilter, orderBy, orderDirection } = options;
	const queryParams = new URLSearchParams();

	if (statusFilter && statusFilter !== "all") {
		queryParams.set("status", statusFilter);
	}

	if (orderBy && orderDirection) {
		queryParams.set("orderBy", orderBy);
		queryParams.set("orderDir", orderDirection);
	}

	const queryString = queryParams.toString();
	return fetchJson(`${API_URL}?${queryString}`, { method: "GET" })
		.then((tasks) => tasks)
		.catch(handleError);
};

export const getTaskByID = async (id: ITask["id"]): Promise<ITask | null> => {
	if (!id) {
		throw new Error("Task id is required");
	}

	return fetchJson(`${API_URL}/${id}/`, { method: "GET" })
		.then((task) => task)
		.catch(handleError);
};

export const createTask = async (task: Partial<ITask>): Promise<ITask> => {
	if (!task.title) {
		throw new Error("Task title is required");
	}

	return fetchJson(API_URL, { method: "POST", body: JSON.stringify(task) })
		.then((task) => task)
		.catch(handleError);
};

export const updateTask = async (
	id: ITask["id"],
	task: Partial<ITask>,
): Promise<ITask> => {
	if (!id) {
		throw new Error("Task id is required");
	}

	return fetchJson(`${API_URL}/${id}`, {
		method: "PUT",
		body: JSON.stringify(task),
	})
		.then((task) => task)
		.catch(handleError);
};

export const updateTaskStatus = async (
	id: ITask["id"],
	status: ETaskStatus,
): Promise<ITask> => {
	if (!id) {
		throw new Error("Task id is required");
	}

	return fetchJson(`${API_URL}/${id}`, {
		method: "PATCH",
		body: JSON.stringify({ status }),
	})
		.then((task) => task)
		.catch(handleError);
};

export const deleteTask = async (id: ITask["id"]): Promise<void> => {
	if (!id) {
		throw new Error("Task title is required");
	}

	return fetchJson(`${API_URL}/${id}`, {
		method: "DELETE",
	})
		.then((task) => task)
		.catch(handleError);
};
