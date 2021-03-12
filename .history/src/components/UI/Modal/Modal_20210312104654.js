import React, { Component } from 'react';
import styles from './Modal.module.css';
import Auxilliary from '../../../hoc/Auxilliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
	render() {
		return (
			<Auxilliary>
				<Backdrop show={props.show} clicked={props.closeModal} />
				<div 
					className={styles.Modal}
					style={{
						transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
						opacity: props.show ? '1': '0'
					}}>
					{
						props.children
					}
				</div>
			</Auxilliary>
		);
	}
}

export default Modal;