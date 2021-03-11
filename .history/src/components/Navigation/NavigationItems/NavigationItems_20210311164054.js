import React from 'react';
import styles from './navigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
	<ul className={styles.NavigationItems}>
		<NavigationItem>Burger Builder</NavigationItem>
		<NavigationItem>Checkout</NavigationItem>
	</ul>
);

export default navigationItems;