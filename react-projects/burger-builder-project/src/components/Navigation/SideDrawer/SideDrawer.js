import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import {StyledLogoSideDrawer, StyledSideDrawer} from "./StyledSideDrawer";

const SideDrawer = (props) => {
    return (
        <StyledSideDrawer>
            <StyledLogoSideDrawer>
                <Logo/>
            </StyledLogoSideDrawer>
            <nav>
                <NavigationItems/>
            </nav>
        </StyledSideDrawer>
    );
};

export default SideDrawer;