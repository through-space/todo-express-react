import { FC, ReactNode } from "react";

export const FormWrapper: FC<{ children?: ReactNode }> = ({ children }) => {
	return (
		<div
			className={
				"flex flex-column p-2 border rounded-sm border-emerald-100 grow max-h-1/2"
			}
		>
			{children}
		</div>
	);
};

export const FormFieldsWrapper: FC<{ children?: ReactNode }> = ({
	children,
}) => {
	return <div className={"flex flex-col gap-3"}>{children}</div>;
};

export const FormFieldWrapper: FC<{ children?: ReactNode }> = ({
	children,
}) => {
	return (
		<div className={"p-2 border rounded-sm border-emerald-300"}>
			{children}
		</div>
	);
};
