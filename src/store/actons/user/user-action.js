import {UserType} from "../../const";
import {jsonUser} from "../../../mocks/jsonUser"

export const getUserItem = (login, password) => (dispatch, _getState, api) => {

    console.log("getUserItem action")
    console.log(login)
    console.log(password)
    const dataUsers = JSON.parse(jsonUser)

    const currentUser = dataUsers.find(
        (user) => user.LOGIN === login && user.PASSWORD === password
    )

    return(
        dispatch({
            type: UserType.GET_ITEM,
            payload: currentUser
        })
    )
    
    
};

export const logoutUser  = () => (dispatch, _getState, api) => {
    return(
        dispatch({
            type: UserType.LOGOUT,
        })
    )
}