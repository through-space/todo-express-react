import type { ITaskRepository } from "./types";
import { getTasks } from "./consts";

export const taskRepository: ITaskRepository = {
	getTasks,
};
