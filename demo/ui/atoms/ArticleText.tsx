import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAuthState } from '../../store/authSlice'
import styles from '../../styles/Atom.module.scss';

const ArticleText = ({ text, isEdit } : { text: string, isEdit : boolean}) => {
    const [value, setValue] = useState(text);
    
    const onChangeHandler = (event : Partial<any>) => {
        const value = event.target.value;
        setValue(value);
    }
    useEffect(() => {
        if (isEdit) {
            let newText = text; 
            onChangeHandler({ target: { value: newText } });
        }
    }, [text, isEdit]);
    
    

    return (
        <div className={styles.input}>
            {!isEdit &&  <span className={styles.dates}>{text}</span>}
            {isEdit && <textarea onChange={onChangeHandler} value={value}></textarea>}
        </div>
    )
}

export default ArticleText;