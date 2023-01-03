import styles from "./Layout.module.scss";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header title="Recently viewed trips" />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
