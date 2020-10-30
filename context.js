import React from 'react';
import ReactDOM from 'react-dom';

const ThemeContext = React.createContext('light')

class App extends React.Component {
    render() {
        return (
            <ThemeContext.Provider value={'dark'}>
                <Toolbar />
            </ThemeContext.Provider>
        );
    }
}
//We actually have a scheme here: App > Toolbar > ThemedButton, but we don't pass any arguments that we could to it
//We create a static ThemeContext that we control through ThemeContext.Provider with additional 'value' prop;
function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component {
    static contextType = ThemeContext;
    render() {
        return <Button theme={this.context} />
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)