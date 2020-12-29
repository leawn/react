import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import {StyledLogo} from "./StyledLogo";

const Logo = (props) => (
    <StyledLogo>
        <img src={burgerLogo} alt='burger logo'/>
    </StyledLogo>
);

export default Logo;