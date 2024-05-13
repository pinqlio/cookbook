import styles from "../../styles/Atom.module.scss";
import { IDescription } from "../ui-types";

const ArticleModalDescription = ({ description }: IDescription) => {
  return (
    <>
      <span>description</span>
      <span className={styles.description}>{description}</span>
    </>
  );
};

export default ArticleModalDescription;
