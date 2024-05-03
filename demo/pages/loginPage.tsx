import type { NextPage } from "next";
import Link from "next/link"
import styles from "../styles/LoginForm.module.scss"
import LoginForm from "../ui/molecules/LoginForm"
import { Provider } from "react-redux";
import { store } from "@/store";
import Separator from "@/ui/atoms/Separator";

const LoginPage: NextPage = () => {
    return (
    <>
    <div>
        <article className="content">
            <Provider store={store}>
                <LoginForm />
            </Provider>
            <Separator/>
        </article>
    </div>
    </>
    )
}

export default LoginPage