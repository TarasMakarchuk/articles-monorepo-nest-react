import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ArticleList } from './ArticleList';

const App = () => {
    return (
        <BrowserRouter>
        <h2><a href="/">Main</a></h2>
            <nav>
                <li>
                    <Link to='/article'>Articles</Link>
                </li>
            </nav>

            <Routes>
                <Route path='/article' element={ <ArticleList /> } />
            </Routes>
        </BrowserRouter>
    );
};

render(<App />, document.getElementById('app'));