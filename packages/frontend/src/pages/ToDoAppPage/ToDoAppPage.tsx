import { FC } from "react";
import { TaskList } from "@features/task-list/components/TaskList/TaskList";
import { TaskForm } from "@features/task-form/components/TaskForm/TaskForm";
import { useTasks } from "@hooks/useTasks";

export const ToDoAppPage: FC = () => {
	const { saveTask, deleteTask, editTask, updateTaskStatus } = useTasks();

	return (
		<>
			<TaskList
				onTaskDelete={deleteTask}
				onTaskEdit={editTask}
				onStatusUpdate={updateTaskStatus}
			/>
			<TaskForm saveTask={saveTask} />
		</>
	);
};
