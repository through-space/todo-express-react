export interface ITextInputProps {
	id: string;
	value: string;
	placeholder?: string;
	onChange?: (value: string) => void;
}
