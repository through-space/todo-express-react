import { taskService } from "@services/task-service/taskService";
import { useEffect } from "react";
import { useTaskStore } from "@stores/task-store/taskStore";
import { ITask } from "@services/task-service/types";
import { IUseTasks } from "@hooks/useTasks/types";
import {
	handleTaskDelete,
	handleTaskCreate,
	handleTaskUpdate,
} from "@hooks/useTasks/consts";
import { deleteTask } from "@services/task-service/consts";

export const useTasks = (): IUseTasks => {
	const {
		getTaskById,
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
		addTask({ ...task, isPending: true });
	};

	const onPreUpdate = (task: ITask) => {
		updateTask(task.id, { isPending: true });
	};

	const onPreDelete = (taskID: ITask["id"]) => {
		updateTask(taskID, { isPending: true });
	};

	const onDeleteSuccess = (taskID: ITask["id"]) => {
		deleteTask(taskID);
	};

	const onEditTask = (id: ITask["id"]) => {
		const task = getTaskById(id);
		setEditedTask(task);
	};

	// TODO: add error handling

	return {
		saveTask: (task) => {
			if (task?.id) {
				handleTaskUpdate(task, {
					onSaveSuccess,
					onPreSave: onPreUpdate,
				});
			} else {
				handleTaskCreate(task, { onSaveSuccess, onPreSave });
			}
		},
		deleteTask: (id: string) =>
			handleTaskDelete(id, { onPreDelete, onDeleteSuccess }),
		editTask: onEditTask,
	};
};
