import React from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import classes from './Layout.module.css';

const layout = (props) => (
	<Auxilliary>
		<div>Toolbar, Side drawer, Backdrop</div>
		<main className={classes.Content}>
			{
				props.children
			}
		</main>
	</Auxilliary>
);

export default layout;