import { ReactNode } from "react";

export interface IDialogProps {
	isOpen: boolean;
	onClose: () => void;
	children?: ReactNode;
}
