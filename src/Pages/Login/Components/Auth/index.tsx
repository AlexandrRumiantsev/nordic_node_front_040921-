import BasicTextFields from "../../../../Components/BasicTextFields"
import BasicButtons from "../../../../Components/BasicButtons"
import {useState} from "react";

import { useSelector, useDispatch } from 'react-redux'
import { getUserItem } from "../../../../store/actons/user/user-action"

export const Auth = ({setCurrentPag} : any) => {

    const dispatch = useDispatch()

    const [loginValue, setLoginValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    
    const handlerChange = (e: any) => {
        if(e.target.name === 'login')
            setLoginValue(e.target.value)
        else setPasswordValue(e.target.value)
    }

    const handlerLogin = () => {
        dispatch(
            getUserItem(
                loginValue,
                passwordValue
            )
        )
    }
    
    
    return (
        <div>
            <h1>Авторизация</h1>
            <BasicTextFields
                style={3}
                label={"Логин"}
                value={loginValue}
                onChange={handlerChange}
                name="login"
            />
            <BasicTextFields
                style={1}
                label={"Пароль"}
                value={passwordValue}
                onChange={handlerChange}
                name="password"
            />
            <BasicButtons
                style={2}
                text={"Авторизоваться"}
                onClick={handlerLogin}
            />
            <BasicButtons
                style={1}
                text={"Регистрация"}
                onClick={ () => setCurrentPag("Reg")}
            />
        </div>
    )
}