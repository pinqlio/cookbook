
import { useEffect, useState } from "react";
import { IAddArticleButton, IArticle } from "../ui-types";
import { useAppDispatch, useAppSelector} from "../../hooks";
import { selectAuthState } from "../../store/authSlice" ;
import styles from '../../styles/Atom.module.scss';
import Link from "next/link";
import { changeArticleState, selectArticleState } from "../../store/articleSlice";
import ArticleEdit from "../molecules/ArticleEdit";
import ArticleModalCloseButton from "./ArticleModalCloseButton";
import { useSelector } from "react-redux";
import { Labels } from "@/core/configs/configs";

const AddArticleButton = ({ openModal }: IAddArticleButton) => {
    const [buttonLabel, setButtonState] = useState(Labels.SUBMIT);
    const [showModal, setModalState] = useState(false);
    const isLoggedIn = useAppSelector(selectAuthState)
    // console.log(isLoggedIn)
    //const currentArticle = useSelector(selectArticleState);

     const dispatch = useAppDispatch();

    const newArticle = {
        id: -1,
        title: '',
        description: '',
        text: '',
        publishingDate: '',
        isNew: true,
        save: false
    }

    const saveData = (data: IArticle) => {
       // dispatch(changeArticleState({ ...currentArticle, save: true }))
    }
    useEffect(() => {
        if (isLoggedIn) {
            setButtonState(Labels.ADD_ARTICLE)
        }
        if (showModal) {
            console.log(newArticle)
            dispatch(changeArticleState(newArticle));
        }
       
    }, [newArticle]);

    return (
        <>
            {isLoggedIn &&
                <button className={styles.blueButton}
                    type="button" onClick={() => setModalState(true)}>
                    {Labels.ADD_ARTICLE}
                </button >
            }
            {showModal &&
                <>
                    <div id="edit" className={styles.modal}>
                        <div className={styles.modalContent}>
                            <div className={styles.modalContent__first}>
                                <ArticleEdit isEdit={true} article={newArticle} editArticle={saveData} />
                            </div>
                            <div>
                                <ArticleModalCloseButton closeModal={() => setModalState(false)} />
                            </div>
                        </div>
                    </div>
                </>
            }
            {!isLoggedIn &&
                <Link className={styles.blueButton}
                    href="/loginPage"
                >{Labels.SUBMIT}</Link>
            }
        </>
    )
}



export default AddArticleButton