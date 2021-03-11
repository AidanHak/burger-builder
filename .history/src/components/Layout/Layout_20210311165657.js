import React from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
	<Auxilliary>
		<Toolbar />
		<SideDrawer />
		<main className={styles.Content}>
			{
				props.children
			}
		</main>
	</Auxilliary>
);

export default layout;