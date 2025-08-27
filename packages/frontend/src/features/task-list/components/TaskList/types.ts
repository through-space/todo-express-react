import { ITask } from "@services/task-service/types";

export interface ITaskListProps {
	onTaskDelete: (id: ITask["id"]) => void;
	onTaskEdit: (id: ITask["id"]) => void;
}
