import { ITask } from "@services/task-service/types";

export interface IUseTasks {
	saveTask: (task: Partial<ITask>) => void;
	deleteTask: (id: ITask["id"]) => void;
}
