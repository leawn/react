import React from 'react';
import Aux from '../../hoc/Aux';
import { Content } from './StyledLayout';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <Content>
            {props.children}
        </Content>
    </Aux>
);

export default Layout;