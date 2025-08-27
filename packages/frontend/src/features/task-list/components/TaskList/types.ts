import { ETaskStatus, ITask } from "@services/task-service/types";

export interface ITaskListProps {
	onTaskDelete: (id: ITask["id"]) => void;
	onTaskEdit: (id: ITask["id"]) => void;
	onStatusUpdate: (id: ITask["id"], status: ETaskStatus) => void;
}
