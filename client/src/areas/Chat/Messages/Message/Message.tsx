import React, { FC } from 'react';
import { style } from 'typestyle';

const styles = {
	container: style({}),
}

type Props = {};

export const Message: FC<Props> = () => {
	return <div className={styles.container}>

	</div>
}
