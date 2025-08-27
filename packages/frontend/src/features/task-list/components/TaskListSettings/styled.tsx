import { FC, ReactNode } from "react";

export const TaskListSettingsWrapper: FC<{ children?: ReactNode }> = ({
	children,
}) => {
	return <div className={"flex flex-row gap-3 "}>{children}</div>;
};
