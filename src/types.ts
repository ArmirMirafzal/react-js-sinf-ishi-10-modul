export namespace IStore {
	export interface TodoState {
		list: Todo[];
	}

	export interface AuthState {
		firstName: string;
		lastName: string;
		accessToken: string;
	}
}

export interface Todo {
	id: string;
	description: string;
	completed: boolean;
}
