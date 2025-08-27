import { FC, useState } from "react";
import { ITaskProps } from "@features/task-list/components/Task/types";
import { TaskWrapper } from "@features/task-list/components/Task/TaskStyledComponents";

export const Task: FC<ITaskProps> = (props) => {
	const { task, onDelete, onEdit } = props;

	const formattedDate = task.created_at
		? new Date(task.created_at).toLocaleString()
		: null;

	return (
		<TaskWrapper isPending={!!task?.isPending}>
			<div>{task.title}</div>
			<div>{task.description}</div>
			<div>{task.status}</div>
			<div>{formattedDate}</div>
			<button onClick={() => onEdit(task.id)}>Edit</button>
			<button onClick={() => onDelete(task.id)}>Delete</button>
		</TaskWrapper>
	);
};
