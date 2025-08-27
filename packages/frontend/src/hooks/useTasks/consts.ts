import { ITask } from "@services/task-service/types";
import { taskService } from "@services/task-service/taskService";
import { v4 as uuidv4 } from "uuid";

export const handleTaskSave = (
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
		tempID = `temp_${uuidv4()}`;
		onPreSave({ ...task, id: tempID, isPending: true });
	}

	if (!task?.id) {
		taskService
			.createTask(task)
			.then(
				(task) =>
					onSaveSuccess && onSaveSuccess(tempID ?? task.id, task),
			)
			.catch((err) => {
				console.log(err);
				onSaveError && onSaveError(err);
			});
	}
};
