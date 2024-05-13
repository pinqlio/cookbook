import { Labels } from "../../core/configs/configs";
import styles from "../../styles/Atom.module.scss";
const LogoutBtn = () => {
  const handleClick = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  };

  const input = {
    label: Labels.LOGOUT,
  };

  return (
    <button type="submit" onClick={handleClick} className={styles.blueButton}>
      {input.label}
    </button>
  );
};

export default LogoutBtn;
