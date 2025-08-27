import { taskService } from "@services/task-service/taskService";
import { useEffect } from "react";
import { useTaskStore } from "@stores/task-store/taskStore";
import { ITask } from "@services/task-service/types";
import { IUseTasks } from "@hooks/useTasks/types";
import { handleTaskDelete, handleTaskSave } from "@hooks/useTasks/consts";
import { deleteTask } from "@services/task-service/consts";

export const useTasks = (): IUseTasks => {
	const {
		editedTask,
		setEditedTask,
		setTasks,
		addTask,
		updateTask,
		deleteTask,
	} = useTaskStore();

	useEffect(() => {
		taskService.getTasks().then((tasks) => {
			setTasks(tasks);
		});
	}, []);

	const onSaveSuccess = (taskID: ITask["id"], task: ITask) => {
		updateTask(taskID, { ...task, isPending: false });
		setEditedTask(null);
	};

	const onPreSave = (task: ITask) => {
		task.isPending = true;
		addTask(task);
	};

	const onPreDelete = (taskID: ITask["id"]) => {
		updateTask(taskID, { isPending: true });
	};

	const onDeleteSuccess = (taskID: ITask["id"]) => {
		deleteTask(taskID);
	};

	// TODO: add error handling

	return {
		saveTask: (task) => handleTaskSave(task, { onSaveSuccess, onPreSave }),
		deleteTask: (id: string) =>
			handleTaskDelete(id, { onPreDelete, onDeleteSuccess }),
	};
};
