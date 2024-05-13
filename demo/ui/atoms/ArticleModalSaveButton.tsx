import { useEffect, useState } from "react";
import { Labels } from "../../core/configs/configs";
import { LocalStorageKeys } from "../../core/configs/configs";
import styles from "@/styles/Atom.module.scss";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeAuthState, selectAuthState } from "../../store/authSlice";
import ArticleEdit from "../molecules/ArticleEdit";
import ArticleModalCloseButton from "./ArticleModalCloseButton";
import { IAddArticleButton, IArticle } from "../ui-types";
import React from "react";

const ArticleModalSaveButton = ({ openModal }: IAddArticleButton) => {
  const [buttonLabel, setButtonLabel] = useState(Labels.SUBMIT);
  const isLoggedIn = useAppSelector(selectAuthState);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();

  const saveData = (data: IArticle) => {
    console.log("data to save", data);
  };

  return (
    <>
      {isLoggedIn && (
        <button
          className={styles.blueButton}
          type="button"
          onClick={() => openModal()}
        >
          {Labels.ADD_ARTICLE}
        </button>
      )}
      {!isLoggedIn && (
        <Link className={styles.blueButton} href={"/login"}>
          {Labels.SUBMIT}
        </Link>
      )}
    </>
  );
};

export default ArticleModalSaveButton;
