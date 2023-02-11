import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router';

export const Article = () => {
    const { name } = useParams();
    const [ article, setArticle ] = React.useState<string>('');
    React.useEffect(() => {
        fetch(`/api/article/${name}`)
            .then((response) => response.text())
            .then((article) => setArticle(article));
    }, []);

    return (
        <ReactMarkdown children={ article } />
    );
}
