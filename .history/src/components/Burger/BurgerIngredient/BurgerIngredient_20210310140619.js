import React from 'react';
import styles from './BurgerIngredient.module.css'

const burgerIngredient = (props) => {
	let ingredient = null;

	switch (props.type) {
		case ('bread-bottom'):
			ingredient = <div className{styles.BreadBottom}></div>
	}
};

export default burgerIngredient;