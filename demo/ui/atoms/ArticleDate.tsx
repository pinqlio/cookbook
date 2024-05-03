import styles from '../../styles/Atom.module.scss';
import { IDate } from '../ui-types';
import moment from 'moment';

const ArticleDate = ({date} : IDate ) => {
    const formattedDate = moment(date).format('DD MMM YYYY');
    return (
        <span className={styles.dates}>{formattedDate}</span>
    )
}


export  default ArticleDate;