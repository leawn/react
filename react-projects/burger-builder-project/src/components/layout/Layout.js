import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { Content } from './StyledLayout';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    render () {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer closed={this.sideDrawerClosedHandler} show={this.state.showSideDrawer}/>
                <Content>
                    {this.props.children}
                </Content>
            </Aux>
        )
    }
}

export default Layout;