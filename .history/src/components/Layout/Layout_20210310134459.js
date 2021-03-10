import React from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import styles from './Layout.module.css';

const layout = (props) => (
	<Auxilliary>
		<div>Toolbar, Side drawer, Backdrop</div>
		<main className={styles.Content}>
			{
				props.children
			}
		</main>
	</Auxilliary>
);

export default layout;