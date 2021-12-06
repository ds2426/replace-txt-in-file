import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { Routes } from '@utilities';

import './index.scss';

export const Header: React.FC = () => {
	const Nav = (): JSX.Element => (
		<nav className="c-nav">
			<ul>
				<li>
					<NavLink to={Routes.BASE}></NavLink>
				</li>
			</ul>
		</nav>
	);

	return (
		<header className="c-header">
			<div className="o-shell o-shell--flex">
				<Nav />
			</div>
		</header>
	);
};

export default Header;
