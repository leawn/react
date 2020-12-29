import React from 'react';
import {StyledNavigationItems} from "./StyledNavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => (
    <StyledNavigationItems>
        <NavigationItem link='/' active>Burger Builder</NavigationItem>
        <NavigationItem>Checkout</NavigationItem>
    </StyledNavigationItems>
);

export default NavigationItems;