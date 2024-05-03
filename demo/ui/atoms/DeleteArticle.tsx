import { Labels, LocalStorageKeys } from "@/core/configs/configs";
import styles from '../../styles/Atom.module.scss';
import { IArticleActions } from "../ui-types";

const DeleteArticleButton = ({ deleteArticle } : IArticleActions ) => {
    return (
        <button 
            className={styles.deleteButton} 
            type="button"
            onClick={ () => deleteArticle?.() }
        >
        {Labels.DELETE}
        </button>
    )
}


export default DeleteArticleButton;