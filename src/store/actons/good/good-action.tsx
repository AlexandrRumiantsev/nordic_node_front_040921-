import {GoodType, systemErrorMassege, systemErrorMassegeDel} from "../../const";
import {ApiServices} from "../../../Utils/ApiServices"

export const fetchGoods = () => (dispatch: any, _getState: any) => {

        ApiServices(
            'GET',
            'get_all_good',
            (dataJSON) => {
                if(!dataJSON){
                    dispatch({
                        type: GoodType.SET_ERROR,
                        payload: {
                            textError: systemErrorMassege
                        }
                    })
                }else {
                        try {
                            const data = JSON.parse(dataJSON)
                            return(
                                dispatch({
                                    type: GoodType.GET_LIST,
                                    payload: data
                                })
                            )
                        } catch {
                            return(
                                dispatch({
                                    type: GoodType.SET_ERROR,
                                    payload: {
                                        textError: systemErrorMassege
                                    }
                                })
                            )
                        }
                }
            }
        )

};


export const delItemGood = (id: any, goods: any) => (dispatch: any, _getState: any) => {

    // Перебираем все товары и ищем товар, по ID, который нужно удалить
    const newGoodsList = goods.filter(
        (item: any) => item.ID !== id
    )
    
    // применяем ApiServices, передаем в него тип запроса, экшен для запроса и кол бек функцию
    ApiServices(
        "GET",
        `del_item_good?id=${id}`,
        (dataJSON) => {
    
        if (!dataJSON) {
            
            dispatch({
                type: GoodType.SET_ERROR,
                payload: {
                    textError: systemErrorMassegeDel
                }
            })

        } else {
            try {
                return(
                    dispatch({
                        type: GoodType.DEL_ITEM,
                        payload: newGoodsList
                    })
                )
            }catch {
                return(
                    dispatch({
                        type: GoodType.SET_ERROR,
                        payload: {
                            textError: systemErrorMassegeDel
                        }
                    })
                )
            }
        } 
    })
}

 
export const filterGoodList = (categoryId: any, goods: any) => (dispatch: any, _getState: any) => {

    const newGoodsList: any = goods.filter(
        (item: any) => item.CATEGORY_ID == categoryId || categoryId == "ALL"
    )

    return(
        dispatch({
            type: GoodType.FILTER_LIST,
            payload: newGoodsList
        })
    )
    

}



export const fetchGood = (id: any) => (dispatch: any) => {

    ApiServices(
        'GET',
        `get_item_good?id=${id}`,
        (dataJSON) => {
            if (!dataJSON) {
            
                dispatch({
                    type: GoodType.SET_ERROR,
                    payload: {
                        textError: systemErrorMassegeDel
                    }
                })
    
            } else {

                try {

                    // Получили данные с сервера
                    const data = JSON.parse(dataJSON)[0]
                    
                    if(data){
        
                        return(
                            dispatch({
                                type: GoodType.GET_GOOD,
                                payload: data
                            })
                        )
        
                    }else{
                        return(
                            dispatch({
                                type: GoodType.SET_ERROR,
                                payload: {
                                    textError: `Товар c id = ${id} не найден`
                                }
                            })
                        )
                    }
        
              }catch{
                return(
                    dispatch({
                        type: GoodType.SET_ERROR,
                        payload: {
                            textError: systemErrorMassegeDel
                        }
                    })
                )
              }

            }
        }
    )
};


export const addGoodToBasket = (good: any) => (dispatch: any, _getState: any) => {
     
     const arBaket: any = sessionStorage.getItem("BASKET") || []
     arBaket.push(good)
     sessionStorage.setItem("BASKET", JSON.stringify(arBaket))

     dispatch({
         type: GoodType.ADD_BASKET,
         payload: [good]
     })
}

export const clearGoodToBasket = () => (dispatch: any, _getState: any) => {

    sessionStorage.setItem("BASKET", [] as any)

    dispatch({
        type: GoodType.CLEAR_BASKET,
        payload: []
    })
}