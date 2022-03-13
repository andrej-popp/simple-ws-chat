enum MethodType {
	connection,
	message,
	exit,
}

type ResponseMessage = {
	userName: string,
	date: string;
	message: string;
	method: MethodType;
}

type RequestMessage = {
	userName: string,
	date: string;
	message: string;
	method: MethodType;
}

export class ConnectionState {
	constructor(private readonly socket: WebSocket) {
		socket.onopen = this.handleOpen;
		socket.onmessage = this.handleMessage;
	}

	handleOpen = () => {
		console.log('Подключение установлено')
		this.socket.send(JSON.stringify({
			id: '1234',
			username:'username',
			method: MethodType.connection,
		}));
	}

	handleMessage = (event: MessageEvent) => {
		let msg: ResponseMessage = JSON.parse(event.data)
		switch (msg.method) {
			case MethodType.connection:
				console.log(`пользователь ${msg.userName} присоединился`)
				break
			case MethodType.exit:
				console.log(`пользователь ${msg.userName} вышел`)
				break
			case MethodType.message:
				console.log(`пользователь ${msg.userName} отправил ${msg.message}`)
				break
		}
	}

	send = (data: string) => {
		this.socket.send(data);
	}

}
