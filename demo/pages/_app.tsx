import { Amplify } from "@aws-amplify/core";
// import config from "./aws-exports";
import "@/styles/globals.css";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { wrapper } from "../store";
import { Provider } from "react-redux";
import Layout from "../components/layout";
import { useEffect } from "react";
import { getFromStorageByKey } from "./api/core/local-storage";
import { LocalStorageKeys } from "../core/configs/configs";
import { changeAuthState } from "../store/authSlice";
import { useAppDispatch } from "../hooks/index";
// import { store } from "./store";
import de from "../lang/de.json";
import en from "../lang/en.json";
import { IntlProvider, createIntl } from "react-intl";
import { useRouter } from "next/router";

const locale = "en";
const messages: any = {
  de,
  en,
};

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // Report web vitals here
}

export default function CookBook({ Component, pageProps }: AppProps) {
  const { store } = wrapper.useWrappedStore(pageProps);

  useEffect(() => {
    const authFromStorage = getFromStorageByKey(LocalStorageKeys.LOGIN);

    if (authFromStorage) {
      store.dispatch(changeAuthState(authFromStorage));
    }
  }, [store]);

  const intl = createIntl({
    locale,
    messages,
  });

  const localeToString = locale as string;

  return (
    <Provider store={store}>
      <Layout>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <Component {...pageProps} />
        </IntlProvider>
      </Layout>
    </Provider>
  );
}
