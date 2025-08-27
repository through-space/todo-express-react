import { FC } from "react";
import { IDialogProps } from "@ui-components/atoms/dialog/types";
import { DialogOverlay } from "@ui-components/atoms/dialog/styled";

export const Dialog: FC<IDialogProps> = (props) => {
	const { isOpen, children, onClose } = props;

	if (!isOpen) {
		return null;
	}

	return (
		<DialogOverlay onClick={onClose}>
			<dialog
				className={"z-51 border border-amber-700 rounded-sm relative"}
				open={isOpen}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</dialog>
		</DialogOverlay>
	);
};
