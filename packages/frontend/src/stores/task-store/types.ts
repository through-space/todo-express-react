import { ITask } from "@services/task-service/types";

export interface ITaskStore {
	tasks: ITask[];
	setTasks: (tasks: ITask[]) => void;
}
