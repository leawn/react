import React from 'react';
import {StyledLogoToolbar, StyledToolbar} from "./StyledToolbar";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = (props) => (
    <StyledToolbar>
        <div>MENU</div>
        <StyledLogoToolbar>
            <Logo/>
        </StyledLogoToolbar>
        <nav>
            <NavigationItems/>
        </nav>
    </StyledToolbar>
);

export default Toolbar;