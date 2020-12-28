import React from 'react';
import PropTypes from 'prop-types';
import {Bacon, BreadBottom, BreadTop, Cheese, Meat, Salad, Seeds1, Seeds2} from "./StyledBurgerIngredient";

const BurgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <BreadBottom/>;
            break;
        case ('bread-top'):
            ingredient = (
                <BreadTop>
                    <Seeds1/>
                    <Seeds2/>
                </BreadTop>
            );
            break;
        case ('meat'):
            ingredient = <Meat/>;
            break;
        case ('cheese'):
            ingredient = <Cheese/>
            break;
        case ('bacon'):
            ingredient = <Bacon/>
            break;
        case ('salad'):
            ingredient = <Salad/>
            break
        default:
            ingredient = null;
    }

    return ingredient;
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;