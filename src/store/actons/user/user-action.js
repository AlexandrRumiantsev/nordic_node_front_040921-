import {UserType} from "../../const";

export const getUserItem = (login, password) => (dispatch, _getState) => {

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

   /*
    return(
        dispatch({
            type: UserType.GET_ITEM,
            payload: currentUser
        })
    )
    */
    
    
};

export const logoutUser  = () => (dispatch, _getState, api) => {
    return(
        dispatch({
            type: UserType.LOGOUT,
        })
    )
}