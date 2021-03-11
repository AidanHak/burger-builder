import React from 'react';
import styles from './navigationItem.module.css';

const navigationItem = (props) => (
	<li className={styles.NavigationItem}><a href={props.link}>{props.children}</a></li>
);

export default navigationItem;