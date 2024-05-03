import styles from '../../styles/Atom.module.scss';
import Link from 'next/link'

const LinkToPage = ( { title, link } : { title : string, link : string}) => {
    return (
        <Link
            className={styles.link}
            href={link}>{title}</Link>
    )
}

export default LinkToPage;