import React, { Component } from 'react';
import styles from './Modal.module.css';
import Auxilliary from '../../../hoc/Auxilliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
	render() {
		return (
			<Auxilliary>
				<Backdrop show={this.props.show} clicked={this.props.closeModal} />
				<div 
					className={styles.Modal}
					style={{
						transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
						opacity: this.props.show ? '1': '0'
					}}>
					{
						this.props.children
					}
				</div>
			</Auxilliary>
		);
	}
}

export default Modal;