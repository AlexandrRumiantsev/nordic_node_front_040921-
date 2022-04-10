import {GoodType, systemErrorMassege, systemErrorMassegeDel} from "../../const";

export const fetchGoods = () => (dispatch, _getState) => {

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


export const delItemGood = (id, goods) => (dispatch, _getState) => {

    const newGoodsList = goods.filter(
        (item) => item.ID !== id
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

 
export const filterGoodList = (categoryId, goods) => (dispatch, _getState) => {

    const newGoodsList = goods.filter(
        (item) => item.CATEGORY_ID == categoryId || categoryId == "ALL"
    )

    return(
        dispatch({
            type: GoodType.FILTER_LIST,
            payload: newGoodsList
        })
    )
    

}



export const fetchGood = (id) => (dispatch) => {
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