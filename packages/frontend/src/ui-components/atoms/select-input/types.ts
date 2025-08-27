export interface ISelectOption {
	name: string;
	value: string | number;
}

export interface ISelectInputProps {
	id: string;
	value: string | number;
	options: ISelectOption[];
	onChange?: (value: string | number) => void;
}
