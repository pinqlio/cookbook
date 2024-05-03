import styles from '../../styles/Atom.module.scss';


const ArticleModalTitle = ({ text }: { text: string }) => {
    return (
        <span className={styles.text}>{text}</span>
    )
}


export  default ArticleModalTitle;