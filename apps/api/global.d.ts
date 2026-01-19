declare global {
	namespace NodeJS {
		interface ProcessEnv {
			API_PORT: number;
			API_HOST: string;
			DB_HOST: string;
			DB_PORT: number;
			DB_USER: string;
			DB_PASSWORD: string;
			DB: string;
		}
	}
}

export {};
