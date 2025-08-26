export interface INetworkConfig {
	BACKEND_URL: string;
}
export const networkConfig: INetworkConfig = {
	BACKEND_URL: import.meta.env.VITE_BE_URL,
};
