import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxilliary from '../../../hoc/Auxilliary/Auxilliary';

const sideDrawer = (props) => {
	let attachedClasses = [styles.SideDrawer, styles.Close];
	if (props.open) {
		attachedClasses = [styles.SideDrawer, styles.Open];
	}
	return (
		<Auxilliary>
			<Backdrop clicked={props.closed} show={props.open} />
			<div className={attachedClasses.join(' ')}>
				<div className={styles.Logo}>
					<Logo />
				</div>
				<NavigationItems />
			</div>
		</Auxilliary>
	);
}

export default sideDrawer;