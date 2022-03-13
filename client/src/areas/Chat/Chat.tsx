import React, { FC, useEffect, useMemo, useState } from 'react';
import { style } from 'typestyle';
import { ConnectionState } from './Connection.state';
import { UserState } from './User.state';

const styles = {
	container: style({}),
}

type Props = {};

export const Chat: FC<Props> = () => {
	const user = useMemo(() => new UserState(), [])
	const connection = useMemo(() => new ConnectionState(new WebSocket('ws://localhost:5000')), [])

	useEffect(() => {

	}, [])

	return <div className={styles.container}>
	</div>
}
