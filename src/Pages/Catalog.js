import { useEffect } from 'react';

import GoodCard from "../Components/GoodCard/"

import './style.css';
import { useSelector, useDispatch } from 'react-redux'

import {fetchGoods, filterGoodList}  from '../store/actons/good/good-action'


export const Catalog = () => {
        
    const dispatch = useDispatch()

    const goddList = useSelector(
        (state) => state.Good.list
    )

    const filteredList = useSelector(
        (state) => state.Good.filteredList
    )

    const errorText = useSelector(
        (state) => state.Good.error
    )

    const User = useSelector(
        (state) => state.User.item
    )

    const handlerChangeCategory = (event) => {
        console.log("handlerChangeCategory")
        dispatch(
            filterGoodList(
                event.target.value,
                goddList
            )
        )
    }
   
    //Для след занятия!
    useEffect(() => {
        dispatch(
            fetchGoods()
        )  
    }, [])

    const list = filteredList || goddList

    return(
        <div>
            <h1>Страница Каталога</h1>
            <select onChange={(event) => handlerChangeCategory(event)}>
                <option value="ALL">Все категории</option>
                <option value="">Без категории</option>
                <option value="111">Мужская</option>
                <option value="222">Женская</option>
            </select>
            {   !errorText ?
                (<div class='card-list'>
                    {
                        list.map( (element) => (
                                <GoodCard
                                   element={element}
                                   goods={goddList}
                                />
                            )
                        )
                    }
                </div>) :
                <div>{errorText}</div>
            }

        </div>
    )
}