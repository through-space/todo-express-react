import { ITask } from "@services/task-service/types";

export interface ITaskProps {
	task: ITask;
	onDelete: (id: ITask["id"]) => void;
	onEdit: (id: ITask["id"]) => void;
}
