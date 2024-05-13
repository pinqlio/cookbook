import type { NextPage } from "next";
import ArticleListElement from "../../ui/molecules/ArticleListElement";
import { Fragment } from "react";
import { selectAuthState } from "../../store/authSlice";
import { useAppSelector } from "../../hooks";
import axios from "axios";
import { IListPage } from "../../ui/ui-types";
import mockArt from "../../mocks/articles.json";
import styles from "../../styles/ArticleList.module.scss";
import React from "react";
const ListPage: NextPage = ({ data, notFound }: IListPage) => {
  const isLoggedIn = useAppSelector(selectAuthState);

  return (
    <>
      <div className={styles.subject}>
        <h2>Articles list</h2>
      </div>
      {mockArt?.map((item: any) => {
        return (
          <Fragment key={item.id}>
            <div className={styles.container}>
              <ArticleListElement isLoggedIn={isLoggedIn} article={item} />
            </div>
          </Fragment>
        );
      })}
      {!mockArt && notFound && <span> No articles found </span>}
    </>
  );
};

export async function getServerSideProps() {
  try {
    const { data } = await axios.get<any>(
      "https://localhost:3000/api/articles"
    );
    if (!data) {
      return {
        props: { notFound: true },
      };
    }
  } catch (error) {
    return {
      props: { notFound: true },
    };
  }
}

export default ListPage;
