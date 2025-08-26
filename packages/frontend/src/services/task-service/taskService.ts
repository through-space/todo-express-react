import { ITaskService } from "@services/task-service/types";
import { getTasks } from "@services/task-service/consts";

export const taskService: ITaskService = {
	getTasks,
};
