import ArticleDescription from "../atoms/ArticleDescription";
import ArticleModalSaveButton from '../atoms/ArticleModalSaveButton';
import ArticleText from "../atoms/ArticleText";
import ArticleTitle from "../atoms/ArticleTitle";
import { IArticleEdit } from "../ui-types";
import styles from '../../styles/Modal.module.scss';
import React from "react";
const ArticleEdit = ( { article, isEdit, editArticle} : IArticleEdit ) => {
    return (
        
        <>
        <div className={styles.container} >
            <h2>Title</h2>
                <ArticleTitle title={article.title} isEdit={true} /> 
            Description
                <ArticleDescription description={article.description} isEdit={true} />
            Text
            <div>
                <ArticleText text={article.text} isEdit={true}/>
            </div>
            
            <ArticleModalSaveButton openModal={editArticle}/>
        </div>
        
        </>
    )
}

export default ArticleEdit;
