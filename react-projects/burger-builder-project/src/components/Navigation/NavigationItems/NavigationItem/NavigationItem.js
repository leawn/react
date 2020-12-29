import React from 'react';
import {StyledNavigationItem} from "./StyledNavigationItem";

const NavigationItem = ({link, ...restProps}) => (
    <StyledNavigationItem {...restProps}>
        <a href={link}>{restProps.children}</a>
    </StyledNavigationItem>
);

export default NavigationItem;