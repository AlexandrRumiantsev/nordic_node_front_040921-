import { BASE_URL } from "./const";

export const ApiServices = (type: string, action: string, callback: (data: any) => void) => {

    // 1. Создаём новый объект XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // 2. Конфигурируем его: GET-запрос 
    xhr.open(type, `${BASE_URL}${action}`, false);
    // 3. Отсылаем запрос
    xhr.send();

    if(xhr.status != 200) {
        callback(null)
    }else{
        callback(xhr.response)
    }
    

}