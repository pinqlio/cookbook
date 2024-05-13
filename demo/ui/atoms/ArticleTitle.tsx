import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAuthState } from "../../store/authSlice";
import styles from "../../styles/Atom.module.scss";
import { useAppDispatch } from "../../hooks";
import {
  changeArticleState,
  selectArticleState,
} from "../../store/articleSlice";
import React from "react";

const ArticleTitle = ({
  title,
  isEdit,
}: {
  title: string;
  isEdit: boolean;
}) => {
  const [value, setValue] = useState(title);
  const currentArticle = useSelector(selectArticleState);
  const dispatch = useAppDispatch();
  const onChangeHandler = (event: Partial<any>) => {
    const value = event.target.value;

    dispatch(changeArticleState({ ...currentArticle, title: value }));
    setValue(value);
  };
  return (
    <div className={styles.input}>
      {!isEdit && <span className={styles.dates}>{title}</span>}
      {isEdit && (
        <input onChange={onChangeHandler} type="text" value={value}></input>
      )}
    </div>
  );
};
export default ArticleTitle;
