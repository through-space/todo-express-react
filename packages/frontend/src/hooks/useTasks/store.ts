import { ITaskStore } from "@stores/task-store/types";
import { ITask } from "@services/task-service/types";

export const createStoreHandlers = (store: ITaskStore) => {
	const { getTaskById, setEditedTask, addTask, updateTask, deleteTask } =
		store;

	const onSaveSuccess = (id: ITask["id"], task: ITask) => {
		updateTask(id, { ...task, isPending: false });
		setEditedTask(null);
	};

	const onPreSave = (task: ITask) => {
		addTask({ ...task, isPending: true });
	};

	const onPreUpdate = (task: ITask) => {
		updateTask(task.id, { isPending: true });
	};

	const onPreDelete = (id: ITask["id"]) => {
		updateTask(id, { isPending: true });
	};

	const onDeleteSuccess = (id: ITask["id"]) => {
		deleteTask(id);
	};

	const onEditTask = (id: ITask["id"]) => {
		const task = getTaskById(id);
		setEditedTask(task);
	};

	const onPreStatusUpdate = (id: ITask["id"], status: ITask["status"]) => {
		updateTask(id, { isPending: true });
	};

	const onStatusUpdateSuccess = (id: ITask["id"], task: ITask) => {
		updateTask(id, { ...task, isPending: false });
	};

	return {
		onSaveSuccess,
		onPreSave,
		onPreUpdate,
		onPreDelete,
		onDeleteSuccess,
		onEditTask,
		onPreStatusUpdate,
		onStatusUpdateSuccess,
	};
};
