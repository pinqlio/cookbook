import axios from "axios";
import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import ArticleDate from "@/ui/atoms/ArticleDate";
import ArticleText from "@/ui/atoms/ArticleText";
import DeleteArticleButton from "@/ui/atoms/DeleteArticle";
import EditArticleButton from "@/ui/atoms/EditArticle";
import { selectAuthState } from  "../../store/authSlice";
import styles from "../../styles/Article.module.scss";
import BackToListButton from "../../ui/atoms/BackToList";
import { useRouter } from 'next/router';
import ArticleTitle from "@/ui/atoms/ArticleTitle";
import Picture from "@/ui/atoms/ImageInArticle";

const ArticlePage: NextPage = ({ data, notFound }: any) => {
    const isLoggedIn = useSelector(selectAuthState);
    const router = useRouter();
    const routeBack = () => {
        router.push('/articles')
    }
    return (
        <section className={styles.section}>
            <div>
                <div className={styles.title} >
                    <BackToListButton backToList={() => routeBack()} />
                </div>
                <div className={styles.title}>
                    <h3>
                        <ArticleTitle title={data?.title} isEdit={false} />
                    </h3>
                </div>
                <div className={styles.content}>
                        <Picture path={`${data.image}`} alt={data.title} width={100} height={100} />
                        <ArticleText text={data?.content} isEdit={false} />
                    </div>
                <div className={styles.date}>
                    <ArticleDate date={data?.createdAt} />
                </div>
                </div>
            {
                isLoggedIn &&
                <div>
                    <div>
                        <EditArticleButton article={data} editArticle={() => { }} /><br />
                    </div>
                    <div>
                        <DeleteArticleButton deleteArticle={() => { } } description={""} title={""} text={""} /><br/>
                    </div>
                </div>
            }
        </section>

    )


}

export async function getServerSideProps(context:any) {

    const { pid } = context.query

    try {
        const { data } = await axios.get<any>(
            'http://localhost:3000/api/articles/' + pid
        )

        if (!data) {
            return {
                props: { notFound: true }
            }
        }
        return {
            props: { data }
        }
    } catch (error) {
        return {
            props: {
                notFound: true
            }
        }
    }
}

export default ArticlePage;