import { FC, ReactNode } from "react";

export const FormTextInputWrapper: FC<{ children?: ReactNode }> = ({
	children,
}) => {
	return (
		<div className={"p-2 border rounded-sm border-emerald-100 "}>
			{children}
		</div>
	);
};
