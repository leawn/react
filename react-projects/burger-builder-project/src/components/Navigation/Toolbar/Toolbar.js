import React from 'react';
import {StyledLogoToolbar, StyledToolbar} from "./StyledToolbar";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import {StyledNavigation} from "../SideDrawer/StyledSideDrawer";

const Toolbar = (props) => (
    <StyledToolbar>
        <div>MENU</div>
        <StyledLogoToolbar>
            <Logo/>
        </StyledLogoToolbar>
        <StyledNavigation>
            <NavigationItems/>
        </StyledNavigation>
    </StyledToolbar>
);

export default Toolbar;