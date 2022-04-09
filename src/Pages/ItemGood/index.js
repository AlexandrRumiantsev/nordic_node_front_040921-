import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchGood } from '../../store/actons/good/good-action'

export const ItemGood = () => {
    //Получаем диспатч из хука
    const dispatch = useDispatch()
    // Получаем id способом из чистого JS
    const id = window.location.pathname.split("/")[2]

    // useEffect заменяет хуки ЖЦ из классового компонента
    // В данном случае он сработает 1 раз при отрисовке компонента
    useEffect(() => {
        //Оборачиваем в диспатч экшн
        dispatch(fetchGood(id))
    },[])

    return(
      <div>ITEM GOOD ID = {id}</div>
    )

}