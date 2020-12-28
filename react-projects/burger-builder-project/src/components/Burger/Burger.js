import React from 'react';
import {StyledBurger} from "./StyledBurger";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
    return (
        <StyledBurger>
            <BurgerIngredient type='bread-top' />
            <BurgerIngredient type='cheese' />
            <BurgerIngredient type='meat' />
            <BurgerIngredient type='bread-bottom' />
        </StyledBurger>
    );
};

export default Burger;