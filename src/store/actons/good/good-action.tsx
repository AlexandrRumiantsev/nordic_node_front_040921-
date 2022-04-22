import {GoodType, systemErrorMassege, systemErrorMassegeDel} from "../../const";

export const fetchGoods = () => (dispatch: any, _getState: any) => {

        // 1. Создаём новый объект XMLHttpRequest
        const xhr = new XMLHttpRequest();

        // 2. Конфигурируем его: GET-запрос 
        xhr.open('GET', 'http://localhost:3000/get_all_good', false);

        // 3. Отсылаем запрос
        xhr.send();

        // 4. Если код ответа сервера не 200, то это ошибка
        if (xhr.status != 200) {
            
            dispatch({
                type: GoodType.SET_ERROR,
                payload: {
                    textError: systemErrorMassege
                }
            })

        } else {
           // вывести результат
           // Обрабатываем ошибку
            try {
                const data = JSON.parse(xhr.response)
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
};


export const delItemGood = (id: any, goods: any) => (dispatch: any, _getState: any) => {

    const newGoodsList = goods.filter(
        (item: any) => item.ID !== id
    )

    // 1. Создаём новый объект XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // 2. Конфигурируем его: GET-запрос 
    xhr.open('GET', `http://localhost:3000/del_item_good?id=${id}`, false);

    // 3. Отсылаем запрос
    xhr.send();

    // 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
        
        dispatch({
            type: GoodType.SET_ERROR,
            payload: {
                textError: systemErrorMassegeDel
            }
        })

    } else {
       // вывести результат
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
    console.log("fetchGood")
    //http://localhost:3000/get_item_good?id=222
    console.log(id)

    // 1. Создаём новый объект XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // 2. Конфигурируем его: GET-запрос 
    xhr.open('GET', `http://localhost:3000/get_item_good?id=${id}`, false);

     // 3. Отсылаем запрос
     xhr.send();


      // 4. Обработка возможных ошибок
      try {
            console.log("try")
            // Получили данные с сервера
            const data = JSON.parse(xhr.response)[0]
            
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

      } catch {
            return(
                dispatch({
                    type: GoodType.SET_ERROR,
                    payload: {
                        textError: systemErrorMassegeDel
                    }
                })
            )
      }
    /*
    

    

   

    // 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
        
        dispatch({
            type: GoodType.SET_ERROR,
            payload: {
                textError: systemErrorMassege
            }
        })

    } else {
       // вывести результат
       // Обрабатываем ошибку
        try {
            const data = JSON.parse(xhr.response)
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
    */
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