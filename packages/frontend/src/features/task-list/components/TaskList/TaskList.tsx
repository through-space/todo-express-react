import { useTaskStore } from "@stores/task-store/taskStore";
import { FC } from "react";
import { Task } from "@features/task-list/components/Task/Task";

export const TaskList: FC = () => {
	const { tasks } = useTaskStore();

	console.log("in TaskList", tasks);

	const taskItems = tasks.map((task) => <Task key={task.id} task={task} />);

	// todo: add wrappers
	return <>{taskItems}</>;
};
