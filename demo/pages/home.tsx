import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { useIntl } from "react-intl";

const Home: NextPage = () => {
  const formatMessage = useIntl();
  const title = formatMessage.formatMessage({ id: "page.home.head.title" });

  return (
    <>
      <h6>{title}</h6>
      <h1>Cooking in progress</h1>
      <div id="cooking">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div id="area">
          <div id="sides">
            <div id="pan"></div>
            <div id="handle"></div>
          </div>
          <div id="pancake">
            <div id="pastry"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
