import { FC } from "react";
import { ITask } from "@services/task-service/types";
import { ITaskProps } from "@features/task-list/components/Task/types";
import { TaskWrapper } from "@features/task-list/components/Task/TaskStyledComponents";

export const Task: FC<ITaskProps> = (props) => {
	const { task } = props;

	const formattedDate = task.created_at
		? new Date(task.created_at).toLocaleString()
		: null;

	return (
		<TaskWrapper isPending={!!task?.isPending}>
			<div>{task.title}</div>
			<div>{task.description}</div>
			<div>{task.status}</div>
			<div>{formattedDate}</div>
		</TaskWrapper>
	);
};
