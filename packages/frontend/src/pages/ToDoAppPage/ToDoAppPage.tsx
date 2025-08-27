import { FC } from "react";
import { TaskList } from "@features/task-list/components/TaskList/TaskList";
import { TaskForm } from "@features/task-form/components/TaskForm";
import { useTasks } from "@hooks/useTasks";

export const ToDoAppPage: FC = () => {
	const { saveTask, deleteTask } = useTasks();

	return (
		<>
			<TaskList onTaskDelete={deleteTask} onTaskEdit={() => {}} />
			<TaskForm saveTask={saveTask} />
		</>
	);
};
