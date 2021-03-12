import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxilliary from '../../../hoc/Auxilliary';

const sideDrawer = (props) => {
	return (
		<Auxilliary>
			<Backdrop show />
			<div className={styles.SideDrawer}>
				<div className={styles.Logo}>
					<Logo />
				</div>
				<NavigationItems />
			</div>
		</Auxilliary>
	);
}

export default sideDrawer;