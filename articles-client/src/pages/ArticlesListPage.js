import articles from './article-content';
import AtriclesList from '../components/ArticlesList';

const ArticlesListPage = () => {
    return (
        <>
        <h1>Статьи</h1>
        <AtriclesList articles={articles}/>
        </>
    );
};

export default ArticlesListPage;