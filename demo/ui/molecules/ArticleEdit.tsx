import ArticleDescription from "../atoms/ArticleDescription";
import ArticleModalSaveButton from '../atoms/ArticleModalSaveButton';
import ArticleText from "../atoms/ArticleText";
import ArticleTitle from "../atoms/ArticleTitle";
import { IArticleEdit } from "../ui-types";

const ArticleEdit = ( { article, isEdit, editArticle} : IArticleEdit ) => {
    return (
        <>
            <ArticleTitle title={article.title} isEdit={true} />
            <ArticleDescription description={article.description} isEdit={true} />
            <ArticleText text={article.text} isEdit={true} />
            <ArticleModalSaveButton openModal={editArticle}/>
        </>
    )
}

export default ArticleEdit;
