import styles from '../../styles/Atom.module.scss';


const ArticleModalText = ({ text }: { text: string })  => {
    return (
        <span className={styles.text}>{text}</span>
    )
}


export  default ArticleModalText;