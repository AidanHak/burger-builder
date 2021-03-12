import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
	<header className={styles.Toolbar}>
		<div>MENU</div>
		<div className={[styles.Logo, styles.DesktopOnly].join(' ')}>
			<Logo />
		</div>
		<NavigationItems className={styles.DesktopOnly} />
	</header>
);

export default toolbar;