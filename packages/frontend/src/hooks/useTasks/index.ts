import { taskService } from "@services/task-service/taskService";
import { useEffect } from "react";
import { useTaskStore } from "@stores/task-store/taskStore";
import { ITask } from "@services/task-service/types";
import { IUseTasks } from "@hooks/useTasks/types";
import {
	handleTaskCreate,
	handleTaskDelete,
	handleTaskStatusUpdate,
	handleTaskUpdate,
} from "@hooks/useTasks/consts";
import { createStoreHandlers } from "@hooks/useTasks/store";

export const useTasks = (): IUseTasks => {
	const taskStore = useTaskStore();

	useEffect(() => {
		taskService.getTasks().then((tasks) => {
			taskStore.setTasks(tasks);
		});
	}, []);

	const {
		onSaveSuccess,
		onPreUpdate,
		onPreSave,
		onDeleteSuccess,
		onPreDelete,
		onEditTask,
	} = createStoreHandlers(taskStore);

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
		updateTaskStatus: (id: ITask["id"], status: ITask["status"]) => {
			handleTaskStatusUpdate(id, status, {});
		},
	};
};
