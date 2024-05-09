
import PasswordInput from "../atoms/PasswordInput";
import SubmitButton from "../atoms/SubmitButton";
import { TestIDs } from "../../core/configs/configs";
import { LoginService } from "../../pages/api/core/login.service";
import React, { FormEvent, useState } from "react";
import { changeAuthState } from "../../store/authSlice"
import { useRouter } from "next/router"
import styles from "../../styles/LoginForm.module.scss"
import { useAppDispatch } from "../../hooks";
import TextInput from "../atoms/TextInputs";

const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('')
    const [showError, setShowError] = useState(false);
    const router = useRouter();
    
    const dispatch = useAppDispatch();
    const loginService = LoginService.getInstance()
    console.log(loginService)
    const loginAction = async (event: FormEvent<HTMLFormElement>) => {
        console.log('login');
        event.preventDefault();
        console.log(login, password)
        const loginState = await loginService.login(login, password)
        console.log(loginState)
        dispatch(changeAuthState(loginState))
        console.log("loginState", loginState)
        if (loginState.state) {
            router.push('/articles')
        }else {
            setShowError(true);
        }
    }

    const loginEnter = (value: string) => {
        setLogin(value);
    }

    const passwordEnter = (value: string) => {
        setPassword(value);
    }

    // const errorTestID = TestIDs.ERROR

    return (
    <div className={styles.container}>
        <section>
            <form onSubmit={loginAction} className={styles.LoginForm}>
                <p className={styles.auth}>Authorization</p>
                <div >
                    <TextInput id="login" onLoginEnter={loginEnter}  />
                </div>
                <div>
                    <PasswordInput id="password" onPasswordEnter={passwordEnter} />
                </div>
                <div className={styles.logBtn}>
                    <SubmitButton id="submit-login"  />
                </div>
                {/* <div data-testid={errorTestID}> */}
                    {showError && (
                    <span style={{ color: 'red' }}>Invalid Username or Password. Please try again.</span>
                    )}
                {/* </div>  */}
            </form>
        </section>
        </div>
    )
}

export default LoginForm
