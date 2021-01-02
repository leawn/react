import React, { Component } from 'react';

//better to use:
// const importComponent = React.lazy( () => import('./...'));
// only for default exports tho

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default});
                });
        }

        render() {
            const C = this.component;

            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;