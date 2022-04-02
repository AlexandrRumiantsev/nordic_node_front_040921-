import BasicTextFields from "../../../../Components/BasicTextFields"
import BasicButtons from "../../../../Components/BasicButtons"

const handlerReg = () => {
    alert('Регистрация')
}

export const Reg = ({setCurrentPag}) => {
    return (
        <div>
            <h1>Страница Регистрации</h1>
            <BasicTextFields
                style={3}
                label={"Логин"}
            />
            <BasicTextFields
                style={1}
                label={"Пароль"}
            />
            <BasicTextFields
                style={1}
                label={"Почта"}
            />
             <BasicTextFields
                style={1}
                label={"ФИО"}
            />
             <BasicTextFields
                style={1}
                label={"Пол"}
            />
            <BasicButtons
                style={2}
                text={"Регистрация"}
                onClick={handlerReg}
            />
            <BasicButtons
                style={1}
                text={"Авторизация"}
                //onClick={ () => setCurrentPag("Auth")}
            />
        </div>
    )
}