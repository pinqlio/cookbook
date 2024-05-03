import Link from "next/link";
import styles from '../../styles/Atom.module.scss';
import ArticleDate from "../atoms/ArticleDate";
import ArticleDescription from "../atoms/ArticleDescription";
import ArticleTitle from "../atoms/ArticleTitle";
import DeleteArticleButton from "../atoms/DeleteArticle";
import EditArticleButton from "../atoms/EditArticle";
import { IArticle } from "../ui-types";

const ArticleListElement = ({ article, isLoggedIn } : { article : IArticle, isLoggedIn : boolean }) => {
    return (
        <section className={styles.ArticleListElement}>
            <Link href={`/articles/${article.id}`} className={styles.linkToDiv}>
                <div><ArticleTitle isEdit={false} title={article.title} /></div>
                <div><ArticleDescription isEdit={false} description={article.description}/></div>
                <div><ArticleDate date={article.publishingDate}/></div>
            </Link>
            { isLoggedIn && 
            <div>
                <EditArticleButton editArticle={() => { } } article={article}/> <br/>
                <DeleteArticleButton deleteArticle={() => { } } text={""} description={""} title={""} /> <br/>
            </div>
            }
        </section>
    )
}

export default ArticleListElement;

