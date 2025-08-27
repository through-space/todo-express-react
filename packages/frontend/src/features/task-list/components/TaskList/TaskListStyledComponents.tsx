import { FC, ReactNode } from "react";

export const TaskListWrapper: FC<{ children?: ReactNode }> = ({ children }) => {
	return (
		<div className={"flex flex-col gap-3 overflow-scroll max-h-1/2"}>
			{children}
		</div>
	);
};
