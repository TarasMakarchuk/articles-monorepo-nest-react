import * as React from 'react';
import { render } from 'react-dom';
import { useEffect, useState } from 'react';
import { ArticleListResponse } from '../common/ArticleListResponse';

const App = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        fetch('/api/hello')
            .then<ArticleListResponse>(res => res.json())
            .then(res => setText(res.text));
    }, []);

    return <h1>{ text }</h1>;
};

render(<App />, document.getElementById('app'));