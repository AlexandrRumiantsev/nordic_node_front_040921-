import {UserType, systemErrorMassege} from "../../const";
import {ApiServices} from "../../../Utils/ApiServices"

export const getUserItem = (login: string, password: string) => (dispatch: any, _getState: any) => {

    ApiServices(
        "GET",
        `auth?data={"login": "${login}","password": "${password}"}`,
        (dataJSON) => {
            if(!dataJSON){
                dispatch({
                    type: UserType.SET_ERROR,
                    payload: {
                        textError: systemErrorMassege
                    }
                })
            }else {
                try {
                    const data = JSON.parse(dataJSON)
        
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
                            textError: systemErrorMassege
                        }
                    })
                }
            }
        }
    )

};

export const logoutUser  = () => (dispatch: any, _getState: any, api: any) => dispatch({
    type: UserType.LOGOUT,
})


export const addUser  = (query: string) => (dispatch: any, _getState: any) => {

    ApiServices(
        "GET",
         query,
        (dataJSON) => {
            if(!dataJSON){
                dispatch({
                    type: UserType.REG_FAIL,
                    payload: {
                        textError: systemErrorMassege
                    }
                })
            }else{
                try {
                    const data = JSON.parse(dataJSON)
        
                    if(data.STATUS_CODE == 200){
                        
                        dispatch({
                            type: UserType.REG_SUCCESS,
                            payload: data
                        })
        
                    }
        
                } catch {
                   
                    dispatch({
                        type: UserType.REG_FAIL,
                        payload: {
                            textError: systemErrorMassege
                        }
                    })
        
                }
            }
        }
    )


}

