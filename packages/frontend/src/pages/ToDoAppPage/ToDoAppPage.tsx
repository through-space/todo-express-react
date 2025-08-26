import { FC, useState } from "react";
import { useTaskService } from "@hooks/useTaskService";
import { TaskList } from "@features/task-list/components/TaskList/TaskList";

export const ToDoAppPage: FC = () => {
	useTaskService();
	const [someNumber, setSomeNumber] = useState<number>(0);

	const a = 123;

	return (
		<>
			<TaskList />
			<>Number3: {someNumber}</>
			<button onClick={() => setSomeNumber(someNumber + 1)}>+ 1</button>
		</>
	);
};
