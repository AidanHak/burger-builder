import React from 'react';
import styles from './burgerIngredient.module.css'

const burgerIngredient = (props) => {
	let ingredient = null;

	switch (props.type) {
		case ('bread-bottom'):
			ingredient = <div className{styles.BurgerBottom}></div>
	}
};

export default burgerIngredient;