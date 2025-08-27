import { FC, ReactNode } from "react";

export const DialogOverlay: FC<{
	onClick: () => void;
	children?: ReactNode;
}> = ({ children, onClick }) => {
	return (
		<div
			onClick={onClick}
			className={
				"fixed inset-0 h-full w-screen bg-black/50 flex items-center justify-center z-50"
			}
		>
			{children}
		</div>
	);
};
