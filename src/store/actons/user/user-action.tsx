import {UserType} from "../../const";

export const getUserItem = (login: any, password: any) => (dispatch: any, _getState: any) => {

    // 1. Создаём новый объект XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // 2. Конфигурируем его: GET-запрос 
    xhr.open('GET', `http://localhost:3000/auth?data={"login": "${login}","password": "${password}"}`, false);
    // 3. Отсылаем запрос
    xhr.send();

    if (xhr.status != 200) {
        dispatch({
            type: UserType.LOGIN_FAIL,
            payload: {
                textError: "Неправильный логин или пароль"
            }
        })
    } else { 
      
        try {
            const data = JSON.parse(xhr.response)

            if(data.STATUS_CODE == 200){
                
                dispatch({
                    type: UserType.LOGIN,
                    payload: data
                })

            }

        } catch {
           
            dispatch({
                type: UserType.LOGIN_FAIL,
                payload: {
                    textError: "Неправильный логин или пароль"
                }
            })

        }

    }

    
};

export const logoutUser  = () => (dispatch: any, _getState: any, api: any) => {
    return(
        dispatch({
            type: UserType.LOGOUT,
        })
    )
}


export const addUser  = (query: any) => (dispatch: any, _getState: any) => {

    // 1. Создаём новый объект XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // 2. Конфигурируем его: GET-запрос 
    xhr.open('GET', query, false);
    // 3. Отсылаем запрос
    xhr.send();

    if (xhr.status != 200) {
        dispatch({
            type: UserType.REG_FAIL,
            payload: {
                textError: "Не удалось зарегистрироваться"
            }
        })
    } else { 
      
        try {
            const data = JSON.parse(xhr.response)

            if(data.STATUS_CODE == 200){
                
                dispatch({
                    type: UserType.REG_SUCCESS,
                    payload: data
                })

            }

        } catch {
           
            // .....

        }

    }

}

