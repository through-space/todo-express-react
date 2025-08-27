import { FC } from "react";
import { ITaskProps } from "@features/task-list/components/Task/types";
import { TaskWrapper } from "@features/task-list/components/Task/styled";
import {
	getStatusColor,
	statusSelectionOptions,
} from "@features/task-list/components/Task/consts";
import { SelectInput } from "@ui-components/atoms/select-input/SelectInput";
import { ETaskStatus } from "@services/task-service/types";

export const Task: FC<ITaskProps> = (props) => {
	const { task, onDelete, onEdit, onStatusChange } = props;

	const formattedDate = task.created_at
		? new Date(task.created_at).toLocaleString()
		: null;

	const handleStatusChange = (status: ETaskStatus) => {
		onStatusChange(task.id, status);
	};

	const statusColor = getStatusColor(task.status);

	return (
		<TaskWrapper isPending={!!task?.isPending}>
			<div>{task.title}</div>
			<div>{task.description}</div>
			<div className={`${statusColor}`}>
				<SelectInput
					id={`status-selection-${task.id}`}
					value={task.status}
					options={statusSelectionOptions}
					onChange={handleStatusChange}
				/>
			</div>
			<div>{formattedDate}</div>
			<button onClick={() => onEdit(task.id)}>Edit</button>
			<button onClick={() => onDelete(task.id)}>Delete</button>
		</TaskWrapper>
	);
};
