import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import {StyledLogoSideDrawer, StyledSideDrawer} from "./StyledSideDrawer";
import Aux from "../../../hoc/Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} onClick={props.closed}/>
            <StyledSideDrawer>
                <StyledLogoSideDrawer>
                    <Logo/>
                </StyledLogoSideDrawer>
                <nav>
                    <NavigationItems/>
                </nav>
            </StyledSideDrawer>
        </Aux>
    );
};

export default SideDrawer;