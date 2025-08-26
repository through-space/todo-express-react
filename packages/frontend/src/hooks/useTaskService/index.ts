import { taskService } from "@services/task-service/taskService";
import { useEffect } from "react";
import { useTaskStore } from "@stores/task-store/taskStore";

export const useTaskService = () => {
	// const tasks = taskService.getTasks().then((tasks) => {
	// 	taskService.getTaskByID("asdasdasd").then((task) => {
	// 		console.log(task);
	// 	});
	// });
	const { setTasks } = useTaskStore();

	useEffect(() => {
		taskService.getTasks().then((tasks) => {
			setTasks(tasks);
		});
	}, []);

	// return { tasks };
};
