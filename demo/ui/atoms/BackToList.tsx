import React from "react";
import styles from "../../styles/Atom.module.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";

const BackToListButton = ({ backToList }: { backToList: () => void }) => {
  return (
    <button className={styles.back} type="button" onClick={backToList}>
      <AiOutlineArrowLeft />
    </button>
  );
};

export default BackToListButton;
