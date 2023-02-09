import * as React from 'react';
import { render } from 'react-dom';
import { useEffect, useState } from 'react';
import { HelloResponse } from '../common/HelloResponse';

const App = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        fetch('/api/hello')
            .then<HelloResponse>(res => res.json())
            .then(res => setText(res.text));
    }, []);

    return <h1>{ text }</h1>;
};

render(<App />, document.getElementById('app'));