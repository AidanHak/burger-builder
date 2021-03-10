import React from 'react';
import styles from './BuildControl.module.css';

const buildControl = (props) => (
	<div>
		<div>{props.label}</div>
		<button>Less</button>
		<button>More</button>
	</div>
);

export default buildControl;