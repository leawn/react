import React from 'react';
import {StyledButton} from "./StyledButton";

const Button = ({clicked, ...restProps}) => (
    <StyledButton onClick={clicked} {...restProps}>
        {restProps.children}
    </StyledButton>
);

export default Button;