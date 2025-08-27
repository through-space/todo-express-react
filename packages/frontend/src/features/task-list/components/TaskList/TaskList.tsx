import { useTaskStore } from "@stores/task-store/taskStore";
import { FC, useState } from "react";
import { Task } from "@features/task-list/components/Task/Task";
import { TaskListWrapper } from "@features/task-list/components/TaskList/TaskListStyledComponents";
import { ITaskListProps } from "@features/task-list/components/TaskList/types";
import { DeleteConfirmation } from "@features/task-list/components/DeleteConfirmation/DeleteConfirmation";
import { ITask } from "@services/task-service/types";

export const TaskList: FC<ITaskListProps> = ({ onTaskDelete, onTaskEdit }) => {
	const { tasks } = useTaskStore();
	const [isDeleteDialogOpen, setIsDeleteDialogOpen] =
		useState<boolean>(false);
	const [deleteID, setDeleteID] = useState<ITask["id"]>(null);

	const openDeleteDialog = (id: ITask["id"]) => {
		setDeleteID(id);
		setIsDeleteDialogOpen(true);
	};

	const handleTaskDelete = () => {
		deleteID && onTaskDelete(deleteID);
		setIsDeleteDialogOpen(false);
	};

	const handleTaskDeleteCancel = () => {
		setDeleteID(null);
		setIsDeleteDialogOpen(false);
	};

	const taskItems = tasks.map((task) => (
		<Task
			key={task.id}
			task={task}
			onEdit={onTaskEdit}
			onDelete={openDeleteDialog}
		/>
	));

	return (
		<>
			<DeleteConfirmation
				deleteID={deleteID}
				isOpen={isDeleteDialogOpen}
				onDelete={handleTaskDelete}
				onCancel={handleTaskDeleteCancel}
			/>
			<TaskListWrapper>{taskItems}</TaskListWrapper>
		</>
	);
};
