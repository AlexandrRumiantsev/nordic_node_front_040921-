import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BasicTextFields from "../../../../Components/BasicTextFields"
import BasicButtons from "../../../../Components/BasicButtons"

import { addUser } from "../../../../store/actons/user/user-action"

export const Reg = ({setCurrentPag}) => {

    const [fieldsRef, setFieldsRef] = useState([])
    const dispetcher = useDispatch()
    const navigate = useNavigate();

    const handlerReg = () => {
        
        let querySTR = "http://localhost:3000/reg?data="
        const arrResult = {}
        
        fieldsRef.forEach((element) => {
            // Фикс бага с нулами
            if(element.current){
               
               let inputEl = element.current.querySelector("input");
               arrResult[inputEl.name] = inputEl.value

               if(inputEl.value == ''){
                    //inputEl.
                    inputEl.style = 'border-bottom: 2px solid red;'
               }else {
                   inputEl.style = ''
               }
            }
        })

        //Поля по умолчанию
        arrResult.role = 'USER'
        arrResult.img = ''

        querySTR += JSON.stringify(arrResult)
        //http://localhost:3000/reg?data={"login":"qwewq","password":"ewqeqw","email":"eqwewqeq","fio":"eqweqwew","flame":"qwe","role":"USER","img":""}
        dispetcher(
            addUser(querySTR)
        )
    
        navigate("/")
    }

    return (
        <div>
            <h1>Страница Регистрации</h1>
            <BasicTextFields
                style={3}
                label={"Логин"}
                name={"login"}
                arrayRefs={fieldsRef}
            />
            <BasicTextFields
                style={1}
                label={"Пароль"}
                name={"password"}
                arrayRefs={fieldsRef}
            />
            <BasicTextFields
                style={1}
                label={"Почта"}
                name={"email"}
                arrayRefs={fieldsRef}
            />
             <BasicTextFields
                style={1}
                label={"ФИО"}
                name={"fio"}
                arrayRefs={fieldsRef}
            />
             <BasicTextFields
                style={1}
                label={"Пол"}
                name={"flame"}
                arrayRefs={fieldsRef}
            />
            <BasicButtons
                style={2}
                text={"Регистрация"}
                onClick={handlerReg}
            />
            <BasicButtons
                style={1}
                text={"Авторизация"}
                onClick={ () => setCurrentPag("Auth")}
            />
        </div>
    )
}