import { ITask } from "@services/task-service/types";

export interface ITaskFormProps {
	saveTask: (task: Partial<ITask>) => void;
}
