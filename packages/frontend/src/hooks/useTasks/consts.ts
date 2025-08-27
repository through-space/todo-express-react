import { ITask } from "@services/task-service/types";
import { taskService } from "@services/task-service/taskService";
import { v4 as uuidv4 } from "uuid";
import { useTaskStore } from "@stores/task-store/taskStore";

export const handleTaskCreate = (
	task: Partial<ITask>,
	options: {
		onPreSave?: (task: Partial<ITask>) => void;
		onSaveSuccess?: (TaskId: ITask["id"], task: ITask) => void;
		onSaveError?: (err: any) => void;
	},
): void => {
	const { onPreSave, onSaveSuccess, onSaveError } = options;

	let tempID: ITask["id"] | undefined;

	if (onPreSave) {
		const newTask = { ...task };
		if (!task?.id) {
			tempID = `temp_${uuidv4()}`;
			onPreSave({ ...newTask, id: tempID, isPending: true });
		}
	}

	taskService
		.createTask(task)
		.then((task) => onSaveSuccess && onSaveSuccess(tempID ?? task.id, task))
		.catch((err) => {
			onSaveError && onSaveError(err);
		});
};

export const handleTaskUpdate = (
	task: Partial<ITask>,
	options: {
		onPreSave?: (task: Partial<ITask>) => void;
		onSaveSuccess?: (TaskId: ITask["id"], task: ITask) => void;
		onSaveError?: (err: any) => void;
	},
): void => {
	const { onPreSave, onSaveSuccess, onSaveError } = options;

	if (onPreSave) {
		const newTask = { ...task };
		onPreSave({ ...newTask, isPending: true });
	}

	taskService
		.updateTask(task.id, task)
		.then((task) => onSaveSuccess && onSaveSuccess(task.id, task))
		.catch((err) => {
			onSaveError && onSaveError(err);
		});
};

export const handleTaskDelete = (
	TaskId: ITask["id"],
	options: {
		onPreDelete?: (TaskId: ITask["id"]) => void;
		onDeleteSuccess?: (TaskId: ITask["id"]) => void;
		onDeleteError?: (err: any) => void;
	},
): void => {
	const { onPreDelete, onDeleteError, onDeleteSuccess } = options;

	if (!TaskId) {
		throw new Error("Task id is required");
	}

	if (onPreDelete) {
		onPreDelete(TaskId);
	}

	taskService
		.deleteTask(TaskId)
		.then(() => onDeleteSuccess && onDeleteSuccess(TaskId))
		.catch((err) => {
			onDeleteError && onDeleteError(err);
		});
};

export const handleTaskStatusUpdate = (
	id: ITask["id"],
	status: ITask["status"],
	options: {
		onPreUpdate?: (TaskId: ITask["id"], status: ITask["status"]) => void;
		onUpdateSuccess?: (TaskId: ITask["id"], task: ITask) => void;
		onUpdateError?: (err: any) => void;
	},
): void => {
	const { onPreUpdate, onUpdateSuccess, onUpdateError } = options;
	if (!id) {
		throw new Error("Task id is required");
	}

	onPreUpdate(id, status);

	taskService
		.updateTaskStatus(id, status)
		.then((task) => {})
		.catch((err) => {});
};
