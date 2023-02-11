import * as React from 'react';
import { ArticleListResponse } from '../common/ArticleListResponse';
import { Link } from 'react-router-dom';

export const ArticleList = () => {
    const [articles, setArticles] = React.useState<string[]>([]);
    React.useEffect(() => {
        fetch('/api/article/list')
            .then<ArticleListResponse>((response) => response.json())
            .then((articles) => setArticles(articles));
    }, []);

    return (
        <nav>
            <ul>
                {articles.map((article) => (
                    <li>
                        <Link to={`/article/${article}`}>{article}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
