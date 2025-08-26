import { FC, useState } from "react";
import { useTaskService } from "@hooks/useTaskService";

export const ToDoAppPage: FC = () => {
	const { tasks } = useTaskService();
	const [someNumber, setSomeNumber] = useState<number>(0);

	const a = 123;

	return (
		<>
			<>Number3: {someNumber}</>
			<button onClick={() => setSomeNumber(someNumber + 1)}>+ 1</button>
		</>
	);
};
