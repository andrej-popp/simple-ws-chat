import { action, observable } from 'mobx';

type User = {
	name: string;
	id: string;
}

export class UserState {
	@observable public user: string | null = null;

	@action
	setUser = (user: string) => {
		this.user = user;
	}

}
