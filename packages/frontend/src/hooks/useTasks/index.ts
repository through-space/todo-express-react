import { taskService } from "@services/task-service/taskService";
import { useEffect } from "react";
import { useTaskStore } from "@stores/task-store/taskStore";
import { ITask } from "@services/task-service/types";
import { IUseTasks } from "@hooks/useTasks/types";
import { handleTaskSave } from "@hooks/useTasks/consts";

export const useTasks = (): IUseTasks => {
	const { editedTask, setEditedTask, setTasks, addTask, updateTask } =
		useTaskStore();

	useEffect(() => {
		taskService.getTasks().then((tasks) => {
			setTasks(tasks);
		});
	}, []);

	const onSaveSuccess = (task: ITask) => {
		if (editedTask?.id) {
			updateTask(editedTask.id, task);
		} else {
			addTask(task);
		}

		setEditedTask(null);
		// setTasks((tasks: ITask[]) => {
		// 	if (task.id) {
		// 		return tasks.map((newTask) =>
		// 			newTask.id === task.id ? task : newTask,
		// 		);
		// 	} else {
		// 		return [...tasks, task];
		// 	}
		// });
	};

	return {
		saveTask: (task) => handleTaskSave(task, onSaveSuccess, () => {}),
		deleteTask: (id: string) => {},
	};
};
