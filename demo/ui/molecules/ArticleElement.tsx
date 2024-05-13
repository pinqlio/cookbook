import { useRouter } from "next/router";
import styles from "../../styles/Atom.module.scss";
import AddArticleButton from "../atoms/AddArticle";
import LinkToPage from "../atoms/LinkToPage";
import Separator from "../atoms/Separator";
import { INavigation } from "../ui-types";

const ArticleElement = ({ navigation }: { navigation: Array<INavigation> }) => {
  // const router = useRouter();

  return (
    <></>
    // <nav className={styles.nav}>
    //     <div>
    //         {navigation && navigation.map((navElement: INavigation) => {
    //             console.log('tt',navElement,router)
    //             return (
    //                 <div key={navElement.link} className={router.asPath === navElement.link ? styles.active : ""}>
    //                     <LinkToPage
    //                         title={navElement.title}
    //                         link={navElement.link}
    //                     />
    //                     <Separator />
    //                 </div>
    //             );
    //         })}
    //     </div>
    //     <div>
    //         <AddArticleButton openModal={() => {}} />
    //     </div>
    // </nav>
  );
};

export default ArticleElement;
