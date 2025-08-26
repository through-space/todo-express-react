import { taskService } from "@services/task-service/taskService";

export const useTaskService = () => {
	const tasks = taskService.getTasks().then((tasks) => console.log(tasks));
	return { tasks };
};
