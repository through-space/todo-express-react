import { ITask } from "@services/task-service/types";
import { taskService } from "@services/task-service/taskService";

export const handleTaskSave = (
	task: Partial<ITask>,
	onSaveSuccess: (task: ITask) => void,
	onSaveError: (err: any) => void,
): void => {
	if (!task?.id) {
		taskService
			.createTask(task)
			.then((task) => onSaveSuccess(task))
			.catch((err) => {
				console.log(err);
				onSaveError(err);
			});
	}
};
