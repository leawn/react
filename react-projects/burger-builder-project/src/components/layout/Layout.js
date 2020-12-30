import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { Content } from './StyledLayout';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    

    render () {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer />
                <Content>
                    {this.props.children}
                </Content>
            </Aux>
        )
    }
}

export default Layout;