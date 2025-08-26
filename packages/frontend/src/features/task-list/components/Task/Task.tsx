import { FC } from "react";
import { ITask } from "@services/task-service/types";
import { ITaskProps } from "@features/task-list/components/Task/types";

export const Task: FC<ITaskProps> = (props) => {
	const { task } = props;
	return (
		<div>
			<h1>{task.title}</h1>
			<p>{task.description}</p>
			<p>{task.status}</p>
		</div>
	);
};
