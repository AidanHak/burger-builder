import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
	<nav className={[styles.NavigationItems, props.className].join(' ')}>
		<ul>
			<NavigationItem link="/" active>Burger Builder</NavigationItem>
			<NavigationItem link="/">Checkout</NavigationItem>
		</ul>
	</nav>
);

export default navigationItems;