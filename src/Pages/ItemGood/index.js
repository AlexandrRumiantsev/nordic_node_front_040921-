import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';

import { fetchGood, addGoodToBasket } from '../../store/actons/good/good-action'
import {
    useParams
  } from "react-router-dom";

import './style.css';

export const ItemGood = () => {
    //Получаем диспатч из хука
    const dispatch = useDispatch()
    // Получаем id способом из чистого JS
    //const id = window.location.pathname.split("/")[2]
    // Получаем id из хука useParams (один из новых способов)
    const {id} = useParams();

    const error = useSelector(
        (state) => state.Good.error
    )
    
    const itemData = useSelector(
        (state) => state.Good.item
    )

    // useEffect заменяет хуки ЖЦ из классового компонента
    // В данном случае он сработает 1 раз при отрисовке компонента
    useEffect(() => {
        //Оборачиваем в диспатч экшн
        id && dispatch(fetchGood(id))
    },[])

    useEffect(() => {
 
    }, [itemData])

    let [counter, setCounter] = useState(0)   

    const handlerSetter = (operator) => {
        operator === '+' ? setCounter(++counter) : (
            counter > 0 && setCounter(--counter)
        )
    }

    const addToBasketHandler = () => {
        itemData.COUNT = counter
        dispatch(addGoodToBasket(itemData))
    }

    return(
      <div>
          {
            error !== `` 
            ? error
            : <div id={itemData?.ID}>
                <h1>{itemData?.TITLE}</h1>
                <img src={itemData?.IMG} 
                   alt={itemData?.DISCRIPTION} 
                />
                <article>
                    {itemData?.DISCRIPTION}
                </article>
                <article className='panel'>
                        <div className='counter'>
                            <button onClick={() => handlerSetter("-")}>-</button>
                            <span>{counter}</span>
                            <button onClick={() => handlerSetter("+")}>+</button>
                        </div>
                        <button onClick={() => addToBasketHandler()}>
                            Добавить в корзину
                        </button>
                </article>
            </div>
          }
      </div>
    )

}