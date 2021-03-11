import React from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
	<Auxilliary>
		<Toolbar />
		<main className={styles.Content}>
			{
				props.children
			}
		</main>
	</Auxilliary>
);

export default layout;