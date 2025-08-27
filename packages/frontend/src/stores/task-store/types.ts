import { ETaskStatus, ITask } from "@services/task-service/types";

export enum ESortingNames {
	ID_ASC = "id_asc",
	ID_DESC = "id_desc",
	TITLE_ASC = "title_asc",
	TITLE_DESC = "title_desc",
	CREATED_AT_ASC = "created_at_asc",
	CREATED_AT_DESC = "created_at_desc",
	UPDATED_AT_ASC = "updated_at_asc",
	UPDATED_AT_DESC = "updated_at_desc",
}

export interface ITaskListSettings {
	orderBy?: "id" | "title" | "updated_at" | "created_at";
	orderDirection?: "asc" | "desc";
	sortingName?: ESortingNames;
	statusFilter?: "all" | ETaskStatus;
}

export interface ITaskStore {
	tasks: ITask[];
	settings: ITaskListSettings;
	setSettings: (settings: Partial<ITaskListSettings>) => void;
	getTaskById: (id: ITask["id"]) => ITask | null;
	setTasks: (tasks: ITask[]) => void;
	addTask: (task: ITask) => void;
	updateTask: (id: ITask["id"], task: Partial<ITask>) => void;
	deleteTask: (id: ITask["id"]) => void;
	editedTask: ITask | null;
	setEditedTask: (task: ITask | null) => void;
}
