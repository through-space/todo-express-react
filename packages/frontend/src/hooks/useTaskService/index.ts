import { networkConfig } from "@config/network";

export const useTaskService = () => {
	const tasks = [1, 2];

	const beUrl = networkConfig.BACKEND_URL;

	console.log("beUrl", beUrl);
	return { tasks };
	// // const allTasks = taskService.getTasks().then((tasks) => console.log(tasks));
};
