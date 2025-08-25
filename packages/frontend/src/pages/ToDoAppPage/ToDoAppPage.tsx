import { FC, useState } from "react";

export const ToDoAppPage: FC = () => {
	const [someNumber, setSomeNumber] = useState<number>(0);
	return (
		<>
			<>Number1:sdfasfdsf {someNumber}</>
			<button onClick={() => setSomeNumber(someNumber + 1)}>+ 1</button>
		</>
	);
};
