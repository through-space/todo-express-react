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

	const onSaveSuccess = (taskID: ITask["id"], task: ITask) => {
		task.isPending = false;
		updateTask(taskID, task);
		setEditedTask(null);
	};

	const onPreSave = (task: ITask) => {
		addTask(task);
	};

	// TODO: add error handling

	return {
		saveTask: (task) => handleTaskSave(task, { onSaveSuccess, onPreSave }),
		deleteTask: (id: string) => {},
	};
};
