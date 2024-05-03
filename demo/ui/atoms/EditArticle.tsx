import { Labels, LocalStorageKeys } from "@/core/configs/configs";
import styles from '../../styles/Atom.module.scss';
import { useState } from "react";
import ArticleDescription from "./ArticleDescription";
import ArticleModalCloseButton from "./ArticleModalCloseButton";
import ArticleModalSaveButton from './ArticleModalSaveButton';
import ArticleText from "./ArticleText";
import ArticleTitle from "./ArticleTitle";
import ArticleEdit from '../molecules/ArticleEdit';
import { ArticleState, changeArticleState } from "@/store/articleSlice";
import { useAppDispatch } from "../../hooks";
const EditArticleButton = ({ editArticle, article } :{ editArticle : () => void, article : ArticleState }) => {
    const [showModal, setShowModalState] = useState(false);
    const dispatch = useAppDispatch();
    const saveArticle = async () => {
        dispatch(changeArticleState({...article, save: true}));
    }
    return (
        <>
            <button 
                className={styles.editButton} 
                type="button"
                onClick={ () => editArticle?.() }
            >
            {Labels.EDIT}
            </button>
            {showModal && 
                <div id='edit' className={styles.modal}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalContent__first}>
                            <ArticleEdit isEdit={true} article={article} editArticle={saveArticle}/>
                        </div>
                        <div>
                            <ArticleModalCloseButton closeModal={ () => setShowModalState(false)}/>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}


export default EditArticleButton;

