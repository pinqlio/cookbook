import styles from "../../styles/Atom.module.scss";

const ArticleModalCloseButton = ({
  closeModal,
}: {
  closeModal: () => void;
}) => {
  return (
    <button className={styles.close} type="button" onClick={() => closeModal()}>
      X
    </button>
  );
};

export default ArticleModalCloseButton;
