import * as React from 'react';

import { Header, Footer } from '@components';

import './index.scss';

interface Props {
	readonly children?: React.ReactNode | React.ReactNode[];
	readonly className?: string;
}

export const Wrapper: React.FunctionComponent<Props> = ({ children, className }: Props) => {
	const classes = ['wrapper'];

	if (className) {
		classes.push(className);
	}

	return (
		<div className={classes.join(' ')}>
			<Header />

			<main className="main">{children}</main>

			<Footer />
		</div>
	);
};

export default Wrapper;
