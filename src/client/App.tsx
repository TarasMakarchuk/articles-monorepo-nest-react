import * as React from 'react';
import { render } from 'react-dom';

const App = () => {
    return <h2><a href="/">Main</a></h2>;
};

render(<App />, document.getElementById('app'));