import { ITaskStore } from "@stores/task-store/types";
import { ITask } from "@services/task-service/types";

export const createStoreHandlers = (store: ITaskStore) => {
	const {
		getTaskById,
		setEditedTask,
		setTasks,
		addTask,
		updateTask,
		deleteTask,
	} = store;

	const onSaveSuccess = (TaskId: ITask["id"], task: ITask) => {
		updateTask(TaskId, { ...task, isPending: false });
		setEditedTask(null);
	};

	const onPreSave = (task: ITask) => {
		addTask({ ...task, isPending: true });
	};

	const onPreUpdate = (task: ITask) => {
		updateTask(task.id, { isPending: true });
	};

	const onPreDelete = (TaskId: ITask["id"]) => {
		updateTask(TaskId, { isPending: true });
	};

	const onDeleteSuccess = (TaskId: ITask["id"]) => {
		deleteTask(TaskId);
	};

	const onEditTask = (id: ITask["id"]) => {
		const task = getTaskById(id);
		setEditedTask(task);
	};

	return {
		onSaveSuccess,
		onPreSave,
		onPreUpdate,
		onPreDelete,
		onDeleteSuccess,
		onEditTask,
	};
};
