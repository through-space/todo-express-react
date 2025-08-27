import { ITask } from "@services/task-service/types";
import { taskService } from "@services/task-service/taskService";
import { v4 as uuidv4 } from "uuid";

export const handleTaskCreate = (
	task: Partial<ITask>,
	options: {
		onPreSave?: (task: Partial<ITask>) => void;
		onSaveSuccess?: (taskID: ITask["id"], task: ITask) => void;
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
		onSaveSuccess?: (taskID: ITask["id"], task: ITask) => void;
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
	taskID: ITask["id"],
	options: {
		onPreDelete?: (taskID: ITask["id"]) => void;
		onDeleteSuccess?: (taskID: ITask["id"]) => void;
		onDeleteError?: (err: any) => void;
	},
): void => {
	const { onPreDelete, onDeleteError, onDeleteSuccess } = options;

	if (!taskID) {
		throw new Error("Task id is required");
	}

	if (onPreDelete) {
		onPreDelete(taskID);
	}

	taskService
		.deleteTask(taskID)
		.then(() => onDeleteSuccess && onDeleteSuccess(taskID))
		.catch((err) => {
			onDeleteError && onDeleteError(err);
		});
};
