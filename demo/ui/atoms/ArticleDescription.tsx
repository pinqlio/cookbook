import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAuthState } from '../../store/authSlice'
import styles from '../../styles/Atom.module.scss';

const ArticleDescription = ({ description, isEdit} : { description : string, isEdit : boolean}) => {
    const [value, setValue] = useState(description)
    const onChangeHandler = (event : Partial<any>) => {
        const value = event.target.value;
        setValue(value);
    }
    return (
        <div className={styles.input}>
            {!isEdit &&  <span className={styles.dates}>{description}</span>}
            {isEdit && <input onChange={onChangeHandler} type='text' value={value}></input>}
        </div>
    )
}
export default ArticleDescription