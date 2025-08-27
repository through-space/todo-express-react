import { FC, ReactNode } from "react";

export const TaskWrapper: FC<{ children?: ReactNode; isPending: boolean }> = ({
	children,
	isPending,
}) => {
	return (
		<div
			className={
				"flex flex-row justify-end p-2 border rounded-sm gap-5 border-emerald-100 " +
				(isPending ? " opacity-50" : "")
			}
		>
			{children}
		</div>
	);
};
