import { FC, ReactNode } from "react";

export const TaskWrapper: FC<{ children?: ReactNode }> = ({ children }) => {
	return (
		<div
			className={
				"flex flex-row p-2 border rounded-sm gap-5 border-emerald-100 "
			}
		>
			{children}
		</div>
	);
};
