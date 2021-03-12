import React, { Component } from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	render() {
		return(
			<Auxilliary>
				<Toolbar />
				<SideDrawer />
				<main className={styles.Content}>
					{
						this.props.children
					}
				</main>
			</Auxilliary>
		);
	}
}

export default Layout;