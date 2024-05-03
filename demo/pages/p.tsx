// import axios from 'axios'
// import type { NextPage } from 'next'
// import { useSelector } from 'react-redux'
// import ArticleDate from '@/ui/atoms/ArticleDate'
// import ArticleText from '@/ui/atoms/ArticleText'
// import ArticleTitle from '@/ui/atoms/ArticleTitle'
// import DeleteArticleButton from '@/ui/atoms/DeleteArticle'
// import EditArticleButton from '@/ui/atoms/EditArticle'
// import { selectAuthState } from '../store/authSlice'
// import styles from '../styles/Article.module.scss'
// import BackToListButton from '../ui/atoms/BackToList'
// import { useRouter } from 'next/router'
// import { useEffect } from 'react'
// import ArticleListElement from '@/ui/molecules/ArticleListElement'
// import  mock  from '../mocks/articles.json'

// const ArticlePage : NextPage = ({ data, notFound } : any ) => {
//     const isLoggedIn :any = useSelector(selectAuthState);
//     const router = useRouter();
//     const routeBack = () => {
//         router.push('/articles');
//     }
//     useEffect(() => {
//       console.log("data",notFound ,data,mock);
//     }, []);
    
//     return (
//         <section className={styles.section}>
//             {/* <ArticleListElement article={data.article} isLoggedIn={false}/> */}
//             <div>
//                 <div className={styles.title}>
//                     <BackToListButton backToList={ () => routeBack()} /> 
//                     <h1>
//                         <ArticleTitle title={data?.title} isEdit={false}/>
//                     </h1>
//                 </div>
//                 <div>
//                 <ArticleText text={data?.text} isEdit={false}/>
//                 </div>
//                 <div>
//                     <ArticleDate date={data?.publishingDate}/>
//                 </div>
//             </div>
//             {isLoggedIn && <div>
//                 <div>
//                     <EditArticleButton article={data} editArticle={ () => {} }/> <br/>
//                 </div>
//                 <div>
//                     <DeleteArticleButton deleteArticle={() => { } } text={''} description={''} title={''}/> <br/>
//                 </div>
//             </div>}
//         </section>
//     )
// }
// export async function getServerSideProps(context: { query: { pid: any } } ) {
//     const { pid } = context.query;
//     console.log(context);
//     try {
//         const { data } = await axios.get<any>( 'https://localhost:3000/articles/' + pid)
//         if(!data){
//             return {
//                 props: { notFound : true },
//             };
//         }
//         return { 
//             props : { notFound : true },
//         };
//     } catch (error) {
//         return {
//             props : { notFound : true },
//         };
//     }
// };

// export default ArticlePage
